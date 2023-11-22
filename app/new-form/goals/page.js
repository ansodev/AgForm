"use client";

import { useEffect } from "react";
import useProgressStore from "../store/progress.store";
import Card from "../components/Card";
import PageTransition from "../components/PageTransition";

export default function GoalsPage() {
  const setActive = useProgressStore((state) => state.setActive);

  useEffect(() => {
    setActive("Objetivo");
  }, []);

  return (
    <PageTransition>
      <Card showPrior nextUrl="tools">
        Objetivo
      </Card>
    </PageTransition>
  );
}
