import React from "react";

interface LineGraph {
  topLevelClassName?: string;
};

export const LineGraph: React.FC<LineGraph> = ({ topLevelClassName }) => {
  return (
    <div className={`rounded-2xl border border-(--border-primary) bg-(--bg-primary) p-5 md:p-6 ${topLevelClassName}`}>
      Line
    </div>
  );
};