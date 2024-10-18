import Ranking from "../components/Ranking";
import { useEffect, useState } from "react";
import ToggleView from "../components/ToggleView";
import PerformanceOverview from "../components/PerformanceOverview";
import CategoryLeaderboard from "../components/Leaderboard";
import HeaderSection from "../components/HeaderSection";
import { useLocation } from "react-router-dom";

type FinishProps = {
  username: string;
};

function Finish({ username }: FinishProps) {
  const [toggleView, setToggleView] = useState(true);
  const [ranking, setRanking] = useState<{ username: string; score: number }[]>(
    [{ username: "", score: 0 }]
  );
  const location = useLocation();
  const { categories, points } = location.state || {};

  useEffect(() => {
    const httpGetRanking = async () => {
      const response = await fetch("http://localhost:3001/ranking");
      const data = await response.json();
      setRanking(data);
      if (response.ok) {
        console.log("ranking fetched successfully");
      }
    };
    httpGetRanking();
  }, []);

  useEffect(() => {
    const scrollToCenter = () => {
      if (!toggleView) {
        const centerY =
          (document.documentElement.scrollHeight - window.innerHeight) / 2;
        window.scrollTo({ top: centerY, behavior: "smooth" });
      }
    };
    scrollToCenter();
  }, [toggleView]);
  const sortRaking = ranking.sort((a, b) => b.score - a.score);
  console.log(username, points);
  
  const getRanking = sortRaking.findIndex((user) => (user.username === username) && (user.score === Number(points)));
  
  return (
    <>
      <PerformanceOverview points={points} userRanking={getRanking + 1} />
      <ToggleView setToggleView={() => setToggleView(!toggleView)} />
      <section className="flex flex-col w-fit justify-center mt-10 pb-36">
        {toggleView ? (
          <HeaderSection
            altText="trophy image"
            headerText="Leaderboard Standings"
            imageSrc="trophy-svgrepo-com.svg"
          />
        ) : (
          <HeaderSection
            altText="computer image"
            headerText="Tech Bubble"
            imageSrc="chart-graph-svgrepo-com.svg"
          />
        )}
        {toggleView ? (
          <Ranking ranking={sortRaking.slice(0, 15)} />
        ) : (
          <CategoryLeaderboard categories={categories} />
        )}
      </section>
    </>
  );
}

export default Finish;
