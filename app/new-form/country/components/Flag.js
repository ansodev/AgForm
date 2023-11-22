import Image from "next/image";

export default function Flag({ icon, name, selected, onClick }) {
  const classSelected = selected
    ? "bg-[#f1b496] p-3 rounded-2xl border-2 border-[#E0783E]"
    : "";
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 min-w-[100px] min-h-[120px] ${classSelected} `}
      onClick={onClick}
    >
      <Image src={icon} width={60} height={60} alt={`${name} flag`} />
      <p className="text-base font-light">{name}</p>
    </div>
  );
}
