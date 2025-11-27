import { Link } from "react-router";
import { usePuterStore } from "~/lib/puter";

const Navbar = () => {
  const { auth } = usePuterStore();

  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">RESUMIND</p>
      </Link>
      <div className="flex gap-4 items-center">
        {auth.isAuthenticated && (
          <Link to="/upload" className="primary-button w-fit">
            Upload Resume
          </Link>
        )}
        {auth.isAuthenticated ? (
          <button className="primary-button w-fit" onClick={auth.signOut}>
            Log Out
          </button>
        ) : (
          <Link to="/auth" className="primary-button w-fit">
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
