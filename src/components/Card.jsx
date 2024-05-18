import { NavLink } from "react-router-dom";

export default function Card({ data }) {
  return (
    <div className="card w-96 shadow-xl max-[776px]:mx-2.5 ">
      <figure className="px-10 pt-10">
        <img src={data.imgSrc1} alt="Parc" className="rounded-xl h-60" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-teal-600 font-bold ">{data.title}</h2>
        <p className="text-slate-950">{data.desc}</p>
        <div className="card-actions">
          <NavLink
            to={`/details/${data.id}`}
            className="btn btn-primary text-sky-100 bg-green-950 border-green-600 hover:bg-green-300 hover:border-green-950 hover:text-black hover:scale-125"
          >
            Détails
          </NavLink>
          <NavLink
            to={`/flowers/${data.id}`}
            className="btn btn-primary text-sky-100 bg-green-950 border-green-600 hover:bg-green-300 hover:border-green-950 hover:text-black hover:scale-125"
          >
            Flore
          </NavLink>
        </div>
      </div>
    </div>
  );
}
