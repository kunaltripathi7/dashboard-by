import DashboardConfig from "./DashboardConfig";
import DashboardContent from "./DashboardContent";
import Pagination from "./Pagination";

import data from "../data/data.json";
import { useState } from "react";

const ITEMS_PER_PAGE = 8;

const DashboardContainer = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const updatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <div className="ml-16 mt-16 w-[calc(100%-64px)] border-1 border-black flex flex-col gap-8 items-center">
      <DashboardConfig />
      <DashboardContent data={updatedData} />
      <Pagination
        pages={Math.ceil(data.length / ITEMS_PER_PAGE)}
        currentPage={currentPage}
        handleCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default DashboardContainer;
