"use client"
import Link from "next/link"
import { Button } from "./ui/button"

const Herosection = () => {
  return (
    <div className='w-[70vw] h-[80vh] justify-center flex flex-col mx-auto relative items-center overflow-hidden'>
        <div className='flex flex-col gap-10 mx-auto p-4 text-center relative justify-center items-center '>

            <h1 className="text-6xl font-extrabold">Book Performing Artists, Effortlessly!</h1>
            <p className="w-[60vw] justify-center items-center font-normal text-lg">Discover talented singers, dancers, speakers, and entertainers for your next event — all in one place. Artistly connects event planners with verified artists, making booking seamless, fast, and reliable.</p>
            <div className="flex gap-10 justify-center items-center">
                <Button variant='destructive' size='lg'>

                    <Link href='/artists' className="font-extrabold">
                        Explore Artists
                    </Link>

                </Button>

                <Button variant='destructive' size='lg'>
                    
                    <Link href='/onboard' className="font-extrabold">
                        Onboard as an Artist
                    </Link>

                </Button>
                
            </div>
        </div>

    </div>
  )
}

export default Herosection
