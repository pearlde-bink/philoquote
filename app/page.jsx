import Footer from "../app/component/Footer";
import Header from "../app/component/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-auto pt-4 flex-col flex items-center justify-start bg-black text-white">
        {/* Search form */}
        <form className="max-w-sm mx-auto border-2 rounded-lg">
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
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        <div className="container w-full max-w-xl space-y-4 mt-6 h-full">
          <div class="gap-5 columns-4 margin-top-10">
            <div className="quote border-2 border-sky-500 p-4 bg-white rounded shadow text-center text-lg font-semibold text-gray-700">
              "The unexamined life is not worth living." - Socrates
            </div>
            <div className="quote  border-2 border-sky-500 p-4 bg-white rounded shadow text-center text-lg font-semibold text-gray-700">
              "To be is to be perceived.The unexamined life is not worth
              livingThe unexamined life is not worth livingThe unexamined life
              is not worth living" - George Berkeley
            </div>
            <div className="quote  border-2 border-sky-500 p-4 bg-white rounded shadow text-center text-lg font-semibold text-gray-700">
              "I think, therefore I am." - René Descartes
            </div>
            <div className="quote  border-2 border-sky-500 p-4 bg-white rounded shadow text-center text-lg font-semibold text-gray-700">
              "The unexamined life is not worth living.The unexamined life is
              not worth living" - Socrates
            </div>
            <div className="quote  border-2 border-sky-500 p-4 bg-white rounded shadow text-center text-lg font-semibold text-gray-700">
              "To be is to be perceived.The unexamined life is not worth" -
              George Berkeley
            </div>
            <div className="quote  border-2 border-sky-500 p-4 bg-white rounded shadow text-center text-lg font-semibold text-gray-700">
              "I think, therefore I am." - René Descartes
            </div>
            <div className="quote  border-2 border-sky-500 p-4 bg-white rounded shadow text-center text-lg font-semibold text-gray-700">
              "The unexamined life is not worth living." - Socrates
            </div>
            <div className="quote  border-2 border-sky-500 p-4 bg-white rounded shadow text-center text-lg font-semibold text-gray-700">
              "To be is to be perceived.The unexamined life is not worth living"
              - George Berkeley
            </div>
            <div className="quote  border-2 border-sky-500 p-4 bg-white rounded shadow text-center text-lg font-semibold text-gray-700">
              "I think, therefore I am." - René Descartes
            </div>
            <div className="quote  border-2 border-sky-500 p-4 bg-white rounded shadow text-center text-lg font-semibold text-gray-700">
              "The unexamined life is not worth living.The unexamined life is
              not worth living" - Socrates
            </div>
            <div className="quote  border-2 border-sky-500 p-4 bg-white rounded shadow text-center text-lg font-semibold text-gray-700">
              "To be is to be perceived." - George Berkeley
            </div>
            <div className="quote  border-2 border-sky-500 p-4 bg-white rounded shadow text-center text-lg font-semibold text-gray-700">
              "I think, therefore I am.The unexamined life is not worth
              livingThe unexamined life is not worth livingThe unexamined life
              is not worth livingThe unexamined life is not worth living" - René
              Descartes
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
