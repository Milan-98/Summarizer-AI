import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
  
export const articleApi =  createApi({
    reducerPath:"articleApi",
    baseQuery: fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders:(header)=>{
            header.set('X-RapidAPI-Key',rapidApiKey);
            header.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return header;
        }
    }),
    endpoints: (builder) =>({
    getSummary : builder.query({
        query:(params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
    })
})
})

export const {useLazyGetSummaryQuery} = articleApi;