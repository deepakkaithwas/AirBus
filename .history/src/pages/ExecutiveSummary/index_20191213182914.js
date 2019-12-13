import React from "react";
import DisruptionRport from "../../components/DisruptionReport";
import EventOccurence from "../../components/EventOccurence";
import MaintenanceBudget from "../../components/MaintenanceBudget";
import MaintenanceCost from "../../components/MaintenanceCost";

const ExecutiveSummary = () => {
  return (
    <React.Fragment>
      <DisruptionRport />
      <EventOccurence />
      <MaintenanceBudget />
      <MaintenanceCost />
    </React.Fragment>
  );
};

export default ExecutiveSummary;
