import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex">
          <Link href="/">Agency</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
