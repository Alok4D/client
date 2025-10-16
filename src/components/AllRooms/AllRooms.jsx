import Categories from "../Categories/Categories";
import Rooms from "../Home/Rooms";

const AllRooms = () => {
  return (
    <div className="py-12 container mx-auto px-4 lg:px-0">
      <Categories />
      <Rooms />
    </div>
  );
};

export default AllRooms;
