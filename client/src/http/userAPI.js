import {$host} from "./index";

export const createUser = async (user) => {
    const {data} = await $host.post('api/user', user)
    return data
}

export const fetchUser = async(page, limit = 9) => {
    const {data} = await $host.get('api/user', {params: {
        page, limit
        }})
    return data
}

export const deleteUser = async(user) => {
    const {data} = await $host.put('api/user', user)
    return data
}

export const changeUser = async(user) => {
    const {data} = await $host.put('api/user/change', user)
    return data
}