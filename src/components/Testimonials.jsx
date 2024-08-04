function Testimonials(){
    const reviews = [
      {
        img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
        opinion:
          "Elegant Interiors transformed our living room into a modern sanctuary. The quality of their furniture is unmatched, and the attention to detail is incredible.",
        name: "Salman Atiq",
        role: "Interior Design Enthusiast",
      },
      {
        img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600",
        opinion:
          "I was impressed by the diverse collection at Elegant Interiors. They have pieces that cater to both contemporary and classic tastes.",
        name: "Saad Ahmed",
        role: "Architect",
      },
      {
        img: "https://images.pexels.com/photos/1752126/pexels-photo-1752126.jpeg?auto=compress&cs=tinysrgb&w=600",
        opinion:
          "The service at Elegant Interiors was outstanding. The staff was knowledgeable and helped me find exactly what I needed for my new office space.",
        name: "Abbas Salim",
        role: "Business Owner",
      },
    ];

    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
              {
                reviews.map((data,ind)=>{
                    return (
                      <div
                        className="lg:w-1/3 lg:mb-0 mb-6 p-4 cursor-pointer duration-500 hover:-translate-y-1"
                        key={ind}
                      >
                        <div className="h-full text-black text-center">
                          <img
                            alt="testimonial"
                            className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-amber-700"
                            src={data.img}
                          />
                          <p className="leading-relaxed">"{data.opinion}"</p>
                          <span className="inline-block h-1 w-10 rounded bg-amber-700 mt-6 mb-4" />
                          <h2 className="text-amber-700 font-medium title-font tracking-wider text-sm">
                            {data.name}
                          </h2>
                          <p className="text-black">{data.role}</p>
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

export default Testimonials