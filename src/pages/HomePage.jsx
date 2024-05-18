import IMG from "../assets/imgfrance-parc.jpg";
export default function HomePage() {
  return (
    <div className="bg-stone-300 pt-[75px] pb-[75px]">
      <h1 className="text-center my-10 text-3xl text-teal-800">
        Les Parcs Nationaux de France
      </h1>
      <p className="px-10 lg:px-40 xl:px-96 text-stone-950">
        Bienvenue sur notre site dédié aux parcs nationaux de France ! Plongez
        au cœur de la nature sauvage et préservée de nos régions, découvrez des
        paysages à couper le souffle et une flore exceptionnelles, et
        laissez-vous inspirer par la beauté naturelle de nos parcs nationaux.
        Que vous soyez passionné de randonnée, de photographie, ou simplement en
        quête de tranquillité, nos ressources vous aideront à planifier votre
        prochaine aventure au sein des trésors naturels de la France. Explorez,
        respectez et protégez nos parcs nationaux pour les générations futures.
      </p>
      <div className="flex justify-center mt-16 mx-10 mb-[75px]">
        <img
          className="lg:max-w-3xl rounded-xl sm:max-w-sm"
          src={IMG}
          alt="Tout les parcs"
        />
      </div>
    </div>
  );
}
