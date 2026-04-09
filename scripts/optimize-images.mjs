import fs from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const projectRoot = process.cwd()
const inputRoot = path.join(projectRoot, "public", "images")
const outputRoot = path.join(projectRoot, "public", "images-optimized")

const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"])

const folderPresets = [
    {
        match: /[\\/]hero(?:[\\/]|$)/i,
        width: 1920,
        quality: 62,
    },
    {
        match: /[\\/](?:galeria|promotions|paquetes)(?:[\\/]|$)/i,
        width: 1600,
        quality: 64,
    },
]

function getPreset(relativeFilePath) {
    const normalizedPath = relativeFilePath.split(path.sep).join("/")

    for (const preset of folderPresets) {
        if (preset.match.test(normalizedPath)) {
            return preset
        }
    }

    return {
        width: 1600,
        quality: 64,
    }
}

async function ensureDirectory(directoryPath) {
    await fs.mkdir(directoryPath, { recursive: true })
}

async function walk(directoryPath) {
    const entries = await fs.readdir(directoryPath, { withFileTypes: true })
    const files = await Promise.all(
        entries.map(async (entry) => {
            const absolutePath = path.join(directoryPath, entry.name)

            if (entry.isDirectory()) {
                return walk(absolutePath)
            }

            return [absolutePath]
        }),
    )

    return files.flat()
}

async function optimizeImage(absoluteFilePath) {
    const relativeFilePath = path.relative(inputRoot, absoluteFilePath)
    const extension = path.extname(absoluteFilePath).toLowerCase()

    if (!supportedExtensions.has(extension)) {
        return null
    }

    const preset = getPreset(relativeFilePath)
    const targetRelativePath = relativeFilePath.replace(/\.[^.]+$/, ".webp")
    const targetPath = path.join(outputRoot, targetRelativePath)
    const targetDirectory = path.dirname(targetPath)

    await ensureDirectory(targetDirectory)

    const sourceStats = await fs.stat(absoluteFilePath)

    await sharp(absoluteFilePath)
        .rotate()
        .resize({
            width: preset.width,
            withoutEnlargement: true,
            fit: "inside",
        })
        .webp({
            quality: preset.quality,
            effort: 5,
        })
        .toFile(targetPath)

    const targetStats = await fs.stat(targetPath)

    return {
        source: relativeFilePath,
        target: path.relative(projectRoot, targetPath),
        sourceBytes: sourceStats.size,
        targetBytes: targetStats.size,
        savedBytes: sourceStats.size - targetStats.size,
    }
}

function formatKilobytes(bytes) {
    return `${(bytes / 1024).toFixed(1)} KB`
}

async function main() {
    const files = await walk(inputRoot)
    const imageFiles = files.filter((filePath) => supportedExtensions.has(path.extname(filePath).toLowerCase()))
    const results = []

    for (const filePath of imageFiles) {
        const result = await optimizeImage(filePath)

        if (result) {
            results.push(result)
        }
    }

    const totalSourceBytes = results.reduce((sum, item) => sum + item.sourceBytes, 0)
    const totalTargetBytes = results.reduce((sum, item) => sum + item.targetBytes, 0)
    const totalSavedBytes = totalSourceBytes - totalTargetBytes

    console.log(`Optimized ${results.length} images into public/images-optimized`)
    console.log(`Original total: ${formatKilobytes(totalSourceBytes)}`)
    console.log(`Optimized total: ${formatKilobytes(totalTargetBytes)}`)
    console.log(`Estimated saved: ${formatKilobytes(totalSavedBytes)}`)

    const heaviestWins = [...results]
        .sort((a, b) => b.savedBytes - a.savedBytes)
        .slice(0, 10)

    if (heaviestWins.length > 0) {
        console.log("\nTop savings:")

        for (const item of heaviestWins) {
            console.log(
                `- ${item.source} -> ${item.target} (${formatKilobytes(item.savedBytes)} saved)`,
            )
        }
    }
}

main().catch((error) => {
    console.error("Image optimization failed:", error)
    process.exitCode = 1
})
