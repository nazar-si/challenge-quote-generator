import { getQuotesQuery, getRandomQuotesQuery, stringifyParams } from "../query"

describe('stringifyParams', ()=>{
    it("should leave string params as they are", ()=>{
        const p = {
            "a" : "b",
            "c" : "d"
        }
        expect(stringifyParams(p)).toStrictEqual(p);
    })
    it("should deal with number params", ()=>{
        const p = {
            "a": "b",
            "num": "1",
            "c" : 2
        }
        expect(stringifyParams(p)).toStrictEqual({...p, "c": "2"})
    })
})

describe('getRandomQuotesQuery', ()=>{
    it("should return proper base query", ()=>{
        expect(getRandomQuotesQuery()).toEqual("https://quote-garden.onrender.com/api/v3/quotes/random")
    })
    it("should add query params properly", ()=>{
        expect(getRandomQuotesQuery({
            "author": "abc abc",
            "count": 3
        })).toEqual(
            "https://quote-garden.onrender.com/api/v3/quotes/random?author=abc%20abc&count=3"
        )
    })
})

describe('getQuotesQuery', ()=>{
    it("should return proper base query", ()=>{
        expect(getQuotesQuery()).toEqual("https://quote-garden.onrender.com/api/v3/quotes")
    })
    it("should add query params properly", ()=>{
        expect(getQuotesQuery({
            "author": "abc abc",
            "limit": 2
        })).toEqual(
            "https://quote-garden.onrender.com/api/v3/quotes?author=abc%20abc&limit=2"
        )
    })
})