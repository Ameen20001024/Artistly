"use client"
import Link from "next/link"
import { Button } from "./ui/button"

const Herosection = () => {
  return (
    <div className='w-full md:w-[85vw] lg:w-[70vw] h-[80vh] justify-center mx-auto relative items-center overflow-hidden px-5 py-[5vh] border-b-2'>
        <div className='flex flex-col gap-10 mx-auto md:my-13 lg:my-5 lg:min-h-110 px-4 py-9 md:py-16 text-center justify-center items-center border-2'>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">Book Performing Artists, Effortlessly!</h1>
            <p className="w-full md:w-[60vw] justify-center items-center font-normal text-xl lg:text-lg">Discover talented singers, dancers, speakers, and entertainers for your next event — all in one place. Artistly connects event planners with verified artists, making booking seamless, fast, and reliable.</p>
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
                <Button variant='destructive' size='lg'>

                    <Link href='/artists' className="font-extrabold px-5">
                        Explore Artists
                    </Link>

                </Button>

                <Button variant='destructive' size='lg'>
                    
                    <Link href='/onboard' className="font-extrabold md:p-3">
                        Onboard as an Artist
                    </Link>

                </Button>
                
            </div>
        </div>

    </div>
  )
}

export default Herosection
