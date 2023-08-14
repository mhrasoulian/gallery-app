const API_URL = process.env.API_URL

export const getData = async() => {
    const response = await fetch(`${API_URL}/photos`)
    const responseJson = await response.json();
    return responseJson;
}


export const getCategory = async() => {
    const response = await fetch(`${API_URL}/categories`)
    const responseJson = await response.json();
    return responseJson;
}