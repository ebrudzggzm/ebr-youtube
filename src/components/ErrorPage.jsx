import { TbFaceIdError } from "react-icons/tb";
const ErrorPage = ({error}) => {
  return (
    <div className="bg-red-500 h-fit rounded p-4 flex flex-col gap-5">
     <TbFaceIdError className="text-5xl text-gray-700 "/>
         <p>Üzgünüz bir hata oluştu daha sonra tekrar deneyiniz</p>
      <h2 className="font-semibold">{error}</h2>

    </div>
  )
}

export default ErrorPage
