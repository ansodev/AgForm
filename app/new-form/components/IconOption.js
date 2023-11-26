import Image from "next/image";

export default function IconOption({ icon, name, description, lg, selected, onClick }) {
  const classSelected = selected
    ? "bg-[#f1b496] p-3 rounded-2xl border-2 border-[#E0783E]"
    : "hover:bg-[#E0783E] hover:border-[#f1b496] hover:border-2 rounded-2xl";
  
  const classLg = lg ? "min-w-[160px] min-h-[150px] max-w-[160px]" : "min-w-[100px] min-h-[120px] max-w-[130px]";
  
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 ${classLg} ${classSelected} `}
      onClick={onClick}
    >
      <Image src={icon} width={60} height={60} alt={`${name} icon`} />
      <p className="text-base font-light">{name}</p>
      {!!description && <p className="text-xs font-light text-center">{description}</p>}
    </div>
  );
}
