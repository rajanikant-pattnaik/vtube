import axios from "axios";

export const fetchSearchData = async () => {
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      q: 'latest',
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '50',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': '96dc3bc4c7msh5a2e8330accf78ap1d0c9djsna783b8ed5f34',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  try {
    const response = await axios.request(options);
    console.log(response);
    const res=response.data;
    return res;
  } catch (error) {
    console.error(error);
  }
};
