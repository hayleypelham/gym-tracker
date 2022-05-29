import '../styles/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h1><a className="navbar-brand" href="/">gym.io</a></h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Workouts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Exercises</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Trends</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="logout" href="/">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
