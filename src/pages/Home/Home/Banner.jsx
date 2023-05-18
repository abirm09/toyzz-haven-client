import heroToy from "../../../assets/home/banner/baby_girl_with_toy.svg";
const Banner = () => {
  return (
    <section className="cs-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-10 items-center">
        <div className="space-y-5">
          <h2 className="bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent text-2xl md:text-5xl font-montserrat font-semibold">
            Buy some awesome toys for your kids.
          </h2>
          <p className="text-sm md:text-base text-justify font-poppins text-slate-600">
            Discover a universe of action figures, where legendary heroes and
            fearsome villains come to life. From caped crusaders to mighty
            warriors, our selection features the greatest icons of heroism.
          </p>
          <button className="btn normal-case bg-gradient-to-r from-red-600 to-pink-500 border-none">
            View all toys
          </button>
        </div>
        <div>
          <img src={heroToy} alt="Babu_girl-with-toy" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
