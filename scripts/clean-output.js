import fs from 'fs/promises'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config() // loads .env into process.env
const dir = process.env.GEN_OUTPUT_PATH || 'generated'
fs.rm(path.resolve(dir), { recursive: true, force: true })
  .then(() => console.log(`Removed ${dir}`))
  .catch(err => console.error(`Error removing ${dir}:`, err))