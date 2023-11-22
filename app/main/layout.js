import Menu from "@/app/main/components/Menu.js";

export default function MainLayout({children}) {
  return (
    <div className="flex">
      <div className="h-screen w-1/4 min-w-[300px] bg-white flex justify-center pt-6">
        <Menu />
      </div>
      <div className="h-screen w-3/4">{children}</div>
    </div>
  );
};
