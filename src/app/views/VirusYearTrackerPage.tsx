import React, { useEffect, useState } from "react";
import { Container } from "../components/Container";

//cannot create a responsemodel because the
//schema from a chart component i.e. ApexCharts (series:[name" string, data: [])

type CovidType = {
  name: string;
  data: any[];
};

const VirusYearTrackerPage = () => {
  const [covidYearData, setCovidYearData] = useState<CovidType[]>([]);

  useEffect(() => {}, []);

  const fetchVirusYearTracker = async () => {};

  return;
  <Container></Container>;
};

export default VirusYearTrackerPage;
