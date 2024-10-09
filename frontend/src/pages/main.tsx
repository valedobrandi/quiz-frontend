import StatCard from "../components/StatCard";
import SideBoard from "../components/SideBoard";
import SideCard from "../components/SideCard";
import { MainPageCategories } from "../files/MainPageCategories";

const Main: React.FC = () => {

  return (
    <>
      <main className="space-y-24 md:space-y-48 px-4">
        <section className="flex flex-col md:flex-row md:pt-24">
          <SideBoard
            title="Test Your Knowledge and Compete for the Crown"
            description="Discover how far you can go! Track your progress and
        learn."
            buttonText="Let`s Go!"
          />
          <div className="w-full md:w-[30rem] group">
            <div className="grid grid-cols-1 gap-16">
            <SideCard
              style="css-ranking-container-background-color "
              image="ranking-crown-svgrepo-com.svg"
              title="What is your ranking ?"
            />
            </div>
            <SideCard
              style="css-points-container-background-color mt-16"
              image="profits-statistics-svgrepo-com.svg"
              title="How many points ?"
            />
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
              <div className="flex h-fit gap-1 flex-wrap h-10">
                {MainPageCategories.map((category, index) => {
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
