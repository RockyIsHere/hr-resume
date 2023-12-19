import Image from 'next/image'
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import SendIcon from "@mui/icons-material/Send";
export default function Home() {
  return (
    <main className="h-full w-full  flex flex-col justify-end items-center">
      <div className=" flex justify-center items-center h-14 w-[90%] sm:w-[90%] md:w-[70%]  appearance-none border-2 sm:mb-12 mb-6 sm:px-5 px-3 rounded-xl shadow-lg">
        <h1 className=" hidden sm:flex text-[14px] cursor-pointer ">
          Select job description
          <ArrowDropUpIcon />{" "}
        </h1>
        <div className=" border-r-4 border-slate-900"></div>
        <input
          className=" appearance-none h-full focus:outline-none flex-1"
          placeholder="Type a message..."
          type="text"
        />

        <SendIcon className=' fill-blue-700'/>
      </div>
    </main>
  );
}
