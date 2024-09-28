import useCategory from "../customHooks/useCategory";
import StatCard from "./StatCard";

function CategoryLeaderboard() {
  const { categoryList } = useCategory();
  return (
    <ul role="list" className="flex flex-col">
      <div className="flex flex-wrap w-[50%] h-[50%] mx-auto">
        {categoryList.map((category, index) => {
          return (
            <li>
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
            </li>
          );
        })}
      </div>
    </ul>
  );
}

export default CategoryLeaderboard;
