import { Navbar } from "../../components/Navbar/Navbar";
import { Card } from "../../components/Card/Card";
import { news } from "../../Datas.js";
import { HomeBody } from "./HomeStyled.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeBody>
        {news.map((item, index) => {
          return <Card key={index} news={item} />;
        })}
      </HomeBody>
    </>
  );
}
