function ToggleView({
  toggleView = false,
  setToggleView = (boolean: boolean) => {},
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 mt-24">
      <span className="md:text-lg label-text text-[#1fb2a6] font-Coiny">
        Leaderboard Standings
      </span>
      <input
        type="checkbox"
        value="synthwave"
        className="toggle theme-controller col-span-2 col-start-1 row-start-1
         border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 
         checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
        onChange={() => setToggleView(!toggleView)}
      />
      <span className="md:text-lg label-text text-[#1fb2a6] font-Coiny">
        Quiz Mastery by Category
      </span>
    </label>
  );
}

export default ToggleView;
