import { useState } from "react";




function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="text-xl text-gray-400 grid md:grid-cols-3">
      <div className="md:col-span-1 flex justify-end">
        <nav className="text-right">
          <div className="flex justify-between">
            <h1 className="px-4 font-body">
              <a href="/">
                <span className="hover:bg-yellow-100 transition ease-in duration-500 ">Tailwind_learning</span>
              </a>
            </h1>
            <div className="px-4 cursor-pointer md:hidden" onClick={handleMenuToggle} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>


            </div>
          </div>

          <ul  className={`text-sm mt-6 md:block ${isMenuVisible ? '' : 'hidden'}`} >
            <li className="py-1" >
              <a href="/" className="border-r-4  border-red-600 pe-2">
                <span>Home</span>
              </a>
            </li>

            <li className="py-1">
              <a href="/">
                <span>About</span>
              </a>
            </li>

            <li className="py-1">
              <a href="/">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <main className="bg-gray-100 md:col-span-2">
        <div className="mx-8 border-b flex justify-end">
          <a href="/">Login</a>
          <a href="/">signup</a>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-red-600 h-4 w-6"></div>
          <div className="bg-yellow-600 h-6 w-6"></div>
          <div className="bg-blue-600 h-8 w-6"></div>
        </div>
        <div className="hover:scale-90  h-32 w-32 bg-sky-600 sm:bg-green-400 md:bg-yellow-400 lg:bg-slate-900"></div>
        <header className="ml-8">
          <h2 className="font-bold text-6xl">Recipes</h2>
          <h3>for Ninjas</h3>
        </header>
        <div className="ml-8 ">
          <h4 className="font-bold">latest Recipes</h4>
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1">
            <div className="card ">
              <img src="images/images.jpg" alt="" className="w-full object-cover h-32" />
              <div>
                <span className="font-bold">5 Bean chilly stew</span>
                <span >Recipe by Pranav</span>
              </div>
              <div className="badge">
                <span>25 mins</span>
              </div>
            </div>

            <div className="card ">
              <img src="images/images (2).jpg" alt="" className="w-full object-cover h-32" />
              <div>
                <span className="font-bold">5 Bean chilly stew</span>
                <span >Recipe by Pranav</span>
              </div>
              <div className="badge">
                <span>25 mins</span>
              </div>
            </div>

            <div className="card">
              <img src="Images/images (1).jpg" alt="" className="w-full object-cover h-32" />
              <div>
                <span className="font-bold">5 Bean chilly stew</span>
                <span >Recipe by Pranav</span>
              </div>
              <div className="badge">
                <span>25 mins</span>
              </div>
              <a href="/" className="btn bg-red-300 text-yellow-300">hello</a>
            </div>

          </div>


          <h4 className="font-bold"> Most popular Recipes</h4>
          <div>

          </div>

          <div>
            <div>Load more</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;


