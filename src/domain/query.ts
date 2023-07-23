import { GetRandomRequestParams, GetRequestParams } from "./types";

const BaseURL = "https://quote-garden.onrender.com/api/v3/quotes";

const toQueryString = (params : {[key: string] : number | string}) =>{
    return Object.keys(params).map(key=>`${key}=${params[key].toString().replace(" ", "%20")}`).join("&")
}

export const stringifyParams = (params: {[key: string]: string | number}) => {
    return Object.fromEntries(Object.entries(params).map(([key, value]: [string, string | number]) => [key, value.toString()]))
}

export const getRandomQuotesQuery = (params?: GetRandomRequestParams) => {
    if (!params) return `${BaseURL}/random`
    return `${BaseURL}/random?${toQueryString(stringifyParams(params))}`
};

export const getQuotesQuery = (params?: GetRequestParams) => {
    if (!params) return `${BaseURL}`
    return `${BaseURL}?${toQueryString(stringifyParams(params))}`
};

console.log(getQuotesQuery({ author: "Albert Einstein", genre: "science", page: 1, limit: 10 }))