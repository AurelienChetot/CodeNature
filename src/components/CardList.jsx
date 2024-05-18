import Card from "./Card";
import data from "../../data.json";

export default function CardList() {
  return (
    <div className="flex flex-wrap justify-center pt-[75px] pb-[75px] gap-10 bg-stone-300">
      {data.data.map((d) => (
        <Card key={d.id} data={d} />
      ))}
    </div>
  );
}
