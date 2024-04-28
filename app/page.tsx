import ComponentBackground from "@/components/ComponentBackground";
import SearchComponent from "@/components/SearchComponent";

export default function Home() {
  return (
    <section className="flex flex-col items-start gap-4 w-full h-full">
      <h1 className="font-bold text-white text-4xl">HELLO WORLD</h1>
      <div className="flex w-full h-full gap-4">
        <ComponentBackground>
          <SearchComponent />
        </ComponentBackground>
        <ComponentBackground>
          <p className="text-black">This is a test 2</p>
        </ComponentBackground>
      </div>
    </section>
  );
}
