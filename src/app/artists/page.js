"use client"

import Link from "next/link"
import { useArtistArrayContext } from "@/components/contexts/ArtistsArraycontext"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"


const Page = () => {

    const { artistListArray } = useArtistArrayContext()
    const [filteredArtists, setFilteredArtists] = useState([])
    const [filter, setFilter] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedLanguage, setSelectedLanguage] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedFeeRange, setSelectedFeeRange] = useState("")

    const filteredArtistssearch = () => {

        const filtered = artistListArray.filter((artist) => {
            const matchesSearch =
                artist.fullname.toLowerCase().includes(searchQuery.toLowerCase()) ||
                artist.location.toLowerCase().includes(searchQuery.toLowerCase())
    
            const matchesCategory =
                selectedCategory === "" || artist.categories.includes(selectedCategory)
    
            const matchesLanguage =
                selectedLanguage === "" || artist.languages.includes(selectedLanguage)
    
            const matchesFee =
                selectedFeeRange === ""|| artist.feeRange === selectedFeeRange
    
            return matchesSearch && matchesCategory && matchesLanguage && matchesFee
            })

        setFilteredArtists(filtered)
        setFilter(true)

        // return {filteredArtists, filter}

    }
    
    const clearfilters = () => {
        setFilter(false)
        setSearchQuery("")
        setSelectedCategory("")
        setSelectedLanguage("")
        setSelectedFeeRange("")
    }


    const mapper = (array) =>{
        
        return array.map((artist, index)=> {

            return <div key={index} className="md:max-w-[65vw] md:mx-auto md:px-5">

                <Card className="hover:shadow-lg transition-shadow duration-200 mb-8">
                    <CardHeader>
                        <CardTitle>{artist.fullname}</CardTitle>
                        <CardDescription>
                            <p className="text-sm text-gray-300 mb-2">{artist.location}</p>
                            <p className="mb-1"><span className="font-semibold">Categories:</span> {artist.categories.join(", ")}</p>
                            <p className="mb-1"><span className="font-semibold">Languages:</span> {artist.languages.join(", ")}</p>
                            <p className="mb-1"><span className="font-semibold">Fee Range:</span> {artist.feeRange}</p>
                        </CardDescription>
                        <CardAction>
                            <Button asChild variant='destructive' size='lg'>
                                <Link href='/quotation-request' className="font-bold"> Ask for Quotation </Link>
                            </Button>
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <p className=" w-full max-h-[8vh] overflow-scroll no-scrollbar">{artist.bio}</p>
                    </CardContent>
                    <CardFooter>
                        <p>For more details, Email at {artist.email}</p>
                    </CardFooter>
                </Card>
            </div>
            })
        }      



    return (
        <div className='h-[80vh] overflow-y-scroll no-scrollbar w-full overflow-x-hidden mx-auto p-0 md:px-10 md:py-6 justify-center items-center'>
        {/* we will have list of artists here soon */}

        <div className="max-w-full overflow-x-hidden">

            <h1 className="text-3xl lg:text-5xl font-bold mb-2 md:mb-6 mt-6 md:mt-0  text-center">Our Featured Artists</h1>

            <div className="flex flex-col w-full mx-auto md:p-5 justify-center items-center">

                {artistListArray.length === 0 && <p className="col-span-full text-center text-gray-400">No artists found.</p> }
                {artistListArray.length !== 0 && <div className="mb-6 space-y-4 lg:space-y-10">

                        <div className="flex flex-col gap-6 md:gap-10 max-w-[100vw] justify-center items-center mx-auto px-2 md:px-10 pt-5 pb-0 md:py-5 lg:py-0">
                            <input
                                type="text"
                                placeholder="Search by name or location..."
                                className="w-[90vw] md:w-full border-1 px-4 py-2 rounded-md"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />

                            <div className="flex gap-5">
                                <select className="w-[27vw] lg:w-[30vw] border bg-slate-950 px-4 py-2 rounded-md" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                                    <option value="">Categories - All</option>
                                    <option value="Singer">Singer</option>
                                    <option value="Dancer">Dancer</option>
                                    <option value="Speaker">Speaker</option>
                                    <option value="DJ">DJ</option>
                                </select>

                                <select
                                className="w-[27vw] lg:w-[30vw] border bg-slate-950 px-4 py-2 rounded-md" value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
                                    <option value="">Languages - All</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="English">English</option>
                                    <option value="Tamil">Tamil</option>
                                    <option value="Malayalam">Malayalam</option>
                                    <option value="Bengali">Bengali</option>
                                </select>

                                <select className="w-[27vw] lg:w-[30vw] border bg-slate-950 px-4 py-2 rounded-md" value={selectedFeeRange} onChange={(e) => setSelectedFeeRange(e.target.value)}>
                                    <option value="">Fee Ranges - All</option>
                                    <option value="Upto ₹4,000">Less than ₹4,000</option>
                                    <option value="₹4,000 - ₹8,000">Between ₹4,000 and ₹8,000</option>
                                    <option value=">₹8,000 or above">More than ₹8,000</option>
                                </select>
                            </div>
                            <div className="flex gap-10 justify-center items-center mx-auto pb-4 pt-2 md:py-4 lg:py-0 px-10 w-full">
                                <Button variant='destructive' size='lg' onClick={filteredArtistssearch}>Apply Filters</Button>
                                <Button variant='destructive' size='lg' onClick={clearfilters}>Clear Filters</Button>

                            </div>
                        </div>
                    
                        {!filter && mapper(artistListArray)}

                        {filter && filteredArtists.length === 0 && (
                            <p className="col-span-full text-center text-red-500">No matching artists found.</p>
                        )}


                        {filter && filteredArtists.length !== 0 && mapper(filteredArtists)}

                    </div>
                }           
            </div>

        </div>

        </div>
    )
}

export default Page
