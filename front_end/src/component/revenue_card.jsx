import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "January", visits: 100, unique: 80, pageviews: 60, newUsers: 40 },
  { month: "February", visits: 90, unique: 70, pageviews: 65, newUsers: 50 },
  { month: "March", visits: 80, unique: 65, pageviews: 70, newUsers: 55 },
  { month: "April", visits: 85, unique: 60, pageviews: 75, newUsers: 45 },
  { month: "May", visits: 70, unique: 55, pageviews: 80, newUsers: 60 },
  { month: "June", visits: 60, unique: 50, pageviews: 85, newUsers: 70 },
  { month: "July", visits: 75, unique: 60, pageviews: 90, newUsers: 80 },
];

function RevenueCard() {
  return (
    <div className="p-4 bg-gray-500 rounded-lg shadow-lg">
      <h2 className="text-white text-lg font-semibold mb-4">
        Traffic January - July 2023
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="month" stroke="#bbb" />
          <YAxis stroke="#bbb" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#333",
              borderColor: "#444",
              color: "#fff",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="visits"
            stroke="#00c4b4"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="unique" stroke="#1c92f2" />
          <Line type="monotone" dataKey="pageviews" stroke="#ffa726" />
          <Line type="monotone" dataKey="newUsers" stroke="#f06292" />
        </LineChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-2 gap-4 mt-4 text-white">
        <div>
          <span className="font-bold text-lg">Visits:</span> 29,703 Users (40%)
        </div>
        <div>
          <span className="font-bold text-lg">Unique:</span> 24,093 Users (20%)
        </div>
        <div>
          <span className="font-bold text-lg">Pageviews:</span> 78,706 Views
          (60%)
        </div>
        <div>
          <span className="font-bold text-lg">New Users:</span> 22,123 Users
          (80%)
        </div>
        <div className="col-span-2">
          <span className="font-bold text-lg">Bounce Rate:</span> Average Rate
          (40.15%)
        </div>
      </div>
    </div>
  );
}

export default RevenueCard;
