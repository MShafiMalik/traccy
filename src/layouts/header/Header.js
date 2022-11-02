import "./Header.scss";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

const Header = () => {
  return (
    <header className="d-flex container-fluid ps-5 py-3">
      <div className="logo d-flex">
        <img
          src="assets/images/home/logo_traccy.png"
          alt="logo"
          width={140}
          height={30}
        />
        <span className="text-light text">
          <small>Impact</small>
          <br />
          <small>Through</small>
          <br />
          <small>Crypto</small>
        </span>
      </div>
      <button type="button" className="btn sidebar-btn text-light ms-auto">
        <ViewHeadlineIcon />
      </button>
    </header>
  );
};

export default Header;
