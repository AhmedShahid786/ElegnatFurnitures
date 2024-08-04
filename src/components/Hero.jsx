import Button from "./Button";

function Hero() {
  return (
    <section className="body-font">
      <div className="container mx-auto flex px-5 pt-14 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-amber-700">
            Discover Our Latest Collection of
            <br className="hidden lg:inline-block" />
            Elegant Furniture
          </h1>
          <p className="mb-8 leading-relaxed text-black">
            Transform your living space with our exquisite range of furniture.
            From contemporary sofas to classic dining sets, we offer
            high-quality pieces that blend style and comfort. Visit us to find
            your perfect match.
          </p>
          <div className="flex justify-center">
            <Button text={"Shop Now"} border={"2"} />
            <Button text={"Learn More"} />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://images.pexels.com/photos/22696774/pexels-photo-22696774/free-photo-of-table-and-chairs-in-an-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
