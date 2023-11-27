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
    id: "practices",
    name: "Boas práticas",
    icon: "/goals/good-practices.svg",
  },
  {
    id: "carbon",
    name: "Carbono",
    icon: "/goals/carbon.svg",
  },
  {
    id: "certification",
    name: "Certificação",
    icon: "/goals/certification.svg",
  },
  {
    id: "ods",
    name: "ODS",
    icon: "/goals/ods.svg",
  },
];

const goodPractices = [
  {
    id: "soloHandling",
    name: "Manejo de solo",
    icon: "/good-practices/solo-handling.svg",
  },
  {
    id: "pestHandling",
    name: "Manejo de pragas",
    icon: "/good-practices/pest-handling.svg",
  },
  {
    id: "agrochemicals",
    name: "Uso seguro de agroquímicos",
    icon: "/good-practices/safe-use-of-agrochemicals.svg",
  },
  {
    id: "waterManagement",
    name: "Gestão de água",
    icon: "/good-practices/water-management.svg",
  },
  {
    id: "biodiversity",
    name: "Gestão de biodiversidade",
    icon: "/good-practices/biodiversity-management.svg",
  },
];

export default function GoalsPage() {
  const goals = useFormDataStore((state) => state.goals);
  const addGoal = useFormDataStore((state) => state.addGoal);
  const removeGoal = useFormDataStore((state) => state.removeGoal);
  const setActive = useProgressStore((state) => state.setActive);
  const practices = useFormDataStore((state) => state.practices);
  const addPractices = useFormDataStore((state) => state.addPractices);
  const removePractices = useFormDataStore((state) => state.removePractices);
  const router = useRouter();
  const [enabledGoal, setEnabledGoal] = useState(true);
  const [cardStatus, setCardStatus] = useState({
    practices: false,
    carbon: false,
    certification: false,
    ods: false,
  });

  function handleGoalClick(name) {
    if (goals.indexOf(name) >= 0) {
      removeGoal(name);
    } else {
      addGoal(name);
    }
  }

  function handlePracticesClick(name) {
    if (practices.indexOf(name) >= 0) {
      removePractices(name);
    } else {
      addPractices(name);
    }
  }

  function onGoalPriorClick() {
    router.back();
  }

  function onNextClick() {
    if (goals.length > 0) {
      setEnabledGoal(false);
    }

    for (let i = 0; i <= goalsList.length; i++) {
      if (goals.indexOf(goalsList[i].name) >= 0) {
        if (!cardStatus[goalsList[i].id]) {
          setCardStatus({
            ...cardStatus,
            [goalsList[i].id]: true,
          });
          break;
        }
      }
    }
  }

  function onPriorClick(id) {
    setCardStatus({
      ...cardStatus,
      [id]: false,
    });
    setEnabledGoal(true);
  }

  useEffect(() => {
    setActive("Objetivo");
  }, []);

  return (
    <PageTransition>
      <Card
        onPriorClick={onGoalPriorClick}
        onNextClick={onNextClick}
        disabled={!enabledGoal}
        nextActive={goals.length > 0}
      >
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
                className="flex-grow"
              />
            ))}
          </div>
        </div>
      </Card>

      {cardStatus.practices && (
        <Card
          onPriorClick={() => onPriorClick("practices")}
          onNextClick={onNextClick}
          nextActive={practices.length > 0}
        >
          <div className="w-full flex flex-col items-center pt-10">
            <h1 className="text-2xl font-bold">
              Quais são as boa práticas avaliadas?
            </h1>
            <div className="mt-10 flex flex-wrap justify-center gap-y-10">
              {goodPractices.map((practicesItem) => (
                <div className="w-1/3" key={`practices-${practicesItem.name}`}>
                  <IconOption
                   
                    icon={practicesItem.icon}
                    name={practicesItem.name}
                    description={practicesItem.description}
                    selected={practices.indexOf(practicesItem.name) >= 0}
                    onClick={() => handlePracticesClick(practicesItem.name)}
                  />
                </div>
              ))}
            </div>
          </div>
        </Card>
      )}

      {cardStatus.ods && (
        <Card onPriorClick={() => onPriorClick("ods")}>
          <div className="w-full flex flex-col items-center pt-10">
            <h1 className="text-2xl font-bold">Escolha as ODS desejadas:</h1>
          </div>
        </Card>
      )}
    </PageTransition>
  );
}
