#!/usr/bin/env node
import path from 'path'
import dotenv from 'dotenv'
import installDependencies from "./scripts/install-script.js"

dotenv.config() // loads .env into process.env
const cwd = process.cwd() //path.join(os.homedir(), 'Desktop')
const destination = path.join(cwd, process.env.GEN_OUTPUT_PATH ?? '', '{{name}}') //: 'generated/{{name}}', works if relative

export const plopFunction = plop => {
  plop.setGenerator('multi', {
    description: 'Generate multiple files from a template folder',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your project name?',
        default: 'my-project',
      },
    ],
    actions: [
      {
        type: 'addMany', // Add many files and directories. Files must be defined for a directory to copy.
        base: 'templates/project/frontend', // Relative to where plopfile.js executes from. Uses globbly underneath. Relative _ONLY_.
        templateFiles: 'templates/project/frontend/**', // Uses a recursive glob, will select all files.
        destination, // Relative to plopfile.js or Absolute. Uses node resolve underneath.
        force: true, // Overwrites existing files, if false it shows an error in the console and doesn't do it
        globOptions: { dot: true }, // Allows hidden files
      },
      async function installDeps(data) {
        const resolvedDestination = path.resolve(
          cwd,
          process.env.GEN_OUTPUT_PATH ?? '',
          data.name
        )
        console.log(`📦 Installing dependencies in: ${resolvedDestination}`)
        await installDependencies(resolvedDestination)
        return '✅ Dependencies installed'
      }
    ],
  })
}
export default plopFunction