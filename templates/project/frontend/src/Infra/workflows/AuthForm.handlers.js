import { signUpWithEmail, signInWithEmail, signInWithGoogle, requestPasswordReset, resetPassword } from '../Supabase/supabase_auth.js'
//import { toast } from 'react-toastify'

const showError = error => { 
    console.error(error.message); 
    //toast.error(error.message, { autoClose: 5000 }) 
}
const showSuccess = message => { 
    // TODO: implement showSuccess function in AuthForm.handlers.js
    //toast.success(message, { autoClose: 5000 }) 
}
export const handleSignUpWithEmail = async ({ email, password, router }) => {
    const { error } = await signUpWithEmail(email, password)
    if (error) { showError(error) } else { /* implement */ }
}
export const handleSignInWithEmail = async ({ email, password, router }) => {
    const { error } = await signInWithEmail(email, password)
    if (error) { showError(error) } else { /* implement */ }
}
export const handleSignInWithGoogle = async () => {
    const { error } = await signInWithGoogle()
    if (error) { showError(error) } else { /* implement */ }
}
export const handleRequestPasswordReset = async ({ email }) => {
    const { error } = await requestPasswordReset(email)
    if (error) { showError(error) } else { /* implement properly */ showSuccess("Password reset email sent!") }
}
export const handleResetPassword = async ({ password, router }) => {
    const { error } = await resetPassword(password)
    if (error) { showError(error) } else { /* implement properly */ router.replace('/login'); showSuccess("Password has been successfully reset!") }
}