import {$authHost, $host} from "./index";

export const createPicture = async (picture) => {
    const {data} = await $authHost.post('api/picture', picture)
    return data
}

export const fetchGenres = async () => {
    const {data} = await $host.get('api/genre')
    return data
}

export const fetchPainters = async () => {
    const {data} = await $host.get('api/painter')
    return data
}

export const fetchPictures = async () => {
    const {data} = await $host.get('api/picture')
    return data
}

export const fetchOnePicture = async (id) => {
    const {data} = await $host.get('api/picture/' + id)
    return data
}

