import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer/Footer";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div
      className="flex flex-col min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "var(--color-black)" }}
    >

      {/* Background radial glow — orange center */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none"
      >
        {/* Top-left soft orange glow */}
        <div
          className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,77,0,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Bottom-right subtle glow */}
        <div
          className="absolute bottom-[-15%] right-[-10%] w-[45%] h-[45%] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,77,0,0.04) 0%, transparent 70%)",
            filter: "blur(80px)",
            animationDelay: "2s",
          }}
        />

        {/* Center dead-center very faint glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,77,0,0.03) 0%, transparent 65%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Navbar */}
      <header className="relative z-50">
        <Navbar />
      </header>

      {/* Page content */}
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>

    </div>
  );
};

export default HomeLayout;