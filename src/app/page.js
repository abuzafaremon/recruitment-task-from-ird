import MainBar from "./components/MainBar";
import SettingBar from "./components/SettingBar";

export default function Home() {
  return (
    <div className="max-2xl:container mx-auto">
      <div className="flex items-start">
        <MainBar />
        <div className="grow">a</div>
        <SettingBar />
      </div>
    </div>
  );
}
