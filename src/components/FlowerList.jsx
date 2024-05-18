import Flower from "./Flower";
import dataf from "../../dataf.json";

export default function FlowerList() {
  return (
    <div>
      <div className="bg-stone-300 flex flex-wrap justify-center pt-[75px] pb-[75px] gap-10">
        {dataf.flower.map((d) => (
          <Flower key={d.id} dataf={d} />
        ))}
      </div>
    </div>
  );
}
