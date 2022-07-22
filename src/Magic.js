import { Magic } from 'magic-sdk';
const magic = new Magic('pk_live_AABC93231E65FC6F');

export const checkUser = async (cb) => {
    const isLoggedIn = await magic.user.isLoggedIn();
    if (isLoggedIn) {
        const user = await magic.user.getMetadata();
        return cb({ isLoggedIn: true, email: user.email });
    }
    return cb({ isLoggedIn: false });
};

export const loginUser = async (email) => {
   const did_token= await magic.auth.loginWithMagicLink({ email });
   console.log(did_token)
    window.localStorage.setItem('1', {did_token});
};

export const logoutUser = async () => {
    await magic.user.logout();
};