"use client";

import { useEffect } from "react";
import useProgressStore from "../store/progress.store";
import Card from "../components/Card";
import PageTransition from "../components/PageTransition";

export default function CountryPage() {
  const setActive = useProgressStore((state) => state.setActive);

  useEffect(() => {
    setActive("País");
  }, []);

  return (
    <PageTransition>
      <Card nextUrl="crop">Pais</Card>
    </PageTransition>
  );
}
