import { GetRandomRequestParams, GetRequestParams } from "./types";

const BaseURL = " https://quote-garden.onrender.com/api/v3/quotes";

const stringifyParams = (params : any) => {
    return Object.fromEntries(Object.entries(params).map(([key, value] : [string, any]) => [key, value.toString() as string]))
}

export const getRandomQuotesQuery = async (params?: GetRandomRequestParams) => {
    if (!params) return `${BaseURL}/random`
    return `${BaseURL}/random?${new URLSearchParams(stringifyParams(params))}}`
};

export const getQuotesQuery = async (params?: GetRequestParams) => {
    if (!params) return `${BaseURL}`
    return `${BaseURL}?${new URLSearchParams(stringifyParams(params))}}`
};