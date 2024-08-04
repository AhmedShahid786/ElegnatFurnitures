import Button from "./Button";
import NavLink from "./NavLink";
function Header(){
    return (
      <header className="body-font border-b-2 border-amber-700">
        <div className="container m-0 flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
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
            <span className="ml-3 font-sans text-2xl md:text-3xl text-amber-700">
              Elegant Interiors
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink text={"Sofas"} />
            <NavLink text={"Beds"} />
            <NavLink text={"Tables"} />
            <NavLink text={"Chairs"} />
          </nav>
          <Button
            text={"Contact Us"}
            border={"2"}
            textSize={"duration-500 hover:text-lg"}
          />
        </div>
      </header>
    );
}

export default Header