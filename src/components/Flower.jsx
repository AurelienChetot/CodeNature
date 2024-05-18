import { NavLink } from "react-router-dom";

export default function Flowers({ dataf }) {
  return (
    <div className="card w-96 shadow-xl bg-green-800 bg-opacity-40 border-4 border-green-800 hover:border-green-300 text-sky-100 max-[776px]:mx-2.5">
      <figure className="px-10 pt-10">
        <img src={dataf.imgSrc1} alt="Flower" className="rounded-xl h-60" />
      </figure>
      <div className="card-body items-center text-center px-px py-px ">
        <h2 className="card-title text-teal-600 font-black ">{dataf.title}</h2>
        <p className="text-slate-950">{dataf.desc}</p>
        <div className="flex flex-col">
          <p className="text-teal-600 font-black underline">Habitat :</p>
          <p className="text-slate-950">{dataf.habitat}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-teal-600 font-black underline">Hauteur :</p>
          <p className="text-slate-950"> {dataf.height}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-teal-600 font-black underline">Médical :</p>
          <p className="text-slate-950">{dataf.medical_use}</p>
        </div>
      </div>
    </div>
  );
}
