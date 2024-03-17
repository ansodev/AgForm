"use client";

import { useEffect,  } from "react";
import useProgressStore from "../store/progress.store";
import Card from "../components/Card";
import PageTransition from "../components/PageTransition";
import useFormDataStore from "../store/form-data.store";
import IconOption from "../components/IconOption";
import { useRouter } from "next/navigation";

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
  const country = useFormDataStore((state) => state.country);
  const setCountry = useFormDataStore((state) => state.setCountry);
  const setActive = useProgressStore((state) => state.setActive);
  const router = useRouter();

  useEffect(() => {
    setActive("País");
  }, []);

  function handleFlagClick(name) {
    setCountry(name);
  }

  function onPriorClick() {
    router.back();
  }

  function onNextClick() {
    router.push('crop');
  }

  return (
    <PageTransition>
      <Card onNextClick={onNextClick} nextActive={!!country} onPriorClick={onPriorClick}>
        <div className="w-full flex flex-col items-center pt-10">
          <h1 className="text-2xl font-bold">Qual seu país?</h1>
          <div className="flex gap-12 mt-10">
            {flags1.map((flag) => (
              <IconOption
                key={`flag-${flag.name}`}
                icon={flag.icon}
                name={flag.name}
                onClick={() => handleFlagClick(flag.name)}
                selected={flag.name === country}
              />
            ))}
          </div>
          <div className="flex gap-12 mt-8">
            {flags2.map((flag) => (
              <IconOption
                key={`flag-${flag.name}`}
                icon={flag.icon}
                name={flag.name}
                onClick={() => handleFlagClick(flag.name)}
                selected={flag.name === country}
              />
            ))}
          </div>
        </div>
      </Card>
    </PageTransition>
  );
}
