import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 min-h-screen flex flex-col transition-all duration-500">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}