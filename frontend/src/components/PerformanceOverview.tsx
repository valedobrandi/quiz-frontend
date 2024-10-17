import { ScoreBadge } from "../components/ScoreBadge";

type PerformanceOverviewProps = {
  totalPoints: number;
}

function PerformanceOverview({totalPoints}: PerformanceOverviewProps) {
  return (
    <div className="badge bg-[#242933] h-fit flex flex-wrap md:flex-nowrap
    items-center gap-4 p-4 mx-1 md:m-0 md:flex-nowrap">
      <h2 className="w-full text-xl font-Coiny text-center text-blue-600">
        Your Performance Overview
      </h2>
      <div className="flex flex-wrap items-center justify-around gap-8">
        <div className="flex gap-6">
          <ScoreBadge
            style="badge badge-info gap-2 px-6 py-5"
            image="ranking-crown-svgrepo-com.svg"
            title="Ranking:"
            value={1}
          />
          <ScoreBadge
            style="badge badge-success gap-2 px-6 py-5"
            image="profits-statistics-svgrepo-com.svg"
            title="Points:"
            value={totalPoints}
          />
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverview;
