import { get, post } from "../fetch";

export async function getUser(id: string) {
    return await get('user'+id+'/');
}

export async function createUser(telegramId: string, username: string) {
    console.log(telegramId, username);
    return await post('user/', {
        username: username,
        tg_id: telegramId
    })
}