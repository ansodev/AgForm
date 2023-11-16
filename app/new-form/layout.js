import MenuProgress from "./components/MenuProgress";

export default function NewFormLayout({children}) {
  return (
    <div className="flex">
      <div className="h-screen w-1/4 min-w-[300px] bg-white flex justify-center pt-6">
        <MenuProgress />
      </div>
      <div className="h-screen w-3/4">{children}</div>
    </div>
  );
};
