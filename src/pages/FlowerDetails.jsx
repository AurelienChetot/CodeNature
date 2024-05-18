import { useState } from "react";
import { useParams } from "react-router-dom";
import dataf from "../../dataf.json";
import "../styles/About.scss";
import Modal from "../components/Modal";

export default function FlowerDetails() {
  const { id } = useParams();
  const flower = dataf.flower.find((flower) => flower.id === parseInt(id));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState("");

  if (!flower) {
    return <div>Fleur non trouvée</div>;
  }

  const handleImageClick = (imgSrc) => {
    setModalImgSrc(imgSrc);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-stone-300">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl pt-8 pb-5 text-teal-600 font-black">
          {flower.title}
        </h1>

        <img
          src={flower.imgSrc1}
          className="w-auto sm:w-full lg:max-h-full lg:max-w-4xl h-2/5 px-20 cursor-pointer transition-transform duration-300 ease-in-out transform"
          onClick={() => handleImageClick(flower.imgSrc1)}
        />
        <p className="text-center mb-6 text-slate-950">
          Cliquez pour agrandir l'image
        </p>
        <div className="card-body items-center text-center px-px py-px ">
          <h2 className="card-title text-teal-600 font-black ">
            {flower.title}
          </h2>
          <p className="text-slate-950"> {flower.desc}</p>
          <div className="flex flex-col">
            <p className="text-teal-600 font-black ">Habitat :</p>
            <p className="text-slate-950">{flower.habitat}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-teal-600 font-black ">Hauteur :</p>
            <p className="text-slate-950">{flower.height}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-teal-600 font-black  ">Médical :</p>
            <p className="mb-[75px] text-slate-950">{flower.medical_use}</p>
          </div>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            imgSrc={modalImgSrc}
          />
        </div>
      </div>
    </div>
  );
}
