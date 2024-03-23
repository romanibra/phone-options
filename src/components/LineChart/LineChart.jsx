import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {
    const mathMarksData=[
        { id: 1, name: "Alice", math: 85 },
        { id: 2, name: "Bob", math: 70 },
        { id: 3, name: "Charlie", math: 90 },
        { id: 4, name: "David", math: 65 },
        { id: 5, name: "Emily", math: 75 },
        { id: 6, name: "Frank", math: 80 },
        { id: 7, name: "Grace", math: 95 },
        { id: 8, name: "Hannah", math: 85 },
        { id: 9, name: "Ian", math: 60 },
        { id: 10, name: "Jessica", math: 70 }
      ];
      
    return (
        <div>
            <LChart width={500} height={400} data={mathMarksData}>
        <Line dataKey="math"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;