import React from 'react';
import './News.css';

class News extends React.Component {
  state = {
    loading: true,
    news: null,
  };
  async componentDidMount() {
    const time = Date.now();
    let getNews;
    const url = `https://newsapi.org/v2/everything?q=ethereum&from=${time}&sortBy=publishedAt&language=&apiKey=b6ce77bd69d14178acef194fd682025b`;

    const raw = await fetch(url);
    getNews = await raw.json();
    this.setState({ news: getNews.articles[0], loading: false });
    console.log(getNews.articles[0]);
  }

  render() {
    return (
      <>
        <div>
          {this.state.loading || !this.state.news ? (
            <div>waiting for the news...</div>
          ) : (
            <div>
              <div>{this.state.news.content}</div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default News;
