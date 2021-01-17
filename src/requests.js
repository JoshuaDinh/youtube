const API_KEY = "AIzaSyDhH1Pv_8hlOVJr0dFrkngzaMLkU9JzXGE";

const requests = {
  fetchJavascript: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=Javascript+Tutorials&key=${API_KEY}`,
  fetchBitcoin: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=Bitcoin&key=${API_KEY}`,
  fetchTechnology: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=tech&key=${API_KEY}`,
  fetchReact: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=React+Tutorials&key=${API_KEY}`,
};

export default requests;
