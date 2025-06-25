"use client"

import { createContext, useContext, useState, useEffect } from "react"

const ArtistArrayContext = createContext()

export const ArtistProvider = ({ children }) => {
    const [artistListArray, setArtistListArray] = useState([])

    const fetchArtists = async () => {

        try {
            const res = await fetch("/api/mock-artists")
            const data = await res.json()
            setArtistListArray(data)
        } catch (err) {
            console.error("Failed to fetch artists data:", err)
        }
    }

    useEffect(() => {

        fetchArtists()

        }, [])


    return (
        <ArtistArrayContext.Provider value={{ artistListArray, refreshArray: fetchArtists }}>
            {children}
        </ArtistArrayContext.Provider>
    )
}

export const useArtistArrayContext = () => useContext(ArtistArrayContext)
