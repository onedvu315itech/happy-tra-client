import { FigureAnalysis } from "./figure-analysis";
import { StatisticGraph } from "./graph/statistic-graph";

export function DashBoardContent() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <FigureAnalysis />

      <div className="w-full flex items-center justify-start">
        <StatisticGraph />
      </div>
    </div>
  );
};