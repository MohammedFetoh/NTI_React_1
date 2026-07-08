const Footer = () => {
  return (
    <footer className="py-20 bg-[#58a28a] rounded-[50px_50px_0px_0px] grid grid-cols-2 gap-10">
      <div className="md:col-span-1 col-span-2">
        <h2 className="text-[30px] text-bold text-white text-center mb-4">
          Madrastty
        </h2>
        <p className="text-[18px]  text-white text-center ">
          The Best collection of international schools For All Student In All
          different Ages From six years to 15 years
        </p>
      </div>
      <div className="md:col-span-1 col-span-2 flex gap-4 justify-center">
        <ul className="text-white space-y-3">
          <li>
            <h3 className="text-[#f48e7f] text-xl">Student</h3>
          </li>
          <li>
            <span>Result</span>
          </li>
          <li>
            <span>Exams</span>
          </li>
          <li>
            <span>Quizes</span>
          </li>
          <li>
            <span>Courses</span>
          </li>
        </ul>
        <ul className="text-white space-y-3">
          <li>
            <h3 className="text-[#f48e7f] text-xl">News</h3>
          </li>
          <li>
            <span>uniform</span>
          </li>
          <li>
            <span>Chapion</span>
          </li>
          <li>
            <span>Tables</span>
          </li>
        </ul>
        <ul className="text-white space-y-3">
          <li>
            <h3 className="text-[#f48e7f] text-xl">Contact</h3>
          </li>
          <li>
            <span>20305060</span>
          </li>
          <li>
            <span>Or@Yahoo.com</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
