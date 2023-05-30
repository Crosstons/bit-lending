import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="flex items-center justify-between py-6 px-10 bg-background text-primary shadow-md">
      <div>
        <h1 className="text-2xl font-semibold">BitLending</h1>
      </div>
      <div>
        <Link to="/dashboard" className="inline-block bg-background text-primary px-6 py-3 rounded-full font-bold text-lg transition-colors duration-200 hover:bg-accent">
          Enter App
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
