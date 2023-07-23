export type GetRequestParams = {
    author?: string, 
    genre?: string,
    query?: string,
    page?: number,
    limit?: number,
}

export type GetRandomRequestParams = {
    author?: string,
    genre?: string,
    count?: number,
}

export interface IQuoteResponse {
    statusCode:  number;
    message:     string;
    pagination:  Pagination;
    totalQuotes: number;
    data:        Array<Quote>;
}

export interface Quote {
    _id:         string;
    quoteText:   string;
    quoteAuthor: string;
    quoteGenre:  string;
    __v:         number;
}

export interface Pagination {
    currentPage: number;
    nextPage:    null;
    totalPages:  number;
}
