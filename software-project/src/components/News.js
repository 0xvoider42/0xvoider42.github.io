import React, { useState, Component, componentDidMount } from 'react';
import { FetchingNews } from './APIs/News';
import ListOfArticles from '../components/APIs/ListOfArticles';

class NEWS extends Component {
  render() {
    const NewsList = (article) => (
      <li>
        <a href={`${article.url}`}>{article.title}</a>
      </li>
    );

    const newsItems = this.state.newsItems.map((e) => NewsList(e));
    return (
      <div className='container flex-auto mx-auto gap-x-4 gap-y-8 px-10'>
        <div>{newsItems}</div>
      </div>
    );
  }
}

export default NEWS;
