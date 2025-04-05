
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewsSection.css"; 

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/everything?q=movies&apiKey=${NEWS_API_KEY}&pageSize=6&language=en`;
        const res = await axios.get(url);
        setArticles(res.data.articles);
      } catch (error) {
        console.error("News fetch error:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-section">
      <h2>🎥 Latest Movie News</h2>
      <div className="news-cards">
        {articles.map((article, idx) => (
          <div className="news-card" key={idx}>
            <img src={article.urlToImage} alt="news" />
            <h4>{article.title}</h4>
            <p>{article.description?.slice(0, 100)}...</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
