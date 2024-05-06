function ResultTop() {
  return (
    <div className="w-full flex flex-row justify-between flex-wrap">
      <h3 className="font-bold text-xl">Conexões</h3>
      <div className="size-fit flex flex-row items-center gap-1">
        <div className=" h-5 w-5 bg-green-300" />
        <p>Start</p>
        <div className=" h-5 w-5 bg-red-300" />
        <p>Target</p>
      </div>
    </div>
  );
}

export default ResultTop;
