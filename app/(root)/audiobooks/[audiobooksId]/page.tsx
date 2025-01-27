import React from "react";

const AudiobooksDetails = ({
  params,
}: {
  params: { audiobooksId: string };
}) => {
  return (
    <p className="text-white-1">AudiobooksDetails for {params.audiobooksId}</p>
  );
};

export default AudiobooksDetails;
