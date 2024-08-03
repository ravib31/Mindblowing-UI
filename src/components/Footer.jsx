
import { socials } from "../constants";

const Footer = () => {
  return (
    <div  className="m-5 border border-gray-800"> 
      <div className="container p-4 flex sm:justify-between justify-center  items-center gap-4 max-sm:flex-col">  {/* Reduced gap */}
        <p className="caption text-n-4 lg:block">
          © ₹V {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-1 flex-wrap"> 
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
