import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useEffect, useState } from "react";
const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  useEffect(() => {
    fetch("/gallery-data.json")
      .then(res => res.json())
      .then(data => setGalleryData(data));
  }, []);
  console.log(galleryData);
  return (
    <section className="bg-slate-800 py-20">
      <div className="cs-container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-sub-title text-white">Our top selling toys.</p>
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {galleryData.map(img => (
              <SwiperSlide key={img.index}>
                <div className="max-w-xs rounded-lg overflow-hidden relative">
                  <img src={img.picture} alt={img.name} />
                  <div className="group absolute bg-slate-800 w-full h-full top-0 left-0 bg-opacity-0 hover:bg-opacity-30 transition-all">
                    <h2 className="absolute bottom-10 font-bold text-3xl left-2 scale-0 group-hover:scale-100 transition-all">
                      {img.name}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
