import React, { useEffect, useState } from "react";
import { getMonthAxios } from "../../services/trackerService";
import Chart from "react-apexcharts";
import { format } from "date-fns";
import { Container } from "../components/Container";

type CovidType = {
  name: string;
  data: any[];
};

const VirusTrackerPage = () => {
  const [covidData, setCovidData] = useState<CovidType[]>([]);
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    fetchVirusTracker().then();
  }, []);

  const fetchVirusTracker = async () => {
    let recovers = [];
    let deaths = [];
    let totals = [];
    let days = [];
    let tests = [];

    const { data } = await getMonthAxios();

    const keys = Object.keys(data.data);

    /* keys.forEach((key) => {
      let newData: any;
      newData = { ...data.data[key], id: key };
      setVirusTrackerResponse((prevState) => [...prevState, newData]);
    });*/

    const results = keys.map((key) => {
      let newData: any;
      newData = { ...data.data[key], id: key };

      tests.unshift(newData.tested);
      recovers.unshift(newData.recovered);
      deaths.unshift(newData.deaths);
      totals.unshift(newData.total_cases);

      days.unshift(format(new Date(key), "MMMM dd, yyyy"));

      return newData;
    });

    setCovidData([
      { name: "Tests", data: tests },
      { name: "Recoveries", data: recovers },
      { name: "Deaths", data: deaths },
      { name: "Total Cases", data: totals },
    ]);

    setDates(days);

    console.log(results);
  };

  return (
    <Container>
      <div>
        {covidData ? (
          <Chart
            options={{
              chart: {
                height: 700,
                type: "line",
                zoom: {
                  enabled: true,
                },
              },
              dataLabels: {
                enabled: false,
              },
              stroke: {
                width: [10, 12, 10],
                curve: "straight",
                dashArray: [2, 10, 6],
              },
              title: {
                text: "30-Day Covid Stats",
                align: "left",
              },
              legend: {
                tooltipHoverFormatter: function (val, opts) {
                  return (
                    val +
                    " - " +
                    opts.w.globals.series[opts.seriesIndex][
                      opts.dataPointIndex
                    ] +
                    ""
                  );
                },
              },
              markers: {
                size: 0,
                hover: {
                  sizeOffset: 8,
                },
              },
              xaxis: {
                categories: dates ? dates : [],
              },
              tooltip: {
                y: [
                  {
                    title: {
                      formatter: function (val) {
                        return val + " (per day)";
                      },
                    },
                  },
                  {
                    title: {
                      formatter: function (val) {
                        return val + " (per day)";
                      },
                    },
                  },
                  {
                    title: {
                      formatter: function (val) {
                        return val + " (per day)";
                      },
                    },
                  },
                ],
              },
              grid: {
                borderColor: "#114787",
              },
            }}
            series={covidData}
            type="line"
            width="100%"
          />
        ) : (
          <h2>Empty</h2>
        )}
      </div>
    </Container>
  );
};

export default VirusTrackerPage;
