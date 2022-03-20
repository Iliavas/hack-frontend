import { get, post } from "../fetch"

export async function getBots() {
    return await get("chat/")
}
export async function getBot(id: string) {
    return await get("chat/"+id+"/");
}
export async function getBotFromUser() {
    const tg_id = localStorage.getItem("account_id");
    return (await get("user/"+tg_id+'/'));
}
export async function createBot(name: string, tg_token: string, start_message: string) {
    const user_tg_id = localStorage.getItem("account_id")
    const bot_id = tg_token.split(':')[0]
    return await post("chat-from-username/", {
        name: name,
        start_message: start_message+" message from bot",
        api_key: tg_token,
        tg_id: bot_id,
        admin_tg_id: user_tg_id
    });
}