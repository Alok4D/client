// import { FaDollarSign } from "react-icons/fa";
// import { BsFillCartPlusFill } from "react-icons/bs";
// import { GiPlayerTime } from "react-icons/gi";
// import { Calendar } from "react-date-range";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
// import SalesLineChart from "../Admin/SalesLineChart";
// import { formatDistanceToNow } from "date-fns";

// const GuestStatistics = () => {
//   const axiosSecure = useAxiosSecure();
//   // Fetch guest Stat Data here
//   const { data: statData = {}, isLoading } = useQuery({
//     queryKey: ["statData"],
//     queryFn: async () => {
//       const { data } = await axiosSecure.get("/guest-stat");
//       return data;
//     },
//   });

//   console.log(statData);
//   if (isLoading) return <LoadingSpinner />;
//   return (
//     <div>
//       <div className="mt-12">
//         {/* small cards */}
//         <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {/* Spent Card */}
//           <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
//             <div
//               className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40`}
//             >
//               <FaDollarSign className="w-6 h-6 text-white" />
//             </div>
//             <div className="p-4 text-right">
//               <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
//                 Total Spent
//               </p>
//               <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
//                ${statData?.totalPrice}
//               </h4>
//             </div>
//           </div>

//           {/* Total Bookings */}
//           <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
//             <div
//               className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40`}
//             >
//               <BsFillCartPlusFill className="w-6 h-6 text-white" />
//             </div>
//             <div className="p-4 text-right">
//               <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
//              Total Bookings
//               </p>
//               <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
//               {statData?.totalBookings}
//               </h4>
//             </div>
//           </div>

//           {/* Users Card */}
//           <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
//             <div
//               className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40`}
//             >
//               <GiPlayerTime className="w-6 h-6 text-white" />
//             </div>
//             <div className="p-4 text-right">
//               <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
//                 Guest Since...
//               </p>
//               <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
//                 {statData?.guestSince &&
//                   formatDistanceToNow(new Date(statData?.guestSince))}
//               </h4>
//             </div>
//           </div>
//         </div>

//         <div className="mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
//           {/* Total Sales Graph */}
//           <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
//             {/* Render Chart Here */}
//             <SalesLineChart data={statData?.chartData} />
//           </div>
//           {/* Calender */}
//           <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden">
//             <Calendar color="#F43F5E" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GuestStatistics;




import { FaDollarSign, FaCalendarAlt } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { GiPlayerTime } from "react-icons/gi";
import { Calendar } from "react-date-range";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import { formatDistanceToNow } from "date-fns";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Total Sales",
    },
  },
};

const GuestStatistics = () => {
  const axiosSecure = useAxiosSecure();

  const { data: statData = {}, isLoading } = useQuery({
    queryKey: ["guestStats"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/guest-stat");
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  // Transform 2D array to Chart.js format
  const chartData = statData.chartData?.length > 1
    ? {
        labels: statData.chartData.slice(1).map(row => row[0]),
        datasets: [
          {
            label: statData.chartData[0][1] || "Sales",
            data: statData.chartData.slice(1).map(row => row[1]),
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      }
    : { labels: [], datasets: [] };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-4 md:p-8">
  

      {/* Top Stats Cards */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mb-14">
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-100 to-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-200">
          <div className="flex items-center justify-between">
            <div className="h-16 w-16 flex items-center justify-center rounded-xl bg-gradient-to-tr from-orange-500 to-orange-400 text-white text-3xl shadow-md group-hover:scale-110 transition-transform duration-300">
              <FaDollarSign />
            </div>
            <div className="text-right">
              <p className="text-gray-500 font-medium">Total Spent</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">
                ${statData.totalPrice || 0}
              </h3>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-200">
          <div className="flex items-center justify-between">
            <div className="h-16 w-16 flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-3xl shadow-md group-hover:scale-110 transition-transform duration-300">
              <BsFillCartPlusFill />
            </div>
            <div className="text-right">
              <p className="text-gray-500 font-medium">Total Bookings</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">
                {statData.totalBookings || 0}
              </h3>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-100 to-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-200">
          <div className="flex items-center justify-between">
            <div className="h-16 w-16 flex items-center justify-center rounded-xl bg-gradient-to-tr from-green-500 to-green-400 text-white text-3xl shadow-md group-hover:scale-110 transition-transform duration-300">
              <GiPlayerTime />
            </div>
            <div className="text-right">
              <p className="text-gray-500 font-medium">Guest Since</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">
                {statData.guestSince
                  ? `${formatDistanceToNow(new Date(statData.guestSince))} ago`
                  : "N/A"}
              </h3>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
        </div>
      </div>

      {/* Sales Bar Chart + Calendar */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Sales Bar Chart */}
        <div className="xl:col-span-2 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 w-full h-[700px] flex flex-col">
          <div className="flex items-center justify-between mb-4 px-2">
            <h4 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
              💹 <span className="text-blue-600">Total Sales Overview</span>
            </h4>
            <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
              Monthly
            </span>
          </div>
          <div className="flex-1 bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-inner border border-gray-100 p-5 flex justify-center items-center w-full">
            {chartData.labels.length ? (
              <Bar options={chartOptions} data={chartData} />
            ) : (
              <LoadingSpinner/>
            )}
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 w-full flex flex-col">
          <div className="flex items-center justify-between mb-4 px-2">
            <h4 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
              <FaCalendarAlt className="text-pink-500" />{" "}
              <span className="text-pink-600">Event Calendar</span>
            </h4>
            <span className="text-sm bg-pink-100 text-pink-600 px-3 py-1 rounded-full font-medium">
              2025
            </span>
          </div>
          <div className="flex-1 bg-gradient-to-b from-pink-50 to-white rounded-2xl shadow-inner border border-gray-100 p-4 flex justify-center items-center w-full">
            <Calendar color="#F43F5E" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestStatistics;
