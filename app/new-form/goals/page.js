"use client";

import { useEffect, useState } from "react";
import useProgressStore from "../store/progress.store";
import Card from "../components/Card";
import PageTransition from "../components/PageTransition";
import IconOption from "../components/IconOption";
import useFormDataStore from "../store/form-data.store";
import { useRouter } from "next/navigation";
import GoodPractices from "./components/good-practices";
import ODS from "./components/ods";

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

export default function GoalsPage() {
  const goals = useFormDataStore((state) => state.goals);
  const addGoal = useFormDataStore((state) => state.addGoal);
  const removeGoal = useFormDataStore((state) => state.removeGoal);
  const setActive = useProgressStore((state) => state.setActive);
  
  const router = useRouter();
  const [enabledGoal, setEnabledGoal] = useState(true);
  const [cardStatus, setCardStatus] = useState({
    practices: false,
    carbon: false,
    certification: false,
    ods: false,
  });

  function handleGoalClick(goal) {
    if (goals.indexOf(goal) >= 0) {
      removeGoal(goal);
    } else {
      addGoal(goal);
    }
  }

  function onGoalPriorClick() {
    router.back();
  }

  function getGoalsRef(goals, goalsList) {
    return goals.map((goal) => goalsList.find((item) => item.id === goal.id));
  }

  function allGoalsOpened(goals, goalsList, cardStatus) {
    const goalsRef = getGoalsRef(goals, goalsList);
    return goalsRef.every((goal) => cardStatus[goal.id]);
  }

  function onNextClick() {
    if (allGoalsOpened(goals, goalsList, cardStatus)) {
      router.push("/new-form/summary");
      return;
    }

    if (goals.length > 0) {
      setEnabledGoal(false);
    }

    for (let i = 0; i < goalsList.length; i++) {
      if (goals.findIndex(item => item.id === goalsList[i].id) >= 0) {
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
                selected={goals.findIndex(item => item.id === goalItem.id) >= 0}
                onClick={() => handleGoalClick(goalItem)}
                disabled={!enabledGoal}
                className="flex-grow"
              />
            ))}
          </div>
        </div>
      </Card>

      {cardStatus.practices && (
        <GoodPractices onNextClick={onNextClick} onPriorClick={onPriorClick}/>
      )}

      {cardStatus.ods && (
        <ODS onPriorClick={onPriorClick} onNextClick={onNextClick}/>
      )}
    </PageTransition>
  );
}
