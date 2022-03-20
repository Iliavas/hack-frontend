import { del, get } from "../fetch";

export async function getMessages() {
    return await get("message/")
}

export async function deleteMessage(id: string) {
    return del('message/'+id+'/')
}