import { execSync } from 'child_process'

const run = (cmd, cwd) => {
    console.log(`➡️ Running: ${cmd} at ${cwd}\n`)
    execSync(cmd, { stdio: 'inherit', cwd })
}

export const installDependencies = async appDir => {
    try {
        console.log(`🔧 Starting dependency install in: ${appDir}`)
        run('pnpm up --latest', appDir)
        console.log('✅ All dependencies installed and updated successfully!')
    } catch (error) {
        console.error('❌ An error occurred during dependency installation:', error)
        process.exit(1)
    }
}
export default installDependencies