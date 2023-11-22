"use client";

import { useEffect, useState } from "react";
import useProgressStore from "../store/progress.store";
import Card from "../components/Card";
import PageTransition from "../components/PageTransition";
import Image from "next/image";
import Flag from "./components/Flag";

const flags1 = [
  {
    icon: "/flags/argentina-flag.svg",
    name: "Argentina",
  },
  {
    icon: "/flags/bolivia-flag.svg",
    name: "Bolivia",
  },
  {
    icon: "/flags/brasil-flag.svg",
    name: "Brasil",
  },
  {
    icon: "/flags/colombia-flag.svg",
    name: "Colombia",
  },
];

const flags2 = [
  {
    icon: "/flags/equador-flag.svg",
    name: "Equador",
  },
  {
    icon: "/flags/paraguai-flag.svg",
    name: "Paraguai",
  },
  {
    icon: "/flags/uruguai-flag.svg",
    name: "Uruguai",
  },
];

export default function CountryPage() {
  const [selected, setSelected] = useState("");
  const setActive = useProgressStore((state) => state.setActive);

  useEffect(() => {
    setActive("País");
  }, []);

  function handleFlagClick(name) {
    setSelected(name);
  }

  return (
    <PageTransition>
      <Card nextUrl="crop">
        <div className="w-full flex flex-col items-center pt-10">
          <h1 className="text-2xl font-bold">Qual seu país?</h1>
          <div className="flex gap-12 mt-10">
            {flags1.map((flag) => (
              <Flag
                key={`flag-${flag.name}`}
                icon={flag.icon}
                name={flag.name}
                onClick={() => handleFlagClick(flag.name)}
                selected={flag.name === selected}
              />
            ))}
          </div>
          <div className="flex gap-12 mt-10">
            {flags2.map((flag) => (
              <Flag
                key={`flag-${flag.name}`}
                icon={flag.icon}
                name={flag.name}
                onClick={() => handleFlagClick(flag.name)}
                selected={flag.name === selected}
              />
            ))}
          </div>
        </div>
      </Card>
    </PageTransition>
  );
}
