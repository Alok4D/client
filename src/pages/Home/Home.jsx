import { Helmet } from "react-helmet-async";
import Categories from "../../components/Categories/Categories";
import Rooms from "../../components/Home/Rooms";
import Banner from "../../components/Home/Banner";
import Testimonials from "../../components/Home/Testimonials";
import ServicesAmenities from "../../components/Home/ServicesAmenities";
import VideoTour from "../../components/Home/VideoTour";
import ThereCard from "../../components/Home/ThereCard";
import MasterRoom from "../../components/Home/MasterRoom";
import BlogEventsGrid from "../../components/Home/Blogs";




const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
     <Banner/>

     <ThereCard/>
     <MasterRoom/>
      {/* <PopularDestinations/> */}
      {/* Categories section  */}
     
      {/* <GuestFavorites/> */}
      <VideoTour/>
      <ServicesAmenities/>
      <BlogEventsGrid/>
      <Testimonials/>
      {/* <WhyChooseUs/> */}
    </div>
  );
};

export default Home;
