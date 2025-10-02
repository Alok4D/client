// import { format } from "date-fns";
// import PropTypes from "prop-types";
// import { useState } from "react";
// import DeleteModal from "../../../components/Modal/DeleteModal";
// import { useMutation } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import toast from "react-hot-toast";

// // import { useNavigate } from "react-router-dom";

// const BookingDataRow = ({ booking, refetch }) => {


//   const [isOpen, setIsOpen] = useState(false);
//   const axiosSecure = useAxiosSecure();
// //   const navigate = useNavigate();

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const { mutateAsync } = useMutation({
//     mutationFn: async (id) => {
//       const { data } = await axiosSecure.delete(`/booking/${id}`);
//       return data;
//     },
//     onSuccess: async (data) => {
//       console.log(data);
//       refetch();
//       toast.success("Booking Canceled!");
//     //   navigate("/dashboard/manage-bookings");
//       //   change room booked status back to false

//       await axiosSecure.patch(`/room/status/${booking?.roomId}`, {
//         status: false,
//       });
//     },
//   });

//   // handle delete
//   const handleDelete = async (id) => {
//     console.log(id);
//     try {
//       await mutateAsync(id);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <tr>
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <div className="flex items-center">
//           <div className="flex-shrink-0">
//             <div className="block relative">
//               <img
//                 alt="profile"
//                 src={booking?.image}
//                 className="mx-auto object-cover rounded h-10 w-15 "
//               />
//             </div>
//           </div>
//           <div className="ml-3">
//             <p className="text-gray-900 whitespace-no-wrap">{booking?.title}</p>
//           </div>
//         </div>
//       </td>
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <div className="flex items-center">
//           <div className="flex-shrink-0">
//             <div className="block relative">
//               <img
//                 alt="profile"
//                 src={booking?.guest?.image}
//                 className="mx-auto object-cover rounded h-10 w-15 "
//               />
//             </div>
//           </div>
//           <div className="ml-3">
//             <p className="text-gray-900 whitespace-no-wrap">
//               {booking?.guest?.name}
//             </p>
//           </div>
//         </div>
//       </td>
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="text-gray-900 whitespace-no-wrap">${booking?.price}</p>
//       </td>
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="text-gray-900 whitespace-no-wrap">
//           {format(new Date(booking?.from), "P")}
//         </p>
//       </td>
//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <p className="text-gray-900 whitespace-no-wrap">
//           {format(new Date(booking?.to), "P")}
//         </p>
//       </td>

//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
//         >
//           <span
//             aria-hidden="true"
//             className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
//           ></span>
//           <span className="relative">Cancel</span>
//         </button>
//         {/* Delete Modal */}
//         <DeleteModal
//           handleDelete={handleDelete}
//           closeModal={closeModal}
//           isOpen={isOpen}
//           id={booking._id}
//         />
//       </td>

//       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//         <button
        
//           className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
//         >
//           <span
//             aria-hidden="true"
//             className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
//           ></span>
//           <span className="relative">Approve</span>
//         </button>
    
//       </td>

//     </tr>
//   );
// };

// BookingDataRow.propTypes = {
//   booking: PropTypes.object,
//   refetch: PropTypes.func,
// };

// export default BookingDataRow;


import { format } from "date-fns";
import PropTypes from "prop-types";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useRole from "../../../hooks/useRole";

const BookingDataRow = ({ booking, refetch }) => {
  const [role] = useRole();
  const axiosSecure = useAxiosSecure();

  // Approve Booking (for host/admin)
  const { mutateAsync: approveBooking } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.patch(`/booking/approve/${id}`, {
        roomId: booking.roomId,
      });
      return data;
    },
    onSuccess: () => {
      toast.success("Booking Approved!");
      refetch();
    },
  });

  // Cancel Booking (delete + room available)
  const { mutateAsync: cancelBooking } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/booking/${id}`);
      return data;
    },
    onSuccess: () => {
      toast.success("Booking canceled successfully!");
      refetch();
    },
  });

  const showApproveButton = role !== "guest";

  return (
    <tr>
      {/* Room Info */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <img
            alt="room"
            src={booking?.image}
            className="h-10 w-10 rounded object-cover"
          />
          <p className="ml-3 text-gray-900 font-medium">{booking?.title}</p>
        </div>
      </td>

      {/* Guest Info */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <img
            alt="guest"
            src={booking?.guest?.image}
            className="h-10 w-10 rounded-full object-cover border-2 border-gray-300"
          />
          <p className="ml-3 text-gray-900 font-medium">{booking?.guest?.name}</p>
        </div>
      </td>

      {/* Price */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        ${booking?.price}
      </td>

      {/* From */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {format(new Date(booking?.from), "P")}
      </td>

      {/* To */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {format(new Date(booking?.to), "P")}
      </td>

      {/* Actions */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm space-x-2">
        {/* Approve button only for host/admin */}
        {booking?.status === "pending" && showApproveButton && (
          <button
            onClick={() => approveBooking(booking._id)}
            className="px-3 py-1 bg-green-500 text-white rounded font-semibold hover:bg-green-600 transition"
          >
            Approve
          </button>
        )}

        {/* Cancel button for guest/host */}
        {booking?.status === "pending" && (
          <button
            onClick={() => cancelBooking(booking._id)}
            className="px-3 py-1 bg-red-500 text-white rounded font-semibold hover:bg-red-600 transition"
          >
            Cancel
          </button>
        )}

        {/* Status badges */}
        {booking?.status === "approved" && (
          <span className="px-3 py-1 bg-green-600 text-white rounded font-semibold">
            Approved
          </span>
        )}
        {booking?.status === "canceled" && (
          <span className="px-3 py-1 bg-red-600 text-white rounded font-semibold">
            Canceled
          </span>
        )}
      </td>
    </tr>
  );
};

BookingDataRow.propTypes = {
  booking: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default BookingDataRow;
