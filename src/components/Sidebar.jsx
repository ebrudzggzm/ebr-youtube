import { useContext } from "react";
import { categories } from "../constants/index";
import { VideoContex } from "../context/videoContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const {selectedCategory,setSelectedCategory} = useContext(VideoContex);

  return (
    <div className="flex flex-col p-1 md:p-4">
      {categories.map((item, index) => (
        <Link to={'/'} onClick ={()=>setSelectedCategory(item)} key={index}>
          <div style={{backgroundColor : selectedCategory.name === item.name && '#2d2d2d', borderRadius:'10px'}} className="flex items-center gap-2 py-2 px-2 md:px-3 md:text-lg cursor-pointer rounde-md hover:bg:[#2d2d2d]">
          <span className="max-md:text-2xl">{item.icon}</span>
          <span className="max-md:hidden line-clamp-1">{item.name}</span>
          </div>
        {
            item.divider && <hr/> 
        }
        </Link>
        
      ))}
     
    </div>
  );
};

export default Sidebar;
