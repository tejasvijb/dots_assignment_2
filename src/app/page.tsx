import SearchBox from "./components/search-box";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 max-md:p-2">

      <div className="w-full">
        <SearchBox />
      </div>
    </div>
  );
}
