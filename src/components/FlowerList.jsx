import Flower from "./Flower";
import dataf from "../../dataf.json";

export default function FlowerList() {
  return (
    <div>
      <div className="flex flex-wrap justify-center mt-[75px] mb-[75px] gap-10">
        {dataf.flower.map((d) => (
          <Flower key={d.id} dataf={d} />
        ))}
      </div>
    </div>
  );
}
