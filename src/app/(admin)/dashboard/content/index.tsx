import { FigureAnalysis } from "./figure-analysis";
import { StatisticGraph } from "./graph/statistic-graph";

export function DashBoardContent() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <FigureAnalysis />
      </div>
      <div className="col-span-12 xl:col-span-8">
        <StatisticGraph />
      </div>
    </div>
  );
};