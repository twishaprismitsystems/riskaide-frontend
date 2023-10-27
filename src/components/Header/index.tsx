import { IHeader } from "@/types/homePage";
import utils from "@/utils/utils";
import { useEffect, useState } from "react";
import SideBar from "@/components/Header/SideBar";

const Header = (props: { result: IHeader; isAdmin?: boolean }) => {
  const [scrollY, setScrollY] = useState<boolean>(false);
  const [result, setResult] = useState<IHeader>(props.result);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      {isOpen && !props.isAdmin && (
        <div className={`w-full px-0 sidebarEffect`} onClick={toggle}></div>
      )}
      <header
        onClick={() => {
          if (isOpen) {
            toggle();
          }
        }}
        className={`bg-primary py-8 ${scrollY && "darkHeader"} ${
          props.isAdmin && "darkHeader"
        } `}
      >
        <div className="notice">
          <h5>{utils.getContent(result?.warningMessage)}</h5>
        </div>
        <SideBar
          isAdmin={props.isAdmin}
          result={result}
          isOpen={isOpen}
          toggle={toggle}
        />
      </header>
    </>
  );
};

export default Header;
