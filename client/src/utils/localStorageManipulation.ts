export const setToken = (token: string) => {
    localStorage.setItem('token', token);
}

export const setExpirationDate = () => {
    const expiration = new Date();
    expiration.setTime(expiration.getTime() + 1*24*60*60*1000);
    localStorage.setItem('expiration', expiration.toISOString())
}

export const getToken = () => {
    const token = localStorage.getItem('token');
    if (!token){
        return null;
    }
    
    const duration: string = localStorage.getItem('expiration') || '0';
    if (+duration < 0) {
        return 'EXPIRED';
    }

    return token;
}