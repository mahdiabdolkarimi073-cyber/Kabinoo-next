import {backend} from "@/utils/api";
import {UserType} from "@/utils/type";

export async function getUser() {
    const user = await backend<UserType>("/user")
        .then(e=>e.data);
    return user;
}