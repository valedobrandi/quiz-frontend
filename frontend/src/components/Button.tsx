type ButtonPropsType = {
  setClick: () => void;
  title: string;
  isDisable?: boolean;
}

export default function Button({ setClick, title, isDisable = false }: ButtonPropsType) {
  return (
    <button
      disabled={isDisable}
      className="btn"
      onClick={setClick}>
      {title}
    </button>
  );
}
