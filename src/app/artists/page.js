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

            return <div key={index}>

                <Card className="hover:shadow-lg transition-shadow duration-200">
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
        <div className='h-[80vh] overflow-scroll no-scrollbar w-full mx-auto px-10 py-6 justify-center items-center'>
        {/* we will have list of artists here soon */}

        <div>

            <h1 className="text-3xl font-bold mb-6 text-center">Our Featured Artists</h1>

            <div className="flex flex-col w-full mx-auto p-5 justify-center items-center">

                {artistListArray.length === 0 && <p className="col-span-full text-center text-gray-400">No artists found.</p> }
                {artistListArray.length !== 0 && <div className="mb-6 space-y-4">

                        <div className="flex flex-col gap-10 justify-center items-center mx-auto px-10 py-5">
                            <input
                                type="text"
                                placeholder="Search by name or location..."
                                className="w-full border px-4 py-2 rounded-md"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <select className="w-full border px-4 py-2 rounded-md" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                                    <option value="">All Categories</option>
                                    <option value="Singer">Singer</option>
                                    <option value="Dancer">Dancer</option>
                                    <option value="Speaker">Speaker</option>
                                    <option value="DJ">DJ</option>
                                </select>

                                <select
                                className="w-full border px-4 py-2 rounded-md" value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
                                    <option value="">All Languages</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="English">English</option>
                                    <option value="Tamil">Tamil</option>
                                    <option value="Malayalam">Malayalam</option>
                                    <option value="Bengali">Bengali</option>
                                </select>

                                <select className="w-full border px-4 py-2 rounded-md" value={selectedFeeRange} onChange={(e) => setSelectedFeeRange(e.target.value)}>
                                    <option value="">All Fee Ranges</option>
                                    <option value="Upto ₹4,000">Less than ₹4,000</option>
                                    <option value="₹4,000 - ₹8,000">Between ₹4,000 and ₹8,000</option>
                                    <option value=">₹8,000 or above">More than ₹8,000</option>
                                </select>
                            </div>
                            <div className="flex gap-20 justify-center items-center mx-auto py-4 p-10 w-full">
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
