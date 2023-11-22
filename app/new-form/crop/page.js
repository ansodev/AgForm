"use client";

import { useEffect } from "react";
import useProgressStore from "../store/progress.store";
import Card from "../components/Card";
import PageTransition from "../components/PageTransition";

export default function CropPage() {
  const setActive = useProgressStore((state) => state.setActive);

  useEffect(() => {
    setActive("Cultura");
  }, []);

  return (
    <PageTransition>
      <Card nextUrl="aplication" showPrior>
        Crop
      </Card>
    </PageTransition>
  );
}
