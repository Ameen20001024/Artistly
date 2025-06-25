import CategoryDescriptions from "@/components/CategoryDescriptions";
import Herosection from "@/components/Herosection";


export default function Home() {
  return (
    <div className="flex flex-col h-[80vh]">

      <main className="justify-center items-center overflow-scroll no-scrollbar">
        {/* Here we'll have a hero section and few cards soon */}

        <Herosection/>
        <div className="items-center justify-center py-3 w-full h-[10vh]">
          <h1 className="text-4xl font-extrabold mx-auto text-center">Find Artists By Genre</h1>
        </div>
        <CategoryDescriptions/>

      </main>

    </div>
  );
}
