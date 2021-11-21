export const FetchingNews = async () => {
  const time = Date.now();
  let rawToJson = [];

  const raw = await fetch(
    `https://newsapi.org/v2/everything?q=ethereum&from=${time}&sortBy=publishedAt&language=&apiKey=b6ce77bd69d14178acef194fd682025b`
  );
  rawToJson = await raw.json();
  console.log(rawToJson);
};
