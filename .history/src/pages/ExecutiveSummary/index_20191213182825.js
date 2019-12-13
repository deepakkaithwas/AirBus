import React from 'react';
import DisruptionRport from '../../components/DisruptionReport';
import EventOccurence from '../../components/EventOccurence';

const ExecutiveSummary = () => {
    return (
        <React.Fragment>
        <DisruptionRport />
            <EventOccurence />
            </React.Fragment>
        
    )
}

export default ExecutiveSummary;