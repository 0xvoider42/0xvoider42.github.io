import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=ethereum&from=today&sortBy=publishedAt&language=&apiKey=b6ce77bd69d14178acef194fd682025b`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return <NewsContext.Provider value={{ data }}>{props.children}</NewsContext.Provider>;
};
