export const setToken = (token: string) => {
    localStorage.setItem('token', token);
}

export const clearLocalStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration')
}

export const setExpirationDate = () => {
    const expiration = new Date();
    expiration.setTime(expiration.getTime() + 1*24*60*60*1000);
    localStorage.setItem('expiration', expiration.toISOString())
}

export const tokenIsExpired = () => {
    const expiration = localStorage.getItem('expiration') || '0';
    const expirationDate = new Date(expiration);
    const now = new Date();
    const duration  = expirationDate.getTime() - now.getTime();
    
    return duration < 0;
}

export const getToken = () => {
    const token = localStorage.getItem('token');
    
    if (!token){
        return null;
    }

    const isExpired = tokenIsExpired();

    if (isExpired) {
        clearLocalStorage()
        return 'EXPIRED';
    }

    return token;
}