"use client";

import PageTransition from "../components/PageTransition";
import useFormDataStore from "../store/form-data.store";
import CardSummary from "./components/CardSummary";

function SummaryODS({ ods }) {
  return (
    <CardSummary titles={["ODS"]}>
      {ods.map((odsItem) => (
        <p key={`ods-${odsItem.id}`}>{odsItem.id}</p>
      ))}
    </CardSummary>
  );
}

function SummaryPractices({ practices }) {
  return (
    <CardSummary titles={["Boas práticas"]}>
      {practices.map((practice) => (
        <p key={`practices-${practice.id}`}>{practice.name}</p>
      ))}
    </CardSummary>
  );
}

export default function InitialFormPage() {
  const formName = useFormDataStore((state) => state.formName);
  const country = useFormDataStore((state) => state.country);
  const crop = useFormDataStore((state) => state.crop);
  const application = useFormDataStore((state) => state.application);
  const goals = useFormDataStore((state) => state.goals);
  const ods = useFormDataStore((state) => state.ods);
  const practices = useFormDataStore((state) => state.practices);

  return (
    <PageTransition>
      <div className="bg-white m-5 text-black flex flex-col items-center p-14">
        <h1 className="font-bold text-3xl">
          Revise as informações e finalize seu questionário
        </h1>
        <CardSummary titles={["Nome do formulário"]}>
          <p>{formName}</p>
        </CardSummary>

        <CardSummary titles={["País", "Cultura", "Aplicação"]}>
          <div className="flex justify-between px-10">
            <p>{country}</p>
            <p>{crop}</p>
            <p>{application}</p>
          </div>
        </CardSummary>

        <CardSummary titles={["Objetivos"]}>
            {goals.map((goal) => {
              return (
                (goal.id === "ods" && <SummaryODS ods={ods} />) ||
                (goal.id === "practices" && (
                  <SummaryPractices practices={practices} />
                ))
              );
            })}
        </CardSummary>
      </div>
    </PageTransition>
  );
}
