import { useState, useEffect } from "react";

import { Navbar } from "../../components/Navbar/Navbar";
import { Card } from "../../components/Card/Card";
import { HomeBody } from "./HomeStyled.jsx";
import { getAllNews } from "../../services/newsServices.js";

export default function Home() {
  const [news, setNews] = useState([]);

  async function findAllNews() {
    const response = await getAllNews();
    setNews(response.data.results);
  }

  useEffect(()=>{
    findAllNews();
  },[]);

  return (
    <>
      <Navbar />
      <HomeBody>
        {news.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes.length}
            comments={item.comments.length}
          />
        ))}
      </HomeBody>
    </>
  );
}
