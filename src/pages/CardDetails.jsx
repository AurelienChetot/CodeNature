import { useParams } from "react-router-dom";
import data from "../../data.json";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../styles/About.scss";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";

export default function CardDetails() {
  const { id } = useParams();
  const parc = data.data.find((parc) => parc.id === parseInt(id));

  if (!parc) {
    return <div>Parc non trouvé</div>;
  }

  return (
    <div className="bg-gradient-to-b from-slate-700 from-10% via-slate-800 via-40% to slate-900">
      <div className="  flex flex-col items-center">
        <h1
          className="text-3xl pt-8
      pb-5"
        >
          {parc.title}
        </h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000 }}
          className="w-full md:w-6/12"
        >
          <SwiperSlide className="sm:flex sm:items-center">
            {" "}
            <img
              src={parc.imgSrc1}
              className="w-auto  sm:w-full h-2/5 px-20 "
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={parc.imgSrc2} className="w-auto sm:w-full h-2/5 px-20" />
          </SwiperSlide>
        </Swiper>
        <div className="">
          <div className="max-w-containText">
            <p>{parc.creationDate}</p>
            <p>Supérficie: {parc.areaKm}</p>
            <p>{parc.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
