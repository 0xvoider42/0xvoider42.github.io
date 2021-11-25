import '../../App.css';
import React from 'react';
import Footer from '../Footer.js';
import { NewsContextProvider } from '../APIs/News';
import News from '../News';

function NewsPage() {
  return (
    <NewsContextProvider>
      <News />
      <Footer />
    </NewsContextProvider>
  );
}

export default NewsPage;
