import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <section className="mt-20">
      <div className="cs-container ">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-cyan-50 rounded-lg">
          <div className="p-4 relative">
            <div>
              <h2 className="section-title pt-20" style={{ fontSize: "45px" }}>
                Deals of the day
              </h2>
              <h2 className="text-center font-montserrat font-semibold">
                <span className="cs-text-gradient">45%</span> off <br /> on each
                purchase.
              </h2>
              <div className="flex justify-center mt-5">
                <Link to="/allToys" className="cs-btn-primary">
                  Bye now
                </Link>
              </div>
            </div>
            <div className="absolute max-w-[100px] bottom-0 right-0 translate-x-2/4  hidden md:block w-full">
              <img
                src="https://i.ibb.co/6g8BxKj/tady-removebg-preview.png"
                alt="tads"
                className="w-full"
              />
            </div>
          </div>
          <div>
            <img
              src="https://i.ibb.co/pQFSVjg/baby-playing.jpg"
              alt="Baby playing"
              className="rounded-b-lg md:rounded-r-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
