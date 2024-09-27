import { ScoreBadge } from "../components/ScoreBadge";

const PerformanceOverview: React.FC = () => {
  return (
    <section className="p-2">
      <div className="flex flex-wrap items-center justify-space gap-8">
        <h2 className="w-full text-2xl font-bold text-center text-blue-600 mb-4">
          Your Performance Overview
        </h2>
        <div className="flex">
          <ScoreBadge
            style="badge badge-info gap-2 p-5"
            image="ranking-crown-svgrepo-com.svg"
            title="Ranking:"
            value="1"
          />
          <ScoreBadge
            style="badge badge-success gap-2 p-5"
            image="profits-statistics-svgrepo-com.svg"
            title="Points:"
            value="1"
          />
        </div>
        <p>
          Check out how you performed in this quiz, from your top-ranking
          position to the categories you’ve mastered
        </p>
      </div>
    </section>
  );
};

export default PerformanceOverview;
