import React from 'react';
import { List } from 'semantic-ui-react';

const ListOfArticles = (args) => {
  return (
    <List divided style={{ maxWidth: 900, margin: 'auto' }}>
      {args.articles.map((article, index) => (
        <List.Item key={article.title}>{article.title + index}</List.Item>
      ))}
    </List>
  );
};

export default ListOfArticles;
