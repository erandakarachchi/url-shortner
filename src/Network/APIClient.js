import axios from "axios";

export const getShortenUrl = (url) => {
  const encodedParams = new URLSearchParams();
  encodedParams.append("url", url);

  const options = {
    method: "POST",
    url: process.env.REACT_APP_SHORTNER_URL,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    },
    data: encodedParams,
  };
  
  return new Promise((resolve, reject) => {
    axios
      .request(options)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
