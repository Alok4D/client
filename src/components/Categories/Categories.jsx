// import Container from "../Shared/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./CategoriesData.js";
import { FaBorderAll } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import queryString from "query-string";

const Categories = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const category = params.get("category");

  // ✅ handle click for "All"
  const handleClick = () => {
    const url = queryString.stringifyUrl({
      url: "/all-rooms", // change route here
      query: {}, // empty => show all data
    });
    navigate(url);
  };

  const isAllActive = !category;

  return (
    <div>
      <div className="pt-16 flex items-center justify-between overflow-x-auto">
        {/* All Category */}
        <div
          onClick={handleClick}
          className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-[#e51d53] transition cursor-pointer 
          ${isAllActive && "border-b-[#e51d53] text-[#e51d53]"}`}
        >
          <FaBorderAll size={26} />
          <div className="text-sm font-medium">All</div>
        </div>

        {/* Other Categories */}
        {categories.map((item) => (
          <CategoryBox key={item.label} label={item.label} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
