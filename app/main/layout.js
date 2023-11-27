import MainMenu from "./components/MainMenu";

export default function MainLayout({children}) {
  return (
    <div className="flex">
      <div className="h-screen w-1/4 min-w-[300px] bg-white flex justify-center pt-6">
        <MainMenu />
      </div>
      <div className="h-screen w-3/4">{children}</div>
    </div>
  );
};
