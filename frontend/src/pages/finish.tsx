import Ranking from "../components/Ranking";
import { useEffect, useState } from "react";
import ToggleView from "../components/ToggleView";
import PerformanceOverview from "../components/PerformanceOverview";
import CategoryLeaderboard from "../components/Leaderboard";
import HeaderSection from "../components/HeaderSection";
import { useLocation } from "react-router-dom";

function Finish() {
  const [toggleView, setToggleView] = useState(true);
  const location = useLocation();
  const { categories, totalPoints } = location.state || {};
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

  return (
    <>
      <PerformanceOverview totalPoints={totalPoints} />
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
            altText="trophy image"
            headerText="Tech Bubble"
            imageSrc="chart-graph-svgrepo-com.svg"
          />
        )}
        {toggleView ? <Ranking /> : <CategoryLeaderboard categories={categories}/>}
      </section>
    </>
  );
}

export default Finish;
