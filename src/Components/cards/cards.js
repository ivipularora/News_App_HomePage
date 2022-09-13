import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroCard from "../heroCard";
import GridCard from "../grid-card";

function Cards({ category }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=bfb591b3ce3b48088d0816e2731aec36`
      );
      setNews(response.data.articles);
    };
    loadNews();
  }, []);

  const heroNews = news.slice(0, 1);
  const gridNews = news.slice(1, 5);

  const listNews = news.slice(5);

  return (
    <a style={{margin: "12rem"}} id={category} >
      <h1>{category + "  >"}</h1>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{width: "50%"}}>
          <HeroCard
            bgImg={heroNews[0]?.urlToImage}
            title={heroNews[0]?.title}
          />
          <div style={{ display: "grid", gridTemplateColumns: "auto auto", marginTop:"2rem" }}>
            {gridNews.map((item) => {
              return <GridCard img={item?.urlToImage} title={item?.title} />;
            })}
          </div>
        </div>
        <ul style={{width: "50%", gap: "0.5rem"}}>
          {listNews.map((item) => {
            return <><li> {item?.title} </li>
            <hr /> </>;
          })}
        </ul>
      </div>
    </a>
  );
}

export default Cards;