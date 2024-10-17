import useCategory from "../customHooks/useCategory";
import { ICategoryPoints } from "../interfaces/IInitialState";
import StatCard from "./StatCard";

type CategoryLeaderboardPropsType = {
  categories: ICategoryPoints;
};

function CategoryLeaderboard({ categories }: CategoryLeaderboardPropsType) {
  const { categoryList } = useCategory(categories);
  return (
    <ul role="list" className="flex flex-col">
      <div className="flex flex-wrap w-[50%] h-[50%] mx-auto">
        {categoryList &&
          Object.keys(categoryList).map((name, index) => {
            return (
              <li key={index}>
                <StatCard
                  index={index}
                  title={name}
                  value={categoryList[name]}
                />
              </li>
            );
          })}
      </div>
    </ul>
  );
}

export default CategoryLeaderboard;
