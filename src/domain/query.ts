import { GetRandomRequestParams} from "./types";

const BaseURL = " https://quote-garden.onrender.com/api/v3/quotes";

export const getQuotesQuery = async (params?: GetRandomRequestParams) => {
    if (!params) return `${BaseURL}/random?`;
    const author = params.author ? `&author=${params.author}` : "";
    const genre = params.genre ? `&genre=${params.genre}` : "";
    const count = params.count ? `&count=${params.count}` : "";
    return `${BaseURL}/random?${author}${genre}${count}`;
};