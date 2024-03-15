import Image from "next/image";

export default function ODSOption({ icon, name, selected, onClick, disabled }) {
  const classSelected = selected ? "opacity-100  shadow-slate-500 shadow-md overflow-hidden max-w-[120px] max-h-[120px]" : "opacity-25 hover:opacity-50"; // "hover:bg-[#E0783E] hover:border-[#f1b496] hover:border-2 rounded-2xl";

  const classDisabled = disabled
    ? "pointer-events-none opacity-50"
    : "cursor-pointer opacity-1";

  const classLg = "min-w-[200px] min-h-[200px] max-w-[200px]";

  function handleOnclick() {
    if (!disabled) {
      onClick();
    }
  }

  return (
    <div onClick={handleOnclick} className={`${classSelected} 	`}>
      <Image src={icon} width={120} height={120} alt={`${name} icon`} className="object-fill" />
    </div>
  );
}
