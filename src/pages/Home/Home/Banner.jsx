import heroToy from "../../../assets/home/banner/baby_girl_with_toy.svg";
const Banner = () => {
  return (
    <section className="cs-container" data-aos="zoom-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-10 items-center">
        <div className="space-y-5">
          <h2 className="cs-text-gradient text-2xl md:text-5xl font-semibold font-bubblegum">
            Buy some awesome toys for your kids.
          </h2>
          <p className="text-sm md:text-base text-justify font-poppins text-slate-600">
            Discover a universe of action figures, where legendary heroes and
            fearsome villains come to life. From caped crusaders to mighty
            warriors, our selection features the greatest icons of heroism.
          </p>
          <button className="cs-btn-primary">View all Toys</button>
        </div>
        <div>
          <img src={heroToy} alt="Babu_girl-with-toy" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
