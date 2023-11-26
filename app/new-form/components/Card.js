export default function Card({
  children,
  onPriorClick,
  onNextClick,
  nextActive,
  disabled = false,
}) {
  function handlePriorClick() {
    onPriorClick();
  }

  function handleNextClick() {
    if (nextActive) {
      onNextClick();
    }
  }

  const classNextActive = nextActive ? '' :  'opacity-30'

  return (
    <div className="bg-white w-[95%] min-h-[300px] m-5 pb-10 rounded-xl shadow-sm relative text-black disabled:opacity-10">
      {children}

      {!!onPriorClick && !disabled && (
        <button
          onClick={handlePriorClick}
          className="bg-[#E0783E] absolute bottom-5 left-5 rounded-full w-[50px] h-[50px] flex justify-center items-center"
        >
          <img src="/prior-icon.svg" alt="prior button" />
        </button>
      )}
      {!disabled && (
        <button
          disabled={!nextActive}
          onClick={handleNextClick}
          className={`bg-[#E0783E] absolute bottom-5 right-5 rounded-full w-[50px] h-[50px] flex justify-center items-center ${classNextActive}`}
        >
          <img src="/next-icon.svg" alt="prior button" />
        </button>
      )}
    </div>
  );
}
