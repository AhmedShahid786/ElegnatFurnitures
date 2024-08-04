import NavLink from "./NavLink";

const footerData = [
  {
    category: "Furniture Types",
    link1: "Living Room",
    link2: "Bedroom",
    link3: "Office",
    link4: "Outdoor",
  },
  {
    category: "Materials",
    link1: "Wood",
    link2: "Metal",
    link3: "Upholstery",
    link4: "Leather",
  },
  {
    category: "Styles",
    link1: "Modern",
    link2: "Classic",
    link3: "Scandinavian",
    link4: "Vintage",
  },
  {
    category: "Services",
    link1: "Interior Design Consultation",
    link2: "Custom Furniture",
    link3: "Delivery & Installation",
    link4: "Warranty & Support",
  },
];

function Footer(){
    return (
      <footer className="text-amber-700 body-font">
        <div className="container m-0 px-5 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-amber-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#b45309"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-16 h-12 text-white p-2 bg-transparent rounded-full"
                viewBox="0 0 640 512"
              >
                <path d="M64 160C64 89.3 121.3 32 192 32l256 0c70.7 0 128 57.3 128 128l0 33.6c-36.5 7.4-64 39.7-64 78.4l0 48-384 0 0-48c0-38.7-27.5-71-64-78.4L64 160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48l0 176c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32L96 448c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32L0 272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3l0 48 0 32 32 0 384 0 32 0 0-32 0-48z" />
              </svg>
              <span className="ml-3 text-xl">Elegant Interiors</span>
            </a>
            <p className="mt-2 ml-2 text-sm text-black">
              Discover luxury and comfort with our exquisite furniture
              collection.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            {
                footerData.map((data,ind)=>{
                    return (
                      <div key={ind} className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="little-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                          {data.category}
                        </h2>
                        <nav className="list-none mb-10">
                          <li>
                            <NavLink text={`${data.link1}`} />
                          </li>
                          <li>
                            <NavLink text={`${data.link2}`} />
                          </li>
                          <li>
                            <NavLink text={`${data.link3}`} />
                          </li>
                          <li>
                            <NavLink text={`${data.link4}`} />
                          </li>
                        </nav>
                      </div>
                    );
                })
            }
          </div>
        </div>
      </footer>
    );
}

export default Footer