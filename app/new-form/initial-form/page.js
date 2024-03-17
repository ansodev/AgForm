"use client";

import { useRouter } from "next/navigation";
import Card from "../components/Card";
import PageTransition from "../components/PageTransition";
import useFormDataStore from "../store/form-data.store";

export default function InitialFormPage() {
  const formName = useFormDataStore((state) => state.formName);
  const setFormName = useFormDataStore((state) => state.setFormName);
  const router = useRouter();

  function onNextClick() {
    router.push('country');
  }

  return (
    <PageTransition>
      <Card onNextClick={onNextClick} nextActive={!!formName}>
        <div className="w-full flex flex-col items-center pt-10 px-20">
          <label className="text-2xl font-bold text-gray-800">Nome do formulário:</label>
          <input
            type="text"
            className="mt-4 w-full p-2 border border-gray-300 rounded-md"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
        </div>
      </Card>
    </PageTransition>
  );
}
