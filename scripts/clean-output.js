import fs from 'fs/promises'
import path from 'path'
import os from 'os'
import dotenv from 'dotenv'

dotenv.config() // loads .env into process.env

async function cleanOutput() {
  try {
    const cwd = process.cwd() //path.join(os.homedir(), 'Desktop')
    const dir = path.join(cwd, process.env.GEN_OUTPUT_PATH ?? '')
    await fs.rm(dir, { recursive: true, force: true })
    console.log(`Removed ${dir}`)
  } catch (err) {
    console.error(`Error removing directory:`, err)
  }
}

cleanOutput()