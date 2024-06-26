import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/About.scss";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Modal from "../components/Modal";

export default function CardDetails() {
  const { id } = useParams();
  const parc = data.data.find((parc) => parc.id === parseInt(id));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState("");

  if (!parc) {
    return <div>Parc non trouvé</div>;
  }

  const handleImageClick = (imgSrc) => {
    setModalImgSrc(imgSrc);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-stone-300">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl pt-8 pb-5 text-teal-600 font-black">
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
            <img
              src={parc.imgSrc1}
              className="w-auto sm:w-full h-2/5 px-20 cursor-pointer transition-transform duration-300 ease-in-out transform"
              onClick={() => handleImageClick(parc.imgSrc1)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={parc.imgSrc2}
              className="w-auto sm:w-full h-2/5 px-20 cursor-pointer transition-transform duration-300 ease-in-out transform"
              onClick={() => handleImageClick(parc.imgSrc2)}
            />
          </SwiperSlide>
        </Swiper>
        <div className="">
          <div className="max-w-containText">
            <p className="text-center mb-6 text-slate-950">
              Cliquez pour agrandir l'image
            </p>
            <p className="text-slate-950">{parc.creationDate}</p>
            <p className="text-slate-950">Supérficie: {parc.areaKm}</p>
            <p className="pb-28 text-slate-950">{parc.desc}</p>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imgSrc={modalImgSrc}
      />
    </div>
  );
}
