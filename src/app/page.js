import Content from "./components/Content";
import MainBar from "./components/MainBar";
import SettingBar from "./components/SettingBar";

export default function Home() {
  return (
    <div className="max-2xl:container mx-auto">
      <div className="flex items-start gap-4">
        <MainBar />
        <Content />
        <SettingBar />
      </div>
    </div>
  );
}
