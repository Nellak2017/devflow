import { execSync } from 'child_process'

function run(cmd, cwd) {
    console.log(`➡️ Running: ${cmd} at ${cwd}`)
    execSync(cmd, { stdio: 'inherit', cwd })
}

function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
}

export default async function installDependencies(appDir) {
    try {
        console.log(`🔧 Starting dependency install in: ${appDir}`)

        // --- Step 1: Regular dependencies ---
        run(
            `pnpm add \
@emotion/react@latest @emotion/styled@latest @mui/lab@latest @mui/material@latest @mui/x-date-pickers@latest \
@reduxjs/toolkit@latest @supabase/supabase-js@latest dotenv@latest jest@latest next@latest react@latest react-dom@latest \
react-google-button@latest react-hook-form@latest react-icons@latest react-loader-spinner@latest \
react-redux@latest react-toastify@latest redux@latest reselect@latest wretch@latest --lockfile-only=false --no-optional`,
            appDir
        )

        await wait(5000)

        // --- Step 2: Dev dependencies ---
        run(
            `pnpm add -D \
cypress@latest eslint@latest eslint-config-next@latest eslint-plugin-fp@latest eslint-plugin-storybook@latest \
@storybook/react@latest @storybook/addon-essentials@latest @storybook/addon-interactions@latest \
@swc/core@latest @swc/jest@latest @testing-library/jest-dom@latest @testing-library/react@latest \
@testing-library/user-event@latest fast-check@latest jest-environment-jsdom@latest redux-mock-store@latest --lockfile-only=false --no-optional`,
            appDir
        )

        await wait(5000)

        // --- Initialize Storybook ---
        run('pnpx sb init --builder webpack5 --skip-install', appDir)

        await wait(5000)

        // --- Install Cypress binary ---
        run('pnpx cypress install', appDir)

        await wait(5000)

        // --- Final cleanup ---
        run('pnpm up --latest', appDir)

        console.log('✅ All dependencies installed and updated successfully!')
    } catch (error) {
        console.error('❌ An error occurred during dependency installation:', error)
        process.exit(1)
    }
}