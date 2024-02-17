import React from "react";
import { Link } from "react-router-dom";

const EventListToolbarLogin = () => {
  return (
    <Link className="bg-white text-gray-700 py-1 px-6" to="/login">
      Login
    </Link>
  );
};

export default EventListToolbarLogin;
