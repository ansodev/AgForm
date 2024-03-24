export default function CardSummary({ titles, children }) {
  return (
    <div className="border border-neutral-300 w-full min-h-[50px] rounded-3xl mt-8 ">
      <div className="flex justify-between px-10">
        {titles.map((title) => {
          return (
            <div
              key={`card-${title}`}
              className="bg-white border border-neutral-300 rounded-full flex justify-center items-center mt-[-15px] px-10"
            >
              <p className="uppercase">{title}</p>
            </div>
          );
        })}
      </div>

      <div className="w-full p-[25px] flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}
