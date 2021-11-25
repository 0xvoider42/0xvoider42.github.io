import React, { useContext } from 'react';
import { NewsContext } from '../components/APIs/News';
import NewsArticle from './NewsArticle';
import './News.css';

function News(props) {
  const { data } = useContext(NewsContext);
  const NewsMap = new Map();
  NewsMap.set('article', {});
  console.log(data);

  return (
    <>
      <div>
        {data
          ? data.articles.map((news) => <NewsArticle data={news} key={news.url} />)
          : 'Loading'}
      </div>
    </>
  );
}

export default News;
