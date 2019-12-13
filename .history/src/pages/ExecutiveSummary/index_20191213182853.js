import React from "react";
import DisruptionRport from "../../components/DisruptionReport";
import EventOccurence from "../../components/EventOccurence";
import MaintenanceBudget from "../../components/MaintenanceBudget";

const ExecutiveSummary = () => {
  return (
    <React.Fragment>
      <DisruptionRport />
      <EventOccurence />
      <MaintenanceBudget />
    </React.Fragment>
  );
};

export default ExecutiveSummary;
