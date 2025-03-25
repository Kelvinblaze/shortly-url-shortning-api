import { Links } from "../constants/links";

const MobileMenu = () => {
  return (
    <div className="absolute w-full z-[5]">
      <div className="alignment">
        <div className=" bg-primary-dark-violet p-5 py-10 rounded-xl w-full space-y-5 text-lg divide-y divide-gray-100/20">
          <ul className="space-y-5 text-center">
            {Links.map((link, index) => {
              return (
                <li className="link-item hover:text-white " key={index}>
                  {link.title}
                </li>
              );
            })}
          </ul>
          <ul className="space-y-5 text-center pt-5">
            <li className="link-item hover:text-white ">Login</li>
            <li>
              <button className="primary-btn">Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
