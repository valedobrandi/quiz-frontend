import StatCard from "../components/StatCard";
import SideBoard from "../components/SideBoard";
import useCategory from "../customHooks/useCategory";

const Main: React.FC = () => {
  const { categoryList } = useCategory();

  return (
    <>
      <main className="space-y-24 md:space-y-48 px-4">
        <section className="flex flex-col md:flex-row md:pt-24">
          <SideBoard
            title="Test Your Knowledge and Compete for the Crown"
            description="Discover how far you can go! Track your progress and
        learn."
            buttonText="Let`s Go"
          />
          <div className="w-full md:w-[30rem] group">
            <div className="grid grid-cols-1 gap-16">
              <div
                className="relative p-4 flex flex-col items-center justify-center 
              css-ranking-container-background-color rounded-2xl md:w-full w-[50%] m-auto"
              >
                <div className="absolute -top-10 -left-4">
                  <div className="flex flex-row items-start justify-center space-x-2">
                    <p className="text-sm"> Watch your Ranking...</p>
                  </div>
                </div>
                <h3 className="flex items-center font-bold mb-2 text-lg">
                  <img
                    className="w-8 h-8 mr-2 animate-bounce animate-infinite animate-duration-[1000ms]"
                    src="ranking-crown-svgrepo-com.svg"
                    alt="crown picture"
                  />
                  <span className="text-white text-center">Ranking</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="p-3">
                    <span className="coiny-regular text-6xl text-[#191d24]">
                      1
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="relative p-4 flex flex-col justify-center items-center 
            css-points-container-background-color rounded-2xl mt-20 md:w-full w-[50%] m-auto mb-8"
            >
              <div className="absolute -top-10 -right-6">
                <div className="flex flex-row items-start justify-center space-x-2">
                  <div className="flex flex-row items-start justify-center space-x-2">
                    <p className="text-sm"> How many points ?</p>
                  </div>
                </div>
              </div>
              <h3 className="flex items-center font-bold mb-2 text-lg">
                <img
                  className="w-8 h-8 mr-2 animate-bounce animate-infinite animate-duration-[1000ms]"
                  src="profits-statistics-svgrepo-com.svg"
                  alt="statistics picture"
                />
                <span className="text-white">Points</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="coiny-regular text-6xl text-[#191d24]">2</span>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="text-center md:mb-60 ">
            <h2 className="md:text-5xl font-black">
              80% of New Year’s resolutions fail
            </h2>
            <p className="md:text-xl my-8">
              Find out how far you can go in 2024. No unclear goals. No
              unrealistic resolutions.
            </p>
          </div>
          <div className="flex flex-wrap items-center md:flex-nowrap md:pt-24 pb-40">
            <SideBoard
              title="Beat procrastination"
              description="Visualize Habit suggests good habits to pick in 2024. 
            Discover how habits compound over 1 year, or 10 years to be motivated to start!"
              buttonText="build my kwloag grid"
            />
              <div className="flex h-fit gap-1 flex-wrap ml-4">
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
        </section>
      </main>
    </>
  );
};

export default Main;
