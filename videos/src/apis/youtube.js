import axios from 'axios';

const KEY = 'AIzaSyBUl1fmHme6DpgmbsZDNZ3yJNqlA7Nc2Bo';

export default axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: {
            part: 'snippet',
            maxResults: 5,
            kay: KEY
      }
});