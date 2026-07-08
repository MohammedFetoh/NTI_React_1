const Services = () => {
  return (
    <section className="grid grid-cols-4 services bg-cover gap-2 py-20 mt-10 md:bg-repeat px-20">
      <h1 className="col-span-4  text-center  text-4xl mb-8 md:text-white text-[#255c61]">
        Don't Hestegate to be in Touch
      </h1>
      <div className="md:col-span-2 lg:col-span-1 bg-white flex flex-col gap-2 rounded-md p-3 col-span-4">
        <img src="./img/s1.png" alt="" />
        <h3 className="text-[#255c61] font-bold text-xl">First Aid</h3>
        <p className="text-lg ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi id
          tenetur nobis saepe error velit, veritatis fugit consequuntur qui
          laudantium.
        </p>
      </div>
      <div className="md:col-span-2 lg:col-span-1 bg-white flex flex-col gap-2 rounded-md p-3 col-span-4">
        <img src="./img/s2.png" alt="" />
        <h3 className="text-[#255c61] font-bold text-xl">First Aid</h3>
        <p className="text-lg ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi id
          tenetur nobis saepe error velit, veritatis fugit consequuntur qui
          laudantium.
        </p>
      </div>
      <div className="md:col-span-2 lg:col-span-1 bg-white flex flex-col gap-2 rounded-md p-3 col-span-4">
        <img src="./img/s3.png" alt="" />
        <h3 className="text-[#255c61] font-bold text-xl">First Aid</h3>
        <p className="text-lg ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi id
          tenetur nobis saepe error velit, veritatis fugit consequuntur qui
          laudantium.
        </p>
      </div>
      <div className="md:col-span-2 lg:col-span-1 col-span-4 bg-white flex flex-col gap-2 rounded-md p-3 ">
        <img src="./img/s4.png" alt="" />
        <h3 className="text-[#255c61] font-bold text-xl">First Aid</h3>
        <p className="text-lg ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi id
          tenetur nobis saepe error velit, veritatis fugit consequuntur qui
          laudantium.
        </p>
      </div>
    </section>
  );
};

export default Services;
