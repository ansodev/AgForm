import Image from "next/image";

export default function IconOption({ icon, name, description, lg, selected, onClick, disabled }) {
  const classSelected = selected
    ? "bg-[#f1b496]  rounded-2xl border-2 border-[#E0783E]"
    : "hover:bg-[#E0783E] hover:border-[#f1b496] hover:border-2 rounded-2xl";
  
  const classDisabled = disabled ? 'pointer-events-none opacity-50' : 'cursor-pointer opacity-1' 
  
  const classLg = lg ? "min-w-[160px] min-h-[160px] max-w-[160px]" : "min-w-[130px] min-h-[130px] max-w-[130px]";

  function handleOnclick() {
    if (!disabled) {
      onClick();
    }
  }
  
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 ${classLg} ${classSelected} ${classDisabled} `}
      onClick={handleOnclick}
    >
      <Image src={icon} width={60} height={60} alt={`${name} icon`} />
      <p className="text-base font-light text-center">{name}</p>
      {!!description && <p className="text-xs font-light text-center">{description}</p>}
    </div>
  );
}
