import StatCard from "../components/StatCard";
import useCategory from "../customHooks/useCategory";
import Ranking from "../components/Ranking";
import { useState } from "react";
import ToggleView from "../components/ToggleView";
import PerformanceOverview from "../components/PerformanceOverview";

function Finish() {
  const { categoryList } = useCategory();
  const [toggleView, setToggleView] = useState(true);
  return (
    <>
      <div className="my-36">
        <PerformanceOverview />
      </div>
      <ToggleView toggleView={toggleView} setToggleView={setToggleView} />
      <section className="flex justify-center mt-24 gap-24">
        {toggleView ? (
          <div>
            <h2 className="md:text-2xl font-semibold text-left mb-12">
              Leaderboard Standings
            </h2>
            <Ranking />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-[50%] h-[50%]">
            <h2 className="md:2text-lg font-medium text-center mb-12">
              Quiz Mastery by Category
            </h2>
            <div className="flex flex-wrap">
              {categoryList.map((category, index) => {
                return (
                  <StatCard
                    index={index}
                    percentage={category.percentage}
                    key={index}
                    description=""
                    icon=""
                    title="PIC"
                    unit=""
                    value={category.points}
                  />
                );
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Finish;
