import products from "../constants/products.js"

function Products(){
    return (
      <section className="body-font">
        <div className="container px-5 pt-16 mx-auto">
          <div className="flex flex-wrap -m-4">
          {
            products.map((data, ind)=>{
                return (
                  <div
                    key={ind}
                    className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer duration-500 hover:-translate-y-2"
                  >
                    <a className="block relative h-48 rounded overflow-hidden border-2 border-amber-700">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={data.img}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-black text-xs tracking-widest title-font mb-1">
                        {data.category}
                      </h3>
                      <h2 className="text-amber-700 title-font text-lg font-medium">
                        {data.title}
                      </h2>
                      <p className="mt-1 text-black">${data.price}</p>
                    </div>
                  </div>
                );
            })
          }
          </div>
        </div>
      </section>
    );
}

export default Products