type RankingProps = {
  ranking: { username: string; score: number }[];
};

export default function Ranking({ ranking }: RankingProps) {
  const renderScore = "00000000";
  
  return (
    <ul role="list" className="flex flex-col">
      <div className="flex flex-wrap md:w-[50%] h-[50%] md:mx-auto">
        {ranking.map((user, index) => {
          const scoreLength = user.score.toString().length;
          const formateScore = renderScore.slice(scoreLength) + user.score;

          return (
            <li
              key={index}
              className=" h-14 w-full flex bg-[#1d232a] rounded-xl
              justify-between items-center gap-6 px-10 m-2 shrink-0"
            >
              <div
                className="flex relative justify-center 
            items-center gap-8 gap-x-4 md:my-auto"
              >
                {index === 0 && (
                  <img
                    src="ranking-crown-svgrepo-com.svg" // Substitua "crown-image-url" pela URL da imagem da coroa
                    alt="Crown"
                    className="absolute -top-6 -left-5 -rotate-[25deg] w-8 h-8"
                  />
                )}
                  <p className="text-sm md:text-xl font-black font-Nunito tracking-wider text-center leading-6 text-[#a6adba]">
                    {user.username}
                  </p>
              </div>
                <p className="
                [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]
                pressStart text-yellow-400 text-2xl">
                  {formateScore}
                </p>
            </li>
          );
        })}
      </div>
    </ul>
  );
}
