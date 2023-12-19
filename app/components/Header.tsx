import Image from "next/image";
import logo from "/public/images/Logo.svg";
import {
  Add,
  ChatOutlined,
  FolderOpenOutlined,
  CheckBox,
} from "@mui/icons-material";

const chats: string[] = [
  "Is there  any candidate with backend knowledge in spring boot",
  "java 2 years",
  "summaries the cv of Rocky Karmakar",
  "frontenf with flutter and javascript knowledge",
];

const folders: string[] = [
  "Is there  any candidate with backend knowledge in spring boot",
  "java 2 years",
  "summaries the cv of Rocky Karmakar",
  "frontenf with flutter and javascript knowledge",
];

const Chat = ({ text }: { text: string }) => {
  return (
    <div className=" cursor-pointer flex gap-2 w-full py-3 hover:bg-[#3E3F4B] px-4 hover:rounded-lg justify-start items-center text-white text-sm">
      <ChatOutlined /> <p className=" line-clamp-1">{text}</p>
    </div>
  );
};

const Folder = ({ text }: { text: string }) => {
  return (
    <div className=" cursor-pointer flex gap-2 w-full py-3 hover:bg-[#3E3F4B] px-4 hover:rounded-lg justify-start items-center text-white text-sm">
      <FolderOpenOutlined /> <p className=" flex-1 line-clamp-1">{text}</p>
      <div className="px-2  bg-[#3E3F4B] text-[10px] text-white rounded">
        20
      </div>
      <CheckBox/>
    </div>
  );
};

export default function Header() {
  return (
    <div className=" hidden  w-80 h-screen bg-[#333333] border-r-2 sticky left-0 sm:flex flex-col justify-start items-center">
      <div className="   w-full px-6 py-8 fill-white">
        <Image src={logo} alt={"logo"} className=" w-full " />
      </div>
      <div className=" w-[90%]">
        <button className="gap-1 stroke-white flex justify-center items-center tracking-wider appearance-none h-12 w-full my-3 bg-blue-800 bg-opacity-20 border-blue-900 rounded border-2 font-medium text-md  text-white ">
          New Chat
          <Add className=" h-5 w-5" />
        </button>
      </div>

      <div className=" flex-1 flex flex-col justify-start items-center">
        <div className=" flex w-[90%] justify-center items-center">
          <div className=" text-slate-200 text-sm font-semibold uppercase">
            Recent Queries
          </div>
          <div className=" flex-1 border-b-2 ml-2"></div>
        </div>
        <div className=" flex w-[90%] mt-3 flex-col justify-start items-start">
          {chats.map((chat, index) => (
            <Chat key={index} text={chat} />
          ))}
        </div>
      </div>
      <div className=" py-4 flex flex-col justify-center items-center">
        <div className=" flex w-[90%] justify-center items-center">
          <div className=" text-slate-200 text-sm font-semibold uppercase">
            folders
          </div>
          <div className=" flex-1 border-b-2 ml-2"></div>
        </div>
        <div className=" flex w-[90%] mt-3 flex-col justify-start items-start">
          {folders.map((chat,index) => (
            <Folder key={index} text={chat} />
          ))}
        </div>
      </div>
    </div>
  );
}
