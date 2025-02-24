import PocketBase from 'pocketbase';



const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_API);

pb.autoCancellation(false);

export const login = async (data) => {
    try {
        const authData = await pb.collection('provider').authWithPassword(data.email, data.password);
        console.log(authData);
        console.log(pb.authStore.token);
        console.log(pb.authStore.model);
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
        const provider = await pb.collection('provider').create(data);
        return { provider };
    } catch (error) {
        console.error(error);
        return { authData: [] };
    }
}


export const getProvider = async () => {
    try {
        const provider = await pb.collection('provider').getFullList();
        return { provider };
    } catch (error) {
        console.error(error);
        return { provider: [] };
    }
}   

export const getProviderById = async (id) => {
    try {
        const provider = await pb.collection('provider').getOne(id);
        return { provider };
    } catch (error) {
        console.error(error);
        return { provider: [] };
    }
}


