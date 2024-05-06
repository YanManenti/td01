function MovieRender({ item }: any) {
  function handleColorChange(actor: string) {
    if (actor === item.from.name) return "bg-green-300";
    if (actor === item.to.name) return "bg-red-300";
    if (actor === item.starting) return "bg-violet-200";
    if (actor === item.target) return "bg-violet-200";
    return "bg-slate-400";
  }
  return (
    <div className="w-full flex flex-col bg-gray-200 rounded-lg p-2 gap-2">
      <h3 className="font-bold text-sm">{item.movie.title}</h3>
      <div className="w-full h-full flex flex-wrap gap-1">
        {item.movie.cast.map((actor: any) => {
          return (
            <div
              key={actor}
              className={` w-fit h-fit rounded-lg p-2 ${handleColorChange(
                actor
              )}`}
            >
              <p className="font-bold text-xs text-white">{actor}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieRender;
