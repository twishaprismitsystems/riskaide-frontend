import { adminNavigationList, navigationList } from "@/data/Navigations";
import { IHeader } from "@/types/homePage";
import utils from "@/utils/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SideBar = (props: {
  isOpen: boolean;
  toggle: () => void;
  result: IHeader | null;
  isAdmin?: boolean;
}) => {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    navigationList.forEach((item) => {
      if (router.pathname == item.link) {
        setSelectedIndex(item.index);
      }
    });
  }, [router.pathname]);

  let lstNavigation = props.isAdmin ? adminNavigationList : navigationList;

  return (
    <>
      <div className="flex items-center flex-wrap gap-y-3 gap-x-2 justify-between">
        {!props.isAdmin && (

          <div className="sm:flex-1 header_menu">
            <button
              className="menu_toggle flex items-center text-white"
              type="button"
              onClick={() => {
                props.toggle();
              }}
            >
              <svg
                width={40}
                height={30}
                viewBox="0 0 40 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={40} height={6} rx={3} fill="white" />
                <rect y={12} width={40} height={6} rx={3} fill="#009936" />
                <rect y={24} width={40} height={6} rx={3} fill="white" />
              </svg>
              <span>MENU</span>
            </button>
          </div>
        )}
        <div className="sm:flex-1 header_logo text-right sm:text-center">
          <Link href="/">
            <img src={props.result?.image} className="mx-auto" alt="header_logo.svg" />
          </Link>
        </div>
        {!props.isAdmin && (
          <div className="sm:flex-1 header_actions text-right">
            <Link
              href={utils.getLink(props.result?.btnLink)}
              className="btn-secondary button btn-style-1"
            >
              {utils.getContent(props.result?.btnTitle)}
            </Link>
          </div>
        )}
      </div>

      {!props.isAdmin && (
        <div
          id="nav_toggle"
          className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${!props.isOpen && "-translate-x-full"
            } bg-white`}
        >
          <button
            type="button"
            className="close_nav bg-white text-primary rounded-50 hover:bg-secondaryHover hover:text-white"
            onClick={() => {
              props.toggle();
            }}
          >
            <i className="fa-solid fa-xmark" />
          </button>
          <ul className="navbar">
            {lstNavigation &&
              lstNavigation.map((item) => (
                <li
                  className="nav_item"
                  key={item.index}
                  onClick={() => {
                    router.push(item.link);
                    return null;
                  }}
                >
                  <Link
                    href={utils.getLink(item.link)}
                    className={`nav_link ${selectedIndex === item.index && "active"
                      }`}
                  >
                    {utils.getContent(item.name)}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SideBar;
