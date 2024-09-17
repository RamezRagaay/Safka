import PocketBase from 'pocketbase';
import Cookies from 'js-cookie';



const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_API);
pb.autoCancellation(false);

export const login = async (data) => {
    try {
        const authData = await pb.collection('users').authWithPassword(data.email, data.password);

        return { authData };
    } catch (error) {
        console.error(error);
        return { authData: [] };
    }
}

export const logout = async () => {
    try {
        await pb.admins.clear();        
        return { authData: [] };
    } catch (error) {
        console.error(error);
        return { authData: [] };
    }
}

export const signup = async (data) => {
    try {
        const user = await pb.collection('users').create(data);
        return { user };
    } catch (error) {    
        console.error(error);
        return { user: null };
    }
}

export const OAuth2 = async () => {
    try {
        const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' });
        return { authData };
    } catch (error) {    
        console.error(error);
        return { user: null };
    }
}