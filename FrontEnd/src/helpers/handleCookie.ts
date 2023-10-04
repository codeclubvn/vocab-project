import Cookies from "js-cookie";

export const checkExistToken = (key: string): boolean => {
    const token = Cookies.get(key) ;
    if(token) {
        return false;
    }
    console.log(token);
    return true;
}

export const getCookie  = (key: string) => {
    const token = Cookies.get(key) ;
    if(token) {
        return token;
    }
    console.log(token);
    return true;
}

export const setToken  = ( value :string) => {
    const token = Cookies.set("token", value, {
        expires: 7,
      });

    if(token) {
        return token;
    }
    console.log(token);
    return true;
}
