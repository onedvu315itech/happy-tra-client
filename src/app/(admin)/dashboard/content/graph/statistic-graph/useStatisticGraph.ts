"use client";

import React from "react";

export default function useStatisticGraph() {
  const [mode, setMode] = React.useState<string>("");

  const handleSelecteMode = (key: string) => setMode(key);

  return {
    mode,
    handleSelecteMode,
  };
};