import Image from "next/image";

export default function IconOption({ icon, name, selected, onClick }) {
  const classSelected = selected
    ? "bg-[#f1b496] p-3 rounded-2xl border-2 border-[#E0783E]"
    : "hover:bg-[#E0783E] hover:border-[#f1b496] hover:border-2 rounded-2xl";
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 min-w-[100px] min-h-[120px] ${classSelected} `}
      onClick={onClick}
    >
      <Image src={icon} width={60} height={60} alt={`${name} icon`} />
      <p className="text-base font-light">{name}</p>
    </div>
  );
}
