
const API = "https://api.themoviedb.org/3"


export const get = (path)=>{
    return fetch (API+path,{
headers:{
    Authorization:
    process.env.REACT_APP_TMDB_TOKEN,
    "Content-Type": "application/json;charset=utf-8",
}
}).then((results)=>results.json())
}


// Attention! Put you own token in REACT_APP_TMDB_TOKEN


