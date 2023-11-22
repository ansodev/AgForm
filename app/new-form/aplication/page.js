"use client";

import { useEffect } from "react";
import useProgressStore from "../store/progress.store";
import Card from "../components/Card";
import PageTransition from "../components/PageTransition";

export default function AplicationPage() {
  const setActive = useProgressStore((state) => state.setActive);

  useEffect(() => {
    setActive("Aplicação");
  }, []);

  return (
    <PageTransition>
      <Card showPrior nextUrl="goals">
        Aplicação
      </Card>
    </PageTransition>
  );
}
