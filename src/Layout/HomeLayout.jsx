import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Navbar/Footer/Footer";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-base-100">
      {/* Infinity Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse italic"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] animate-pulse italic" style={{ animationDelay: '2s' }}></div>
      </div>

      <header className="relative z-50">
        <Navbar />
      </header>

      <main className="flex-grow relative z-10">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
