import React from 'react';
import Row from '../Row/Row';
import request from '../../../utils/request'; // Ensure this is the correct path to the request file

const RowList = () => {
  return (
    <>
      <Row
        title="HAZA KIDS"
        fetchUrl={request.fetchKidsTVShows}
        isLargeRow={true}
      />
      <Row
        title="KIDS AND ANIMATION"
        fetchUrl={request.fetchKidsAndAnimation}
        isLargeRow={true}
      />
      <Row
        title="ANIMATION"
        fetchUrl={request.fetchAnimation}
        isLargeRow={true}
      />
    </>
  );
};

export default RowList;
