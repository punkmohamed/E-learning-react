import { useSelector } from 'react-redux';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import CoverOne from '../images/cover/cover-01.png';
import userSix from '../images/user/user-06.png';

import { setUser } from '../../redux/reducers/userAuthSlice';
const Profile = () => {
  const { user } = useSelector(state => state.auth)

  return (
    <>
      <Breadcrumb pageName="Profile" />
      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src={CoverOne}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full overflow-hidden bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2 w-full h-full">
              <img className='  object-cover rounded-full w-full h-full' src={user?.image || userSix} alt="profile" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              {user?.name}

            </h3>
            <p className="font-medium">Super Admin</p>

            <div className="mx-auto max-w-180">
              <h4 className="font-semibold text-black dark:text-white">
                {user?.email}
              </h4>
              <h4 className="font-semibold text-black dark:text-white">
                {user?.phone}
              </h4>
              <p className="mt-4.5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque posuere fermentum urna, eu condimentum mauris
                tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus
                ultricies. Sed vel aliquet libero. Nunc a augue fermentum,
                pharetra ligula sed, aliquam lacus.
              </p>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
