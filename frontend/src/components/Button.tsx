export default function Button({ setClick = () => {}, title = 'Enter Title', isDisable = false }) {
  return (
    <button
      disabled={isDisable}
      className="btn btn-active gap-2 md:text-2xl bg-[#641ae6] text-[#f1f3f5] uppercase m-8"
      onClick={setClick}>
      {title}
    </button>
  );
}
