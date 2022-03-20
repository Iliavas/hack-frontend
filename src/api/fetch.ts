import axios from 'axios';

const ORIGIN = 'http://true.loca.lt/api/'

export async function get(url: string) {
    const data = await axios.get(ORIGIN+url);
    return data.data;
}

export async function post(url: string, params: any) {
    console.log(params);
    const data = await axios.post(ORIGIN+url, params, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return data.data;
}

export async function del(url: string) {
    return await axios.delete(ORIGIN+url)
}