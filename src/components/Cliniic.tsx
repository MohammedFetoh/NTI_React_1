const Cliniic = () => {
  return (
    <section className="grid grid-cols-2">
      <div className="col-span-2 mt-20 mb-10">
        <h1 className="text-center text-[#255c61] text-4xl mb-8">
          School Cliniic
        </h1>
        <hr className="w-50 border-none h-1 bg-orange-500 m-auto" />
      </div>
      <div className="md:col-span-1 col-span-2 mb-4 md:mb-0 p-10">
        <img src="img/compo.png" alt="" className="w-full" />
      </div>
      <div className="md:col-span-1 col-span-2 flex flex-col justify-center ">
        <h2 className="text-[#58a28a] font-bold text-3xl mb-5">
          The School clinic services
        </h2>
        <p className="text-[#444]">
          Conducting periodic checks for students. Implementing vaccination
          programs to prevent diseases, according to the instructions of the
          Ministry of Health. Follow-up of sick cases and contact with parents
          to attend if the case requires. Providing a healthy environment in the
          school community.
        </p>
      </div>
    </section>
  );
};

export default Cliniic;
