import { supabase } from './supabase_client.js'
import wretch from 'wretch' // used for DX only. If it is too bloated remove for manual version

const WEB_SERVER_URL = process.env.NEXT_PUBLIC_WEB_SERVER_URL
// define default serializers and deserializers
// define displayError
// Ex: const displayError = (consoleErrorMessage = 'Failed to fetch tasks:', toastError = 'Failed to fetch tasks') => consoleError => { console.error(consoleErrorMessage, consoleError); toast.error(toastError); }
/* 
export const <endpoint> = async (serialize = default<serializer>) => {
    const { data: { session }, error } = await supabase.auth.getSession()
    return (error || !session)
        ? <display error function>
        : wretch(`${WEB_SERVER_URL}/rest/of/path`)
            .rest of actions
            .catch(displayError())
}
*/