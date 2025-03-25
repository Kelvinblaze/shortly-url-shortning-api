import Logo from "./Logo";
import FacebookIcon from "../assets/images/icon-facebook.svg";
import TwitterIcon from "../assets/images/icon-twitter.svg";
import PinterestIcon from "../assets/images/icon-pinterest.svg";
import InstagramIcon from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-neutral-very-dark-violet py-16">
      <div className="alignment">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 md:space-y-0 space-y-8 md:text-left text-center">
          <div className="lg:col-span-2">
            <div className="w-max mx-auto lg:mx-0">
              <Logo color="#FFFFFF" />
            </div>
          </div>

          <div className="space-y-5">
            <h5 className="text-white font-semibold">Features</h5>
            <ul className="space-y-3">
              <li className="link-item hover:text-primary-cyan">
                Link Shortening
              </li>
              <li className="link-item hover:text-primary-cyan">
                Branded Links
              </li>
              <li className="link-item hover:text-primary-cyan">Analytics</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h5 className="text-white font-semibold">Resources</h5>
            <ul className="space-y-3">
              <li className="link-item hover:text-primary-cyan">Blog</li>
              <li className="link-item hover:text-primary-cyan">Developers</li>
              <li className="link-item hover:text-primary-cyan">Support</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h5 className="text-white font-semibold">Company</h5>
            <ul className="space-y-3">
              <li className="link-item hover:text-primary-cyan">About</li>
              <li className="link-item hover:text-primary-cyan">Our Team</li>
              <li className="link-item hover:text-primary-cyan">Careers</li>
              <li className="link-item hover:text-primary-cyan">Contact</li>
            </ul>
          </div>

          <div className="lg:col-span-1 md:col-span-4 w-full md:pt-10 lg:pt-0 pt-0">
            <div className="flex items-center space-x-5 w-max mx-auto">
              <img src={FacebookIcon} alt="FacebookIcon" />
              <img src={TwitterIcon} alt="TwitterIcon" />
              <img src={PinterestIcon} alt="PinterestIcon" />
              <img src={InstagramIcon} alt="InstagramIcon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
