/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default () => {
  return (
    <div className="py-8 footer-bg mt-32">
      <footer className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div>
            <a
              href="https://Victorycash.tech/"
              className="logo flex flex-row items-center"
            >
              <img
                src="/images/android-chrome-192x192.png"
                width="100"
                className="cursor-pointer"
                alt="LEAD"
              />
              <div className="font-Montserrat-ExtraBold text-white text-2xl  text-white text-lg mb-1 mt-4 text-left">
                Victory Cash
              </div>
            </a>
          </div>
          <div className="flex flex-row items-center justify-center">
            <a
              href="https://pancakeswap.finance/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <img src="/images/logo.png" alt="" width="40" />
            </a>
            <a
              href="https://twitter.com/Victorycashcoin"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <img src="/images/sm-twitter.svg" alt="" width="40" />
            </a>
            <a
              href="https://t.me/+0kXSAxbiw4EwNzUy"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <img src="/images/sm-telegram.svg" alt="" width="40" />
            </a>

          </div>
          <div className="footer-copyright text-center py-3 text-white">
            <div fluid="true">
              &copy; {new Date().getFullYear()} Copyright: <a href="#"> Victory Cash Staking Service </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
