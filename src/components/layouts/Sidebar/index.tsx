"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FC } from "react";
import {
  AiOutlineCalendar,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { BsBuildings, BsGear } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const router = useRouter();
  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-4">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineHome className="mr-2 text-lg" />
              Home
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineMessage className="mr-2 text-lg" />
              Messages
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <BsBuildings className="mr-2 text-lg" />
              Company Profile
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineUsergroupAdd className="mr-2 text-lg" />
              All Applicants
            </Button>
            <Button
              onClick={() => router.push("/job-listings")}
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <HiOutlineClipboardList className="mr-2 text-lg" />
              Job Listings
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineCalendar className="mr-2 text-lg" />
              My Schedule
            </Button>
          </div>
        </div>
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
            <Button
              onClick={() => router.push("/settings")}
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <BsGear className="mr-2 text-lg" />
              Settings
            </Button>
            <Button
              variant={"ghost"}
              className="w-full text-red-500 hover:bg-red-200 hover:text-red-500 justify-start rounded-none "
            >
              <AiOutlineHome className="mr-2 text-lg" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
