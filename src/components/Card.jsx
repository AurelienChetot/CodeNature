

export default function CardDetails ({data}) {
    return (
       
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{data.title}</h2>
    <p>{data.desc}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Détails</button>
    </div>
  </div>
</div>
        
    )
}