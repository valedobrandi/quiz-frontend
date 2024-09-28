export function ScoreBadge({ style = "", image = "", value = "", title = "" }) {
  return (
    <div className={`md:p-5 p-4 ${style} flex items-center md:gap-4 tracking-wider font-Coiny`}>
      <img className="md:w-6 md:h-6 w-4 h-4" src={image} alt="crown image" />
      <p className="md:text-base text-sm">{title}</p>
      <p className="md:text-base text-sm">{value}</p>
    </div>
  );
}
