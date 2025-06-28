"use client"

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Checkbox } from "@/components/ui/checkbox"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from './ui/button'
import { useState } from 'react'
import { useArtistArrayContext } from './contexts/ArtistsArraycontext'

const Form = () => {

    const {
    register,
    handleSubmit,
    setError,
    setValue,
    watch,
    formState: {errors, isSubmitting}
    } = useForm({
        defaultValues:{
            languages: [],
            categories: [],
            agree: false
        }
    })

    // const [form, setForm] = useState({fullname: "", email: "", location: "", bio: "", languages: [],
    //         categories: [], fee_range: "", agree:""})

    const {refreshArray} = useArtistArrayContext()

    const router = useRouter()

    const categories = ["Singer", "Dancer", "Speaker", "DJ"]
    const languages = ["Hindi", "English", "Tamil", "Bengali", "Malayalam"]

    const selectedLanguages = watch("languages") || []

    const toggleLanguage = (lang) => {
        const updated = selectedLanguages.includes(lang)? selectedLanguages.filter((l) => l !== lang): [...selectedLanguages, lang]
        setValue("languages", updated) 
    }

    const onSubmit = async (data)=> {

        if ((data.categories || []).length === 0) {
            setError("categories", { message: "Please select at least one category" })
            return
        }

        if ((data.languages || []).length === 0) {
            setError("languages", { message: "Please select at least one language" })
            return
        }

        try {
            const response = await fetch("/api/mock-artists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })

            await refreshArray()

            router.push("/") 
        } catch (error) {
            console.error("Submission failed:", error)
        }

    }

    return (
        <div className="container lg:p-6 max-w-[100vw] overflow-x-hidden">

            <form action="" className='flex flex-col gap-12 lg:gap-12 my-auto p-6 mt-3 md:mt-0 justify-center border-b-2 items-center' onSubmit={handleSubmit(onSubmit)}>

                <div className='flex flex-col md:flex-row gap-12 md:gap-15 lg:gap-30'>

                    <div className='flex flex-col gap-12 lg:gap-16 justify-center items-center'>
                        
                        <div className='pb-2 text-lg justify-center items-center '>

                            {/* <label htmlFor="fullname">Full Name :</label> */}
                            <input  type="text" id='fullname' placeholder='Enter Full Name' className='rounded-full border-2 border-slate-500 w-full py-1.5 px-12 justify-center text-center' {...register("fullname", {required: {value:true, message: "This field is required"}, minLength: {value:3, message: "minimum 3 charecters required"}})} />
                            {errors.fullname && <div className='text-red-500'>{errors.fullname.message}</div> }

                        </div>

                        <div className='pb-2 text-lg justify-center items-center'>
                            {/* <label htmlFor="email"> Email :</label> */}
                            <input  type="email" id='email' placeholder='Enter your Email address' className='rounded-full border-2 border-slate-500 w-full py-1.5 px-12 justify-center text-center' {...register("email", {required: {value:true, message: "This field is required"}, minLength: {value:13, message: "minimum 13 charecters required"}})} />
                            {errors.email && <div className='text-red-500'>{errors.email.message}</div> }
                        </div>

                        <div className="text-lg justify-center items-center ">
                        
                            {/* <label htmlFor="location">location : </label> */}
                            <input  placeholder='Enter Location' id='location' type="text" className='rounded-full border-2 border-slate-500 w-full py-1.5 px-12 justify-center text-center' {...register("location", {required: {value:true, message: "This field is required"}, minLength: {value:3, message: "minimum 3 charecters required"}, maxLength:{value:15, message:"maximum number of charecters is 15"}})} />
                            {errors.location && <div className=' text-red-500'> {errors.location.message} </div>}
                        </div>

                    </div>

                    <div className=' flex flex-col items-center justify-center md:mt-1 lg:mt-3 gap-12 lg:gap-16 text-gray-500 '>

                        <div className="flex flex-col gap-10 lg:pb-2 text-lg justify-center items-center w-full lg:w-[29vw] lg:max-w-75">

                            <select id="feeRange" className="rounded-full border-2 border-slate-500 w-full py-2 px-8 text-center"
                                {...register("feeRange", {required: { value: true, message: "Please select a fee range" },})}defaultValue="">

                                <option value="" disabled>Select Fee Range</option>
                                <option value="Upto ₹4,000">Less than ₹4,000</option>
                                <option value="₹4,000 - ₹8,000">Between ₹4,000 and ₹8,000</option>
                                <option value=">₹8,000 or above">More than ₹8,000</option>

                            </select>
                            
                            {errors.feeRange && (
                                <div className="text-red-500">{errors.feeRange.message}</div>
                            )}
                        </div>
                        
                        <div className="flex flex-col items-center gap-1">
                            <label className="font-medium text-lg text-center">Select Artist Categories</label>

                            <div className='flex gap-4'>
                                
                                {categories.map((category) => (

                                    <div key={category} className="flex items-center gap-2">

                                        <Checkbox
                                            id={category}
                                            onCheckedChange={(checked) => {
                                                const current = watch("categories") || []
                                                if (checked) {
                                                    setValue("categories", [...current, category])
                                                } else {
                                                    setValue(
                                                    "categories",
                                                    current.filter((item) => item !== category)
                                                    )
                                                }
                                            }}
                                            checked={watch("categories")?.includes(category) || false}
                                        />
                                        <label htmlFor={category} className="text-sm">
                                            {category}
                                        </label>
                                    </div>
                                ))}

                            </div>
                            

                            {errors.categories && (
                                <p className="text-red-500 text-sm">{errors.categories.message}</p>
                            )}
                        </div>

                        <div className="w-full lg:w-[29vw] lg:max-w-75 lg:h-14 flex flex-col gap-2">
                            {/* <label className="font-semibold">Languages Spoken</label> */}

                            <Popover>
                                <PopoverTrigger asChild className='lg:h-11 text-gray-500'>
                                    <Button
                                    variant="ghost"
                                    className="text-lg font-medium text-center items-center w-full justify-center border-2 border-slate-500 rounded-3xl py-1"
                                    >
                                        {selectedLanguages.length > 0
                                            ? selectedLanguages.join(", ")
                                            : "Select Languages"}
                                    </Button>
                                </PopoverTrigger>

                                <PopoverContent className="w-full p-2 h-80 overflow-y-auto">
                                    {languages.map((lang) => (
                                    <div key={lang} className="flex items-center gap-2 py-1">
                                        <Checkbox
                                        id={lang}
                                        checked={selectedLanguages.includes(lang)}
                                        onCheckedChange={() => toggleLanguage(lang)}
                                        />
                                        <label htmlFor={lang} className="text-sm">
                                        {lang}
                                        </label>
                                    </div>
                                    ))}
                                </PopoverContent>
                            </Popover>


                            {errors.languages && (
                                <p className="text-red-500">{errors.languages.message}</p>
                            )}
                        </div>

                    </div>

                </div>
                
                
                <div className="flex flex-col gap-3 text-lg justify-center w-full max-w-75 md:w-167 lg:w-180 h-[18vh] md:h-[12vh] lg:h-[18vh] items-center mx-auto">
                    
                    <textarea  placeholder='Bio' id='bio' className='rounded-3xl border-2 border-slate-500 w-full lg:w-180 h-full overflow-scroll no-scrollbar py-1.5 px-1.5 lg:px-12 justify-center text-center  items-center' {...register("bio", {required: {value:true, message: "This field is required"}, minLength: {value:50, message: "minimum 50 charecters required"}, maxLength:{value:200, message:"maximum number of charecters is 200"}})} />

                    {errors.bio && <div className='text-red-500'> {errors.bio.message} </div>}

                </div>

                <div className="flex flex-col gap-3 text-lg justify-center w-full lg:w-[25vw] items-center">

                    <div className="flex items-center gap-3">

                        <Checkbox id="agree" checked={watch("agree")} onCheckedChange={(checked) => setValue("agree", checked)}/>

                        <label htmlFor="agree" className="text-sm text-white">
                            Accept terms and conditions
                        </label>
                    </div>

                    {errors.agree && (
                    <p className="text-red-500 text-sm">{errors.agree.message}</p>
                    )}

                </div>

                <div className="flex gap-10 pb-8 text-lg justify-center items-center">
                    {isSubmitting? <div>Please Wait</div> : <input disabled= {isSubmitting} type="submit" value="SUBMIT" className='rounded-full font-bold border border-slate-400 w-full py-1.5 px-25 text-white hover:text-slate-400 bg-slate-950 hover:bg-slate-800' />}
                    {/* <submit disabled= {isSubmitting}>Submit</submit> */}
                </div>


            </form>

        </div>
    )
}

export default Form







