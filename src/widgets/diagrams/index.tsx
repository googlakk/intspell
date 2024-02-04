import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";

import { FC } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type PieChartProps = {
  totalWords: number;
  shownWords: number;
};

const PieChart: FC<PieChartProps> = ({ totalWords, shownWords }) => {
  const data = {
    labels: ["total words", "shown words"],
    datasets: [
      {
        data: [totalWords, shownWords],
        backgroundColor: ["#E6BAA3", "#008170"],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
};
export default PieChart;
