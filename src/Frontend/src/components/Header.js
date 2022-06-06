import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";


export default () => {
  const StakingDetail = () => {
    window.open("https://google.com", '_blank').focus();
  }
  return (
    <header className="container px-4 mx-auto py-4">
      <div className="flex flex-row justify-between items-center relative">
        <Link
          to="/"
          className="logo flex flex-row items-center"
        >
          <img
            src="/images/android-chrome-192x192.png"
            width="80"
            className="cursor-pointer "
            alt="Vicc"
          />

          <div className="font-Montserrat-ExtraBold text-white text-2xl  text-white text-lg mb-1 mt-4 text-left">
            &nbsp;Victory&nbsp;Cash
          </div>
        </Link>
          {/* <Button
            className="w-full md:w-1/5 invisible md:visible text-2xl flex flex-row justify-center "
            uppercase={false}
            onClick={StakingDetail}
          >
            Staking Detail
          </Button> */}
      </div>
    </header>
  );
};
