const API_KEY = process.env.REACT_APP_API_KEY; 
const request = {
    fetchAnimation: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
    fetchKidsAndAnimation: `/discover/tv?api_key=${API_KEY}&with_genres=10762,16`,
    fetchKidsTVShows: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
};
export default request;