import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const manifest = JSON.parse(fs.readFileSync(path.join(root, "registry/manifest.json"), "utf8"))
const componentDir = path.join(root, "components/ui")
const componentFiles = fs.readdirSync(componentDir).filter((name) => name.endsWith(".tsx"))

const errors = []
if (manifest.name !== "NeoBrutal Rivet") errors.push("manifest name is wrong")
if (manifest.family !== "NeoBrutal") errors.push("manifest family is wrong")
if (manifest.componentCount !== componentFiles.length) errors.push(`registry says ${manifest.componentCount} components but source has ${componentFiles.length}`)

for (const file of componentFiles) {
  const source = fs.readFileSync(path.join(componentDir, file), "utf8")
  if (source.includes("@/")) errors.push(`${file}: contains app-specific @/ alias`)
  if (/product-specific-name-that-must-not-appear/i.test(source)) errors.push(`${file}: contains forbidden product coupling`)
}

for (const rel of ["README.md", "AGENTS.md", "docs/LLM-GUIDE.md", "styles/tokens.css", "styles/components.css", "styles/motion.css", "styles/utilities.css"]) {
  const source = fs.readFileSync(path.join(root, rel), "utf8")
  if (/product-specific-name-that-must-not-appear/i.test(source) && rel !== "README.md") errors.push(`${rel}: contains forbidden product coupling`)
}

if (errors.length) {
  console.error(errors.join("\n"))
  process.exit(1)
}
console.log(`NeoBrutal Rivet validation passed: ${componentFiles.length} components registered.`)
