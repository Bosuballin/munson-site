import React from "react";
import Drumicon from "../DrumIcon.png";

const date = new Date().getFullYear();

function Footer() {
  return (
    <footer className="page-footer font-small text-white pt-4 bg-dark footer-styles">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Footer Content</h5>
            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a class="footer-link" href="#!">
                  Link 1
                </a>
              </li>
              <li>
                <a class="footer-link" href="#!">
                  Link 2
                </a>
              </li>
              <li>
                <a class="footer-link" href="#!">
                  Link 3
                </a>
              </li>
              <li>
                <a class="footer-link" href="#!">
                  Link 4
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a class="footer-link" href="#!">
                  Link 1
                </a>
              </li>
              <li>
                <a class="footer-link" href="#!">
                  Link 2
                </a>
              </li>
              <li>
                <a class="footer-link" href="#!">
                  Link 3
                </a>
              </li>
              <li>
                <a class="footer-link" href="#!">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        <img
          alt=""
          src={Drumicon}
          width="40"
          height="30"
          className="d-inline-block align-top custom-logo"
        />
        © {date} Copyright
        <a class="footer-link" href="#!">
          {" "}
          MunsonMusic.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
