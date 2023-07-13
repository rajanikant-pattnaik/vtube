import axios from "axios";

export const fetchSearchData = async (item='latest') => {
  const url=`https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${item}`
  const options = {
    method: 'GET',
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': '96dc3bc4c7msh5a2e8330accf78ap1d0c9djsna783b8ed5f34',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  try {
    const response = await axios.get(url,options);
    const res=response.data;
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const fetchVideoDetail=async(id:any)=>{
  const url= 'https://youtube-v31.p.rapidapi.com/videos'
  const options = {
    method: 'GET',
    params: {
      part: 'contentDetails,snippet,statistics',
      id: id
    },
    headers: {
      'X-RapidAPI-Key': '96dc3bc4c7msh5a2e8330accf78ap1d0c9djsna783b8ed5f34',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.get(url,options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
