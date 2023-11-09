import MainBar from "./components/MainBar";

export default function Home() {
  return (
    <div className="max-2xl:container mx-auto">
      <div className="flex">
        <MainBar />
        <div className="grow">a</div>
        <div className="w-full">a</div>
      </div>
    </div>
  );
}
