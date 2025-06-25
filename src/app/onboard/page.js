import Form from "@/components/Form"

const page = () => {
  return (
    <div className='h-[80vh] overflow-scroll no-scrollbar px-10 py-10'>
      
        <h1 className='text-5xl pb-8 text-center text font-bold border-b-2 w-[70vw] mx-auto'>
            Join Artistly — Get Discovered. Get Booked.
        </h1>

        {/* <p className="text-center justify-center w-[60vw] items-center mx-auto text-lg">Showcase your talent to event planners across the country. Whether you're a singer, dancer, speaker, or DJ — fill out the form below and let your profile do the talking. Artistly helps you get seen, selected, and scheduled.</p> */}

        <Form/>

    </div>
  )
}

export default page
