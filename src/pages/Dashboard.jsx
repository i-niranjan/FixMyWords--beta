import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import TextArea from "@/components/TextArea";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="flex p-4 w-[100%] gap-x-2">
        <div className="w-[70%] ">
          <TextArea />
        </div>
        <div className="w-[30%]">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </>
  );
}
