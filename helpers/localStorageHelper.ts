export const getLocalStorage = () => {
    if (typeof window != 'undefined') {
        return localStorage;
    }
    return null;
}