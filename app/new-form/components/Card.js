"use client";

import { useRouter } from "next/navigation";

export default function Card({ children, showPrior, nextUrl }) {
  const router = useRouter();

  function handleBackClick() {
    router.back();
  }

  function handleNextClick() {
    router.push(nextUrl);
  }

  return (
    <div className="bg-white w-[95%] h-[300px] m-5 rounded-xl shadow-sm relative text-black">
      {children}

      {!!showPrior && (
        <button
          onClick={handleBackClick}
          className="bg-[#E0783E] absolute bottom-5 left-5 rounded-full w-[50px] h-[50px] flex justify-center items-center"
        >
          <img src="/prior-icon.svg" alt="prior button" />
        </button>
      )}

      <button
        onClick={handleNextClick}
        className="bg-[#E0783E] absolute bottom-5 right-5 rounded-full w-[50px] h-[50px] flex justify-center items-center"
      >
        <img src="/next-icon.svg" alt="prior button" />
      </button>
    </div>
  );
}
