export const saveLocalStorageToken = (token: string) =>
    localStorage.setItem("token", token);
export const removeLocalStorageToken = () => localStorage.removeItem("token");
export const getLocalStorageToken = () => localStorage.getItem("token");

export const saveLocalStorageUsername = (username: string) =>
    localStorage.setItem("username", username);
export const removeLocalStorageUsername = () =>
    localStorage.removeItem("username");
export const getLocalStorageUsername = () => localStorage.getItem("username");