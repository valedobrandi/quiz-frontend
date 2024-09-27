export function ScoreBadge({ style = "", image = "", value = "", title = "" }) {
  return (
    <div className={`${style} flex items-center gap-4 tracking-wider font-Coiny`}>
      <img className="w-8 h-8" src={image} alt="crown image" />
      <p>{title}</p>
      <p>{value}</p>
    </div>
  );
}
