import { appName } from "@/lib/variables";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-teal-800 text-white pt-16 overflow-hidden">
      <div className="absolute inset-0">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-full"
        >
          <path
            fill="#0f766e"
            fillOpacity="1"
            d="M0,192L80,208C160,224,320,256,480,245.3C640,235,800,181,960,186.7C1120,192,1280,256,1360,288L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg> */}
      </div>
      <div className="relative z-10 container mx-auto px-6 py-8 flex flex-col md:flex-row flex-start">
        <div className="mb-6 md:mb-0 md:w-1/4">
          {/* <img
            src="../ac-logo.png" // Update with your logo path
            alt={appName}
            className="h-12"
            style={{width:'100%', height:'100%'}}
          /> */}
          <h3>AdjusterCopilot</h3>
          <p>@{appName} 2024 </p>
          <p>All rights reserved.</p>
        </div>
        <div className="mb-6 md:mb-0 md:w-1/4">
          <h5 className="font-bold mb-2">Learn More</h5>
          <ul>
            <li>
              <a href="/about-us" className="hover:underline">
                About us
              </a>
            </li>
            {/* <li>
              <a href="/product-feature" className="hover:underline">
                Product Features
              </a>
            </li> */}
            <li>
              <a href="/pricing" className="hover:underline">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0 md:w-1/4">
          <h5 className="font-bold mb-2">Line of Business</h5>
          <ul>
            <li>
              <Link href="/claim-type/wind" className="hover:underline">
                Wind Claims
              </Link>
            </li>
            <li>
              <Link href="/claim-type/flood" className="hover:underline">
                Flood Claims
              </Link>
            </li>
            <li>
              <Link href="/claim-type/fire" className="hover:underline">
                Fire Claims
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Custom Process
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className="mb-6 md:mb-0 md:w-1/4">
          <h5 className="font-bold mb-2">Category 3</h5>
          <ul>
            <li><a href="#" className="hover:underline">Link 1</a></li>
            <li><a href="#" className="hover:underline">Link 2</a></li>
            <li><a href="#" className="hover:underline">Link 3</a></li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
