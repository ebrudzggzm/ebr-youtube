import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import api from "../utils/api"

export const VideoContex = createContext();

export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState();
  const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState(null);


  useEffect(()=>{
    const type = selectedCategory.type;
    setIsLoading(true);
    if (type === 'menu') return;

    const url =
      type === 'home'
        ? '/home'
        : type === 'trending'
        ? '/trending'
        : type === 'category'
        ? `/search?query=${selectedCategory.name}`
        : '';
  
    
      api.get(url)
      .then((res)=>setVideos(res.data.data))
      .catch((err)=>setError(err.message))
      .finally(()=>setIsLoading(false));
 


setIsLoading(false);
  },[selectedCategory])

  return   <VideoContex.Provider
    value={{ selectedCategory, setSelectedCategory, videos,error,isLoading }}
  >
    {children}
  </VideoContex.Provider>;
};
