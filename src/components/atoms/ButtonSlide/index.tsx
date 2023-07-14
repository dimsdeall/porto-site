import "./index.css";

interface ButtonSlideProps {
  label: string;
  onClick?: () => void
}

function ButtonSlide({ label, onClick }: ButtonSlideProps) {
  return (
    <button data-text="Awesome" className="button-slide " onClick={onClick}>
      <span className="actual-text">&nbsp;{label}&nbsp;</span>
      <span className="hover-text" aria-hidden="true">
        &nbsp;{label}&nbsp;
      </span>
    </button>
  );
}

export default ButtonSlide;
