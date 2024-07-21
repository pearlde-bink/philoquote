"use client";
import Footer from "../app/component/Footer";
import Header from "../app/component/Header";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("https://philosophy-quotes-api.glitch.me/quotes");
      if (res.ok) {
        const val = await res.json();
        setData(val);
      }
    } catch (err) {
      console.error("Error fetching data: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    AOS.init({});
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <>
      <Header />
      <main className="h-auto pt-4 flex-col flex items-center justify-start bg-black text-white border-none">
        {/* Search form */}
        <form className="max-w-md w-full mx-auto border-2 rounded-lg">
          <div className="flex">
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm rounded-lg text-gray-900 bg-gray-50 rounded-e-lg   dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search by author, philosophy, keyword..."
                required=""
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-pink-800 rounded-e-lg border border-pink-700 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>

        {/* main content */}
        <div className="container w-fill max-w-4xl space-y-4 mt-6 h-full p-5">
          <div className="gap-4 columns-2 sm:gap-5 md:gap-10 sm:columns-3 md:columns-4">
            {data.map((item, index) => (
              <div
                className="quote w-auto mt-5 sm:mt-6 md:mt-10 border-2 hover:border-pink-800 p-3 bg-white rounded shadow text-center text-sm
              text-gray-700 font-serif font-thin hover:bg-gray-100"
                data-aos="fade-up"
                data-aos-duration="1000"
                key={index}
              >
                <p className="">{item.quote}</p>
                <div className="group w-full pt-3 flex flex-row justify-evenly text-center">
                  <p className="font-bold text-sm font-sans">
                    {item.source}
                    {/* ({item.philosophy}) */}
                  </p>
                  <button
                    title="Add to favorites"
                    type="button"
                    className="addfav text-pink-200 hover:cursor-pointer focus:ring-4 rounded-lg text-sm"
                  >
                    <svg
                      className="group-hover:fill-red-600"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
