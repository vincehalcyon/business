import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineClose,
  AiOutlineUser,
} from "react-icons/ai";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/lib/context/GlobalContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiMenu } from "react-icons/bi";

export default function Menu() {
  const { asPath } = useRouter();
  const [showNav, setShowNav] = useState(false);
  const { menus } = useContext(GlobalContext);

  useEffect(() => {
    if (showNav && window.innerWidth < 768) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showNav]);

  return (
    <>
      <nav className="sticky top-0 z-10 w-full px-5 bg-[#0a0a2c]">
        <div className="flex max-w-[1142px] w-full lg:mx-auto h-[100px] items-center">
          <div className="flex flex-col items-center justify-between w-full lg:flex-row">
            <div className="flex items-center justify-between w-full lg:w-auto">
              <h3 className="text-2xl sm:text-4xl">
                My
                <span className="text-[#2D76C3] font-[800]"> Business</span>
              </h3>
              <div className="flex items-center lg:hidden gap-3">
                <button
                  className="p-2 rounded-md outline-none text-2xl text-secondary"
                  onClick={() => setShowNav(!showNav)}
                >
                  {showNav ? (
                    <AiOutlineClose className="m-auto" />
                  ) : (
                    <BiMenu className="m-auto" />
                  )}
                </button>
              </div>
            </div>
            <div className="justify-self-center">
              <div
                className={`left-0 top-[100px] lg:static fixed lg:h-auto items-center w-full bg-red-200 lg:bg-[#0a0a2c] lg:w-auto bg-opacity-95 transition-all duration-300 overflow-hidden
                  ${showNav ? "left-[100%] " : "left-[0px] lg:h-auto"}
                  
                `}
              >
                <div className="flex h-full items-center justify-center">
                  <div className="h-screen md:h-auto flex flex-col lg:flex-row items-center justify-center">
                    <ul className="flex flex-col lg:flex-row justify-end items-center text-center">
                      {menus?.parentNodes.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className={`text-left lg:text-center px-3 py-[10px] lg:py-[0px] text-[18px] lg:px-[25px]  ${
                              asPath === item?.url
                                ? "text-[#2D76C3] "
                                : "text-black"
                            } hover:text-[#2D76C3] cursor-pointer `}
                          >
                            <Link
                              href={item.url}
                              onClick={() => setShowNav(!showNav)}
                            >
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <ul className="flex gap-3 justify-center lg:justify-start">
                      <li>
                        <AiFillInstagram
                          size={25}
                          className="text-[#2D76C3] "
                        />
                      </li>
                      <li>
                        <BsFacebook size={24} className="text-[#2D76C3] " />
                      </li>
                      <li>
                        <AiFillTwitterCircle
                          size={25}
                          className="text-[#2D76C3] "
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
