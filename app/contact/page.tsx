import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-[#0b0d26] h-screen flex items-center justify-center text-white flex-col gap-6">
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-[60px] max-lg:text-[40px] font-semibold">
          Coming Soon!
        </h1>
        <Link
          href="/"
          className="bg-[#fa4729] hover:bg-[#db2b0e] px-4 py-2 rounded font-medium"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default page;
