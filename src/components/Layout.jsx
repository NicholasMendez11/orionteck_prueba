import React, { useState } from "react";
import Head from "next/head";
import {
  IoAccessibility,
  IoAlbumsSharp,
  IoAnalyticsOutline,
  IoAtCircleOutline,
  IoBasketSharp,
  IoBuildSharp,
} from "react-icons/io5";
function Layout({ children }) {
  const [dropdown, setDropdown] = useState(false);

  function HandleDropdown() {
    setDropdown(!dropdown);

  }

  return (
    <>
      <Head>
        <title>Orion Teck prueba</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex  flex-no-wrap">
        <div
          className={
            dropdown
              ? "w-64 absolute  bg-[#2F76E6] shadow h-screen flex-col justify-between sm:flex"
              : "w-64 absolute  bg-[#2F76E6] shadow h-screen md:h-screen flex-col justify-between hidden sm:flex"
          }
        >
          <div>
            <div className="h-16 w-full flex items-center px-8">
              <p className="text-gray-900 text-2xl dark:text-white">Tus clientes</p>
            </div>
            <ul className="mt-12">
              <li className="flex w-full justify-between text-white hover:text-white hover:bg-[#808cf6] cursor-pointer items-center py-3 px-8">
                <div className="flex items-center">
                  <IoAccessibility />
                  <span className="text-sm  ml-2">Clientes</span>
                </div>
              </li>
              <li className="flex w-full cursor-not-allowed justify-between text-white hover:text-white hover:bg-[#808cf6]  items-center px-8 py-3">
                <div className="flex items-center">
                  <IoAlbumsSharp />
                  <span className="text-sm  ml-2">Productos</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-white hover:text-white hover:bg-[#808cf6] cursor-pointer items-center px-8 py-3">
                <div className="flex items-center">
                  <IoAnalyticsOutline />
                  <span className="text-sm  ml-2">Dashboard</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-white hover:text-white hover:bg-[#808cf6] cursor-pointer items-center px-8 py-3">
                <div className="flex items-center">
                  <IoBasketSharp />
                  <span className="text-sm  ml-2">Ventas</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-white hover:text-white hover:bg-[#808cf6] cursor-pointer items-center px-8 py-3">
                <div className="flex items-center">
                  <IoAtCircleOutline />
                  <span className="text-sm  ml-2">Reuniones</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-white hover:text-white hover:bg-[#808cf6] cursor-pointer items-center px-8 py-3">
                <div className="flex items-center">
                  <IoBuildSharp />
                  <span className="text-sm  ml-2">Casos</span>
                </div>
              </li>
            </ul>
            <div className="flex items-center absolute inset-x-0 bottom-0 mb-4 px-8 ">
              <div className="w-10 h-10 bg-cover rounded-md mr-3">
                <img
                  src="https://i.ibb.co/H28bXk1/1671973205185.jpg"
                  alt="profile picture"
                  className="rounded-full h-full w-full overflow-hidden shadow"
                />
              </div>
              <div>
                <p className="text-white text-sm font-medium">
                  Nicholas Mendez
                </p>
                <p className="text-white text-xs">Sign Out</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="text-gray-600 mr-8 visible sm:hidden relative"
          onClick={HandleDropdown}
        >
          <ul className="p-y w-64 border-r bg-indigo-900 absolute rounded left-0 shadow mt-8 sm:mt-16 hidden">
            <li className="flex w-full justify-between text-gray-600 hover:text-white hover:bg-indigo-800 cursor-pointer items-center py-3 px-2">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-grid"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={4} y={4} width={6} height={6} rx={1} />
                  <rect x={14} y={4} width={6} height={6} rx={1} />
                  <rect x={4} y={14} width={6} height={6} rx={1} />
                  <rect x={14} y={14} width={6} height={6} rx={1} />
                </svg>
                <span className="text-sm  ml-2">Dashboard</span>
              </div>
            </li>
          </ul>
          <svg
            aria-label="Main Menu"
            aria-haspopup="true"
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu cursor-pointer m-3"
            width={30}
            height={30}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1={4} y1={8} x2={20} y2={8} />
            <line x1={4} y1={16} x2={20} y2={16} />
          </svg>
        </div>

        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;
