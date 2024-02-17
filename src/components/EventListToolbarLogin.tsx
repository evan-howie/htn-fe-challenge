import { Link } from "react-router-dom";

const EventListToolbarLogin = () => {
  return (
    <Link className="bg-white text-gray-700 py-1 px-6 h-fit" to="/login">
      Login
    </Link>
  );
};

export default EventListToolbarLogin;
