import axios from 'axios'

export const BASE_URL = "https://youtube138.p.rapidapi.com";


// this data is from https://rapidapi.com/Glavier/api/youtube138/
const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': '37587822f7msh5ad18f0888a02e4p185cc4jsn6dc8a1145d4a',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

  export const fetchDataFromApi = async(url)=>{
   try {
      const res = await axios.get(`${BASE_URL}/${url}`, options);
      // console.log('res=>', res)
      return res?.data; 
   } catch (error) {
      console.log('api error', error)
   }   
  };
