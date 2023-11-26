"use client";

import { useEffect, useState } from "react";
import useProgressStore from "../store/progress.store";
import Card from "../components/Card";
import PageTransition from "../components/PageTransition";
import IconOption from "../components/IconOption";
import useFormDataStore from "../store/form-data.store";
import { useRouter } from "next/navigation";

const goalsList = [
  {
    name: "Boas práticas",
    icon: "/goals/good-practices.svg",
  },
  {
    name: "Carbono",
    icon: "/goals/carbon.svg",
  },
  {
    name: "Certificação",
    icon: "/goals/certification.svg",
  },
  {
    name: "ODS",
    icon: "/goals/ods.svg",
  },
];

const goodPractices = [
  {
    name: "Manejo de solo",
    icon: "/good-practices/solo-handling.svg",
  },
  {
    name: "Manejo de pragas",
    icon: "/good-practices/pest-handling.svg",
  },
  {
    name: "Uso seguro de agroquímicos",
    icon: "/good-practices/safe-use-of-agrochemicals.svg",
  },
  {
    name: "Gestão de água",
    icon: "/good-practices/water-management.svg",
  },
  {
    name: "Gestão de biodiversidade",
    icon: "/good-practices/biodiversity-management.svg",
  },
];

export default function GoalsPage() {
  const goals = useFormDataStore((state) => state.goals);
  const addGoal = useFormDataStore((state) => state.addGoal);
  const removeGoal = useFormDataStore((state) => state.removeGoal);
  const setActive = useProgressStore((state) => state.setActive);
  const router = useRouter();
  const [showPractices, setShowPractices] = useState(false);
  const [showODS, setShowODS] = useState(false);
  const [enabledGoal, setEnabledGoal] = useState(true);

  function handleGoalClick(name) {
    if (goals.indexOf(name) >= 0) {
      removeGoal(name);
    } else {
      addGoal(name);
    }
  }

  function onGoalPriorClick() {
    router.back();
  }

  function onGoalNextClick() {
    if (goals.length > 0) {
      setEnabledGoal(false);
    }

    if (goals.indexOf('Boas práticas') >= 0) {
      setShowPractices(true);
    } else if (goals.indexOf('ODS') >= 0) {
      setShowODS(true);
    }
  }

  function onPracticesPriorClick() {
    setShowPractices(false);
    setEnabledGoal(true);
  }

  function onPracticesNextClick() {
    if (goals.indexOf('ODS') >= 0) {
      setShowODS(true);
    }
  }

  function onODSPriorClick() {
    setShowODS(false);
  }

  useEffect(() => {
    setActive("Objetivo");
  }, []);

  return (
    <PageTransition>
      <Card onPriorClick={onGoalPriorClick} onNextClick={onGoalNextClick} disabled={!enabledGoal} nextActive={goals.length > 0}>
        <div className="w-full flex flex-col items-center pt-10">
          <h1 className="text-2xl font-bold">
            Qual o objetivo da sua pesquisa?
          </h1>
          <div className="flex gap-12 mt-10">
            {goalsList.map((goalItem) => (
              <IconOption
                key={`goals-${goalItem.name}`}
                icon={goalItem.icon}
                name={goalItem.name}
                description={goalItem.description}
                selected={goals.indexOf(goalItem.name) >= 0}
                onClick={() => handleGoalClick(goalItem.name)}
                disabled={!enabledGoal}
              />
            ))}
          </div>
        </div>
      </Card>

      {showPractices && (
        <Card onPriorClick={onPracticesPriorClick} onNextClick={onPracticesNextClick}>
          <div className="w-full flex flex-col items-center pt-10">
            <h1 className="text-2xl font-bold">
              Quais são as boa práticas avaliadas?
            </h1>
            <div className="flex gap-12 mt-10">
              {goodPractices.map((practicesItem) => (
                <IconOption
                  key={`practices-${practicesItem.name}`}
                  icon={practicesItem.icon}
                  name={practicesItem.name}
                  description={practicesItem.description}
                  selected={goals.indexOf(practicesItem.name) >= 0}
                  onClick={() => handleGoalClick(practicesItem.name)}
                />
              ))}
            </div>
          </div>
        </Card>
      )}

      {showODS && (
        <Card onPriorClick={onODSPriorClick}>
          <div className="w-full flex flex-col items-center pt-10">
            <h1 className="text-2xl font-bold">Escolha as ODS desejadas:</h1>
          </div>
        </Card>
      )}
    </PageTransition>
  );
}
