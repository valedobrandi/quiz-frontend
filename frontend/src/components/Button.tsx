export default function Button({ setClick = () => {}, title = 'Enter Title', isDisable = false }) {
  return (
    <button
      disabled={isDisable}
      className="btn btn-active btn-xs text-xs 
      bg-[#641ae6] text-[#f1f3f5] uppercase ml-6"
      onClick={setClick}>
      {title}
    </button>
  );
}
