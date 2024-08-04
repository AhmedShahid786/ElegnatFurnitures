const statsData = [
  {
    stat: "Happy Clients",
    value: "1100",
  },
  {
    stat: "Projects Completed",
    value: "149",
  },
  {
    stat: "Showroom Visits Daily",
    value: "200+",
  },
  {
    stat: "Premium Products",
    value: "30",
  },
];

function Stats(){
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 pt-0 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
          {
            statsData.map((data,ind)=>{
                return (
                  <div className="p-4 sm:w-1/4 w-1/2  duration-500 hover:-translate-y-2">
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-amber-700">
                      {data.value}
                    </h2>
                    <p className="leading-relaxed text-black">{data.stat}</p>
                  </div>
                );
            })
          }
          </div>
        </div>
      </section>
    );
}

export default Stats