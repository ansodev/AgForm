export default function ItemProgress({ first, text, active, icon }) {
  const opacity = active ? 'opacity-100' : 'opacity-30';

  return (
    <div className={`flex flex-col justify-center items-center ${opacity}`}>
      {
        !first && <div className="w-[3px] h-[20px] bg-[#E0783E]"></div>
      }
      <div className="w-[30px] h-[30px] bg-[#E0783E] rounded-full flex justify-center items-center">
        <img src={icon} alt={text} className="w-[15px]" />
      </div>
      <p className="text-black text-xs font-light my-2">{text}</p>
    </div>
  );
}
