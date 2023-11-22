'use client'

import useProgressStore from "../store/progress.store";
import ItemProgress from "./ItemProgress";

export default function MenuProgress() {
  const listItensProgress = useProgressStore((state) => state.listItensProgress);

  return (
    <div className="bg-[#F2F2F2] rounded-2xl p-4 w-[80%] h-[95%]">
      <div className="flex items-center justify-center flex-col mb-4">
        {listItensProgress.map((item, index) => {
          return (
            <ItemProgress
              key={`item-progress-${index}`}
              first={item.first}
              active={item.active}
              text={item.text}
              icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
}
