import CategoryDescriptions from "@/components/CategoryDescriptions";
import Herosection from "@/components/Herosection";


export default function Home() {
  return (
    <div className="flex flex-col h-[80vh]">

      <main className="justify-center items-center w-[100vw] overflow-y-scroll no-scrollbar overflow-x-hidden">
        {/* Here we'll have a hero section and few cards soon */}

        <Herosection/>
        <div className="items-center justify-center mx-auto w-full min-h-[10vh] max-h-[15vh] md:h-[10vh] md:py-3 mt-10 md:mt-10 lg:mt-9">
            <h1 className="text-5xl font-extrabold mx-auto text-center">Find Artists By Genre</h1>
        </div>
        <CategoryDescriptions/>

      </main>

    </div>
  );
}
