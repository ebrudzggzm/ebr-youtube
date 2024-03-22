import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { VideoContex } from "../context/videoContext";
import Loader from "../components/Loader";
import ErrorPage from "../components/ErrorPage";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { videos, error, isLoading } = useContext(VideoContex);
  console.log(videos,'feedvideos')
  return (
    <div className="flex">
      <Sidebar />
      <div className="videos">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorPage error={error} />
        ) : (
          videos?.map(
            (item) =>
              item.type === "video" && (
                <VideoCard video={item} key={item.videoId}  />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
