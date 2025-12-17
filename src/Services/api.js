const API_KEY = "9f532ac4"
const BASE_URL = "http://www.omdbapi.com/"

 export const getPopularMovies = async () =>{
    const response =  await fetch(`${BASE_URL}?s=Avengers&apikey=${API_KEY}`);
    const data = await response.json()
     console.log(data)
    return data.Search   //results
   
 };

  export const SearchMovies = async (query) =>{
    const response =  await fetch(`${BASE_URL}?s=$${encodeURIComponent(query)}&apikey=${API_KEY}`);
    const data = await response.json()
    return data.Search //results;
 };

