import "./index.css";

interface ButtonSlideProps {
  label: string;
}

function ButtonSlide({ label }: ButtonSlideProps) {
  return (
    <button data-text="Awesome" className="button-slide ">
      <span className="actual-text">&nbsp;{label}&nbsp;</span>
      <span className="hover-text" aria-hidden="true">
        &nbsp;{label}&nbsp;
      </span>
    </button>
  );
}

export default ButtonSlide;
