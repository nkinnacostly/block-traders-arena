import React from "react";
import JournalTradeTable from "./components/journal-trade-table";

const Courses: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center">
      <JournalTradeTable />
    </div>
  );
};

export default Courses;
