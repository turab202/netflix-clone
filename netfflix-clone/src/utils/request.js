const API_KEY = Process.env.REACT_APP_API_KEY; 
const requests = {
    fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchKidsTVShows: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
};
export default requests;