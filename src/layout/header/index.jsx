import Container from "@/components/container";
import MobileNav from "@/components/mobile-nav";
import Translate from "@/components/translate";
import { headerInfo, pagesList } from "@/utils/consts";
import { getCookie } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleSticky = () => {
      if (window.scrollY > 60) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleSticky);

    return () => window.removeEventListener("scroll", handleSticky);
  }, []);

  const { reload } = useRouter();

  return (
    <header className="">
      <Translate />
      <MobileNav open={open} setOpen={setOpen} />
      <div className="bg-[#090031]">
        <Container>
          <div className="flex items-center justify-center smd:justify-between  py-3">
            <div className=" hidden smd:flex items-center gap-6">
              {headerInfo?.slice(0, 2)?.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  className="text-base text-white hover:text-primary transition-all duration-500"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="">
              <select
                value={
                  getCookie("googtrans")
                    ? getCookie("googtrans")?.split("/en/")[1]
                    : "en"
                }
                onChange={(e) => {
                  document.cookie =
                    "googtrans" +
                    "=" +
                    (e.target.value == "en" ? "" : `/en/${e.target.value}`) +
                    "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
                  reload();
                }}
                className="px-[25px] py-[10px] text-white border-2 border-white rounded-md hover:border-primary hover:text-primary transition-all duration-500 font-semibold bg-transparent"
              >
                <option value="en">English</option>
                <option value="ru">Russian</option>
                <option value="uz">Uzbek</option>
                <option value="fr">France</option>
                <option value="de">German</option>
                <option value="it">Italian</option>
              </select>
            </div>
          </div>
        </Container>
      </div>
      <div
        className={`bg-white  w-full py-3 sm:py-6 shadow-md ${
          sticky && "fixed z-[20] shadow-md top-0 left-0"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            <Link href={"/"}>
              <img
                src="data:image/png;base64,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"
                className=""
                width={100}
                height={70}
              />
            </Link>
            <button
              className="w-[24px] h-[24px] flex md:hidden flex-col gap-[6px]"
              onClick={() => {
                setOpen(true);
              }}
            >
              <span className="block w-full h-[2px] bg-darkBlue rounded-md"></span>
              <span className="block w-full h-[2px] bg-darkBlue rounded-md"></span>
              <span className="block w-full h-[2px] bg-darkBlue rounded-md"></span>
            </button>
            <div className="hidden md:flex items-center gap-5 text-darkBlue text-base">
              {pagesList?.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  className="group hover:text-primary transition-all duration-500 font-semibold"
                >
                  <span className="block mb-[6px]">{item?.name}</span>
                  <div className="group-hover:max-w-full max-w-0 mx-auto w-full h-[2px] bg-primary transition-all duration-500"></div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
