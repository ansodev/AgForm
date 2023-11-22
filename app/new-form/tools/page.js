"use client";

import { useEffect } from "react";
import useProgressStore from "../store/progress.store";
import Card from "../components/Card";
import PageTransition from "../components/PageTransition";

export default function ToolsPage() {
  const setActive = useProgressStore((state) => state.setActive);

  useEffect(() => {
    setActive("Ferramenta");
  }, []);

  return (
    <PageTransition>
      <Card showPrior nextUrl="country">
        Aplicação
      </Card>
    </PageTransition>
  );
}
