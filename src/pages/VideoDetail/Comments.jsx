import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
const Comments = ({ data }) => {
  return (
    <div className="my-6">
      <h2 className="text-xl font-bold">{data.commentsCount} Yorum</h2>
      <input
        type="text"
        placeholder="Yorum ekleyiniz."
        className="w-full bg-transparent border-b p-2 outline-none mb-5"
      />
      {data.data.map((item) => (
        <div className="flex gap-2 items-start px-1 py-4">
          <img
            className=" rounded-full"
            src={item.authorThumbnail[0].url}
            alt="logo"
          />
          <div className="flex flex-col gap-2">
            <h5 className="flex gap-2 items-center">
              <span className="text-semibold">{item.authorText}</span>
              <span className="text-sm text-gray-400">{item.publishedTimeText}</span>
            </h5>
            <p>{item.textDisplay}</p>
            <div className="flex gap-5 items-center">
              <div className="flex gap-1 hover:bg-gray-700 p-1 rounded cursor-pointer">
              <AiOutlineLike /> 
            <span className="text-sm text-gray-400">{item.likesCount}</span>
              </div>
           <div className="flex gap-1 hover:bg-gray-700 p-1 rounded cursor-pointer">
             <BiDislike />
              
           
            </div>
            <span className="hover:bg-gray-700 p-1 rounded cursor-pointer">Yanıtla</span></div>
            {item.replyCount > 0 ? <div className="flex items-center w-fit gap-2 text-blue-500 hover:bg-[#36639662] p-1 rounded-md">
            <IoMdArrowDropdown />
              <span>{item.replyCount } yanıt</span>
            </div> : null}
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
