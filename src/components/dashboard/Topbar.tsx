import { BiBell } from "react-icons/bi";
import { BsEnvelope } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardCommandKey } from "react-icons/md";
import { useAuth } from "../../stores/auth";
import { useState } from "react";

function SearchInput({ forceShow = false }: { forceShow?: boolean }) {
  return (
    <div className={`relative w-fit md:w-full max-w-md ${forceShow ? '' : 'sm-hidden'}`}>
      <input type="text" placeholder="Search..." className="w-full p-3 md:pl-12 md:pr-20 md:py-3 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200 placeholder:text-theme-subtle" />
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-black text-2xl sm-hidden" />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-xs font-semibold hidden md:flex items-center gap-1">
        <MdKeyboardCommandKey size={18} /> F
      </span>
    </div>
  );
}

function UserInfo() {
  const auth = useAuth()
  if (auth.user) {
    return <div className="flex items-center flex items-center gap-2">
      <div className="rounded-full bg-pink-200 p-2">
        <img src="/man.png" className="w-5 md:w-10 h-5 md:h-10" alt="" />
      </div>
      <div className="sm-hidden flex flex-col gap-1">
        <div className="text-xs md:text-md font-medium">{auth.user.name}</div>
        <div className="text-xs md:text-md text-theme-subtle">{auth.user.email}</div>
      </div>
    </div>
  }
  return null;
}

export default function DashboardTopbar() {
  const [showMobileSearch, setShowMobileSearch] = useState<boolean>(false);

  return <div className="w-full p-1.5 md:p-3 rounded-lg md:rounded-2xl bg-theme-alpha-gray flex flex-col gap-2">
    <div className="flex items-center gap-3">
      <SearchInput />
      <div className="ms-auto"></div>
      <div onClick={() => setShowMobileSearch(!showMobileSearch)} className="md-hidden rounded-full p-2 bg-white text-xl md:text-2xl">
        <FiSearch />
      </div>
      <div className="rounded-full p-2 bg-white text-xl md:text-2xl">
        <BsEnvelope />
      </div>
      <div className="rounded-full p-2 bg-white text-xl md:text-2xl">
        <BiBell />
      </div>
      <UserInfo />
    </div>
    <div className={`w-full flex justify-center transition-all overflow-hidden ${showMobileSearch ? 'h-fit py-2' : 'h-0'}`}>
      <SearchInput forceShow={true} />
    </div>
  </div>
}