import { Header } from "@components/Header";
import { DashBoardContent } from "./content";

export default function Dashboard() {
  return (
    <div className="w-full h-full px-10">
      <Header title="Dashboard" />

      <DashBoardContent />
    </div>
  );
};