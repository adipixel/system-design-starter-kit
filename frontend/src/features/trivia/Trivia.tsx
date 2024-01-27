import React from "react";
import { useParams } from "react-router-dom";

import { StepperGame } from "../../organisms/StepperGame";

export function Trivia() {
  const { wineType } = useParams<Partial<{ wineType: string }>>();

  // TODO: Save the wine types in the store and retrieve it here using selector
  if (
    wineType &&
    ["red", "rose", "white", "sparkling", "dessert"].indexOf(wineType) !== -1
  ) {
    return <StepperGame wineType={wineType} />;
  }

  return <div>Invalid wine type</div>;
}
