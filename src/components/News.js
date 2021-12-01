import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './News.css';

function News() {
  // creating a stateful hooks to be used in react components
  const [articleData, setData] = useState(null);
  const [search, setSearch] = useState('crypto');
  const [getArticle, setGetArticle] = useState();
  // t is a internationalization variable
  const { t } = useTranslation();

  let date = new Date('YYYY - MM - DD');
  const url = `https://newsapi.org/v2/everything?q=${search}&from=${date}&sortBy=publishedAt&language=en&apiKey=b6ce77bd69d14178acef194fd682025b`;

  // @useEffect() react basic hook used to subscribe and listen to the api
  useEffect(() => {
    getData();
    // @mounted controls the data leak cases
    let mounted = true;
    async function getData() {
      const raw = await fetch(url);
      const article = await raw.json();
      const posts = article.articles;
      if (mounted) {
        setTimeout(() => {
          setData(posts);
        }, 1 * 1000);
      }
      console.log(posts);
    }
    return () => {
      mounted = false;
    };
  });

  // handler for the input in the search bar
  const inputHandler = (event) => {
    setGetArticle(event.target.value);
  };
  // assigns the value to the @useState value
  const submitHandler = () => {
    setSearch(getArticle);
  };

  return (
    <>
      {articleData && (
        <div className='articleData'>
          <form className='grid-flex place-items-center max-w-sm'>
            <div className='flex justify-center border-b border-purple-700 py-2'>
              <input
                className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                type='text'
                id='article-name'
                placeholder='What to search for?'
                onChange={inputHandler}
                value={getArticle}
              />
              <button
                className='flex-shrink-0 bg-purple-800 hover:bg-purple-700 border-purple-200 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
                type='button'
                onClick={submitHandler}
              >
                {t('news.search')}
              </button>
            </div>
          </form>
          <div className='p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5'>
            {articleData.map((article, index) => (
              <div className='bg-white rounded-xl p-4 shadow-xl mt-4' key={index}>
                <div className='flex flex-col justify-center items-center'>
                  <img src={article.urlToImage} className='w-full h-40 rounded-lg' alt='...' />
                </div>
                <p className='font-semibold text-lg mt-1 text-left'>{article.title}</p>
                <p className='font-semibold text-sm text-gray-400'>
                  {article.content.substring(0, 150)} ...
                </p>
                <button
                  type='button'
                  className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3'
                >
                  <a href={article.url} target='_blank' rel='noreferrer'>
                    {t('news.read')}
                  </a>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default News;
