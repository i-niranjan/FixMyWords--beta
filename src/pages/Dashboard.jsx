import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ShareDialog from "@/components/ShareDialog";
import Sidebar from "@/components/Sidebar";
import TextArea from "@/components/TextArea";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row p-4 w-[100%] gap-2">
        <div className="md:w-[70%] ">
          <TextArea />
        </div>
        <div className="md:w-[30%]">
          <Sidebar />
        </div>
        <ShareDialog />
      </div>
      <Footer />
    </>
  );
}
