import { Link, useParams } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io";
import countryVisaInfoArray from '../../public/json/countries_visa_info'
import parse from 'html-react-parser';


const Country = () => {
    const params = useParams()
    const id = params.id

    const countryVisaInfo = countryVisaInfoArray.filter((item) => item.id === id)[0]
    return (
        <main className="container mx-auto">


            {/* Navbar */}
            <div className="navbar bg-base-100">
                <div className="navbar-start text-xl text-brand_color font-bold flex gap-3">
                    <Link to={'/'} className="btn btn-sm btn-primary">
                        <IoIosArrowRoundBack size={30} />
                        <span>
                            Back
                        </span>
                    </Link>
                </div>
                <div className="navbar-center flex gap-4">
                    <span className="font-semibold text-2xl">{countryVisaInfo.name}</span>
                    <div className="w-10 h-10  block rounded-full">
                        <img src={`/images/${countryVisaInfo.id}-flag.gif`} alt="Turkiye" className='rounded-full h-full w-full object-cover' />
                    </div>
                </div>

                <div className="navbar-end">
                    <span className='font-semibold mx-2'>
                        Dili:
                    </span>
                    <div className='flex gap-3'>
                        <img src="/flags/tm.jpg" alt="Turkmen" className='w-10 cursor-pointer active:-scale-50 transition-transform' />
                        <img src="/flags/en.jpg" alt="English" className='w-10 cursor-pointer active:-scale-50 transition-transform' />
                        <img src="/flags/ru.jpg" alt="Russian" className='w-10 cursor-pointer active:-scale-50 transition-transform' />
                    </div>
                </div>
            </div>



            <div className="w-1/2 mx-auto my-14">
                {parse(countryVisaInfo.content)}
            </div>
        </main>
    )
}

export default Country