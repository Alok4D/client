import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import useRole from '../../../hooks/useRole';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';

const Profile = () => {
  const { user, loading } = useAuth() || {};
  const [role, isLoading] = useRole();

  if (isLoading || loading) return <LoadingSpinner />;

  return (
    <div className='min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 flex items-center justify-center'>
      <Helmet>
        <title>Profile</title>
      </Helmet>

      <div className='bg-white shadow-2xl rounded-3xl w-full max-w-3xl overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out'>
        {/* Banner */}
        <div className='relative h-40 bg-gradient-to-r from-pink-500 to-purple-500 overflow-hidden'>
          <img
            src='https://wallpapercave.com/wp/wp10784415.jpg'
            alt='profile banner'
            className='w-full h-full object-cover opacity-30 transform hover:scale-110 transition-transform duration-700'
          />
        </div>

        {/* Profile Info */}
        <div className='flex flex-col items-center -mt-16'>
          <div className='relative group'>
            <img
              src={user?.photoURL || 'https://via.placeholder.com/150'}
              alt='profile'
              className='rounded-full border-4 border-white h-32 w-32 object-cover shadow-xl transform transition-transform duration-500 group-hover:scale-110'
            />
            <span className='absolute -bottom-2 right-0 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-md animate-bounce'>
              {role}
            </span>
          </div>

          <h2 className='mt-4 text-2xl font-semibold text-gray-800 animate-fadeIn'>{user?.displayName}</h2>
          <p className='text-gray-500 animate-fadeIn delay-100'>{user?.email}</p>
          <p className='text-gray-600 text-sm mt-1 animate-fadeIn delay-200'>User ID: {user?.uid}</p>

          {/* Action Buttons */}
          <div className='mt-6 flex flex-col sm:flex-row gap-4 w-full justify-center'>
            <button className='w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
              Update Profile
            </button>
            <button className='w-full sm:w-auto bg-white border border-pink-500 text-pink-500 font-semibold px-6 py-2 rounded-lg shadow hover:bg-pink-50 transform transition-all duration-300 hover:scale-105'>
              Change Password
            </button>
          </div>

          {/* User Details Card */}
          <div className='mt-6 bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50 w-full rounded-2xl shadow-inner animate-fadeIn delay-300'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 p-6'>
              <div className='flex flex-col'>
                <span className='text-sm text-gray-500'>Name</span>
                <span className='font-medium text-gray-800'>{user?.displayName}</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-sm text-gray-500'>Email</span>
                <span className='font-medium text-gray-800'>{user?.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind custom animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.7s ease forwards;
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
        `}
      </style>
    </div>
  );
};

export default Profile;
