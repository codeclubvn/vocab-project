import Cookies from 'universal-cookie';

const cookies: Cookies = new Cookies();

export const useCookie = () => {

    const getCookie = (cookieKey: string) => {
        const data = cookies.get(cookieKey);
        return data;
    }

    const setCookie = (cookieKey: string, value: any) => {
        cookies.set(cookieKey, value);
    }

    return {
        getCookie,
        setCookie
    }

}

export default useCookie;
