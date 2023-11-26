"use client";

import { useEffect } from "react";
import useProgressStore from "../store/progress.store";
import Card from "../components/Card";
import PageTransition from "../components/PageTransition";
import useFormDataStore from "../store/form-data.store";
import IconOption from "../components/IconOption";

const crops1 = [
  {
    name: "Cacau",
    icon: "/crops/cocoa.svg",
  },
  {
    name: "Café",
    icon: "/crops/coffee.svg",
  },
  {
    name: "Cana",
    icon: "/crops/sugarcane.svg",
  },
];

const crops2 = [
  {
    name: "Laranja",
    icon: "/crops/orange.svg",
  },
  {
    name: "Palma",
    icon: "/crops/palm.svg",
  },
  {
    name: "Soja",
    icon: "/crops/soy.svg",
  },
];

export default function CropPage() {
  const crop = useFormDataStore((state) => state.crop);
  const setCrop = useFormDataStore((state) => state.setCrop);
  const setActive = useProgressStore((state) => state.setActive);

  function handeCropClick(name) {
    setCrop(name);
  }

  useEffect(() => {
    setActive("Cultura");
  }, [setActive]);

  return (
    <PageTransition>
      <Card nextUrl="aplication" showPrior>
        <div className="w-full flex flex-col items-center pt-10">
          <h1 className="text-2xl font-bold">
            Qual cultura agrícola você irá avaliar?
          </h1>
          <div className="flex gap-12 mt-10">
            {crops1.map((cropItem) => (
              <IconOption
                key={`crop-${cropItem.name}`}
                icon={cropItem.icon}
                name={cropItem.name}
                selected={cropItem.name === crop}
                onClick={() => handeCropClick(cropItem.name)}
              />
            ))}
          </div>
          <div className="flex gap-12 mt-8">
            {crops2.map((cropItem) => (
              <IconOption
                key={`crop-${cropItem.name}`}
                icon={cropItem.icon}
                name={cropItem.name}
                selected={cropItem.name === crop}
                onClick={() => handeCropClick(cropItem.name)}
              />
            ))}
          </div>
        </div>
      </Card>
    </PageTransition>
  );
}
