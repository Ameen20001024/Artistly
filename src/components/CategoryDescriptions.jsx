'use client'
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const CategoryDescriptions = () => {
  return (
    <div className="mx-auto mt-10 mb-10 md:my-0 lg:mb-11 lg:mt-0 w-[80vw] md:w-[75vw] lg:w-250 lg:max-w-[75vw] h-[55vh] md:h-[66vh] lg:h-[60vh] justify-center items-center md:py-[5vh] px-5">
      
        <Carousel
        //  className='flex justify-center items-center'
        >

            <CarouselContent className='flex gap-8 mt-1 lg:gap-5 pl-5 pr-1 md:px-5 w-[75vw] md:w-[70vw] lg:w-[71vw] h-[50vh] -ml-4 lg:-ml-2'>
                <CarouselItem className='basis-full md:basis-1/2 lg:basis-1/3 h-[50vh] pl-4 lg:pl-2 border-2 items-center justify-center flex flex-col gap-2'>
                    <div className="md:py-5 pr-5 text-center items-center justify-center flex flex-col gap-6 md:gap-4">
                        <h2 className="font-bold text-5xl md:text-xl pb-1">Singers</h2>
                        <h3 className="text-lg md:text-md">Captivate your audience with powerful vocals and unforgettable performances</h3>
                        <p>From soulful soloists and Bollywood playback talents to live bands and multilingual vocalists, our curated selection of singers brings passion and energy to any stage — weddings, festivals, corporate galas, or intimate gatherings. Discover the perfect voice for your event.</p>
                    </div>
                </CarouselItem>

                <CarouselItem className='basis-full md:basis-1/2 lg:basis-1/3 h-[50vh] pl-4 lg:pl-2 border-2 items-center justify-center flex flex-col gap-2'>

                    <div className="md:py-5 pr-5 text-center items-center justify-center flex flex-col gap-6 md:gap-4">

                        <h2 className="font-bold text-5xl md:text-xl pb-1">Dancers</h2>
                        <h3 className="text-lg md:text-md">Add elegance, energy, and excitement through expressive movement.</h3>
                        <p>Explore a diverse range of professional dancers — from classical Bharatanatyam and Kathak to electrifying hip-hop, fusion, and Bollywood performances. Whether it's a cultural showcase or a high-octane celebration, elevate your event with captivating choreography.</p>

                    </div>
                </CarouselItem>

            {/* </CarouselContent> */}

                <CarouselItem className='basis-full md:basis-1/2 lg:basis-1/3 h-[50vh] pl-4 lg:pl-2 border-2 items-center justify-center flex flex-col gap-2'>

                    <div className="md:py-5 pr-5 text-center items-center justify-center flex flex-col gap-6 md:gap-4">
                        <h2 className="font-bold text-5xl md:text-xl pb-1">DJs</h2>
                        <h3 className="text-lg md:text-md">Keep the vibe alive with high-energy sets and seamless mixing</h3>
                        <p>Hire top-tier DJs who specialize in weddings, club nights, private parties, and corporate events. From EDM and Bollywood to chill lounge and retro hits, our DJs curate the perfect soundtrack to keep your guests dancing till the last beat drops.</p>
                    </div>

                </CarouselItem>

                <CarouselItem className='basis-full md:basis-1/2 lg:basis-1/3 h-[50vh] pl-4 lg:pl-2 border-2 items-center justify-center flex flex-col gap-2'>
                    <div className="md:py-5 pr-5 text-center items-center justify-center flex flex-col gap-6 md:gap-4">
                        <h2 className="font-bold text-5xl md:text-xl pb-1">Speakers</h2>
                        <h3 className="text-lg md:text-md">Inspire your audience with meaningful words and memorable messages.</h3>
                        <p>Connect with keynote speakers, industry leaders, motivational coaches, emcees, and storytellers who bring insight, charisma, and presence to your stage. Perfect for conferences, seminars, and ceremonies that demand impact and authenticity.</p>
                    </div>
                </CarouselItem>

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    </div>
  )
}

export default CategoryDescriptions

                

                
