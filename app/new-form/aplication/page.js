"use client";

import { useEffect } from "react";
import useProgressStore from "../store/progress.store";
import Card from "../components/Card";
import PageTransition from "../components/PageTransition";
import IconOption from "../components/IconOption";
import useFormDataStore from "../store/form-data.store";

const applications = [
  {
    name: 'Guiada',
    description: 'Feita com apoio de um entrevistador/técnico',
    icon: '/applications/guided.svg',
  },
  {
    name: 'Autoguiada',
    description: 'Feita pelo próprio entrevistado',
    icon: '/applications/self-guided.svg'
  }
]

export default function AplicationPage() {
  const application = useFormDataStore((state) => state.application);
  const setApplication = useFormDataStore((state) => state.setApplication);
  const setActive = useProgressStore((state) => state.setActive);

  function handleApplicationClick(name) {
    setApplication(name);
  }

  useEffect(() => {
    setActive("Aplicação");
  }, []);

  return (
    <PageTransition>
      <Card showPrior nextUrl="goals">
        <div className="w-full flex flex-col items-center pt-10">
          <h1 className="text-2xl font-bold">
            Como será a aplicação do formulário?
          </h1>
          <div className="flex gap-12 mt-10">
            {applications.map((applicationItem) => (
              <IconOption
                key={`crop-${applicationItem.name}`}
                icon={applicationItem.icon}
                name={applicationItem.name}
                description={applicationItem.description}
                lg
                selected={applicationItem.name === application}
                onClick={() => handleApplicationClick(applicationItem.name)}
              />
            ))}
          </div>
        </div>
      </Card>
    </PageTransition>
  );
}
