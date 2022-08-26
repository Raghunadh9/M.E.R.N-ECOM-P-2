import React from "react";
import "./Footer.css";
import "./bootstrap.css";
const Footer = () => {
  const today = new Date().getFullYear;

  return (
    <div>
      <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
          <div class="row gy-4 gx-5">
            <div class="col-lg-4 col-md-6">
              <h5 class="h1 text-white">FPASSIONN.</h5>
              <p class="small text-white">Fashion is our Passion.</p>
              <p class="small text-white mb-0">
                &copy; Copyrights.{today} All rights reserved.{" "}
              </p>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Quick links</h5>
              <ul class="list-unstyled text-muted">
                <li>
                  <a className="link-light" href="#">
                    Products
                  </a>
                </li>
                <li>
                  <a className="link-light" href="#">
                    Contacts
                  </a>
                </li>
                <li>
                  <a className="link-light" href="#">
                    About{" "}
                  </a>
                </li>
                <li>
                  <a className="link-light" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Quick links</h5>
              <ul class="list-unstyled ">
                <li>
                  <a className="link-light" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="link-light" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="link-light" href="#">
                    Get started
                  </a>
                </li>
                <li>
                  <a className="link-light" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Follow us on</h5>
              <ul class="list-unstyled text-muted">
                <li>
                  <a className="link-light" href="#">
                    Facebook
                  </a>
                </li>
                <li>
                  <a className="link-light" href="#">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="link-light" href="#">
                    Twitter
                  </a>
                </li>
                <li>
                  <a className="link-light" href="#">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
