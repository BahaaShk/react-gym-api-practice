// import dotenv from 'dotenv'
// dotenv.config()
// const rapidApiKey = process.env.REACT_APP_RAPID_API_KEY;
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '39367061cdmsheefe9b02271f782p1f7741jsn46c1675736ec'
    }
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '39367061cdmsheefe9b02271f782p1f7741jsn46c1675736ec',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  

export const fetchData = async (url,options) => {
    const response = await fetch(url,options)
    const data = await response.json()
    return data;
}