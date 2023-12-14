import { Link } from 'react-router-dom'
import countriesJson from '../../public/json/countries.json'

const Homepage = () => {
    return (
        <main className="bg-[url('/airplane-background.jpg')] bg-no-repeat bg-cover h-screen ">
            <div className="container mx-auto " >


                {/* Navbar */}
                <div className="navbar ">
                    <div className="navbar-start text-xl text-brand_color font-bold flex gap-3">
                        <img src="/green_logo.webp" alt="Logo" />
                        <span>
                            Howa gatnawlarynyň  <br /> Baş gullugy
                        </span>
                    </div>


                    <div className="navbar-end">
                        <Link to='/turist-companies' className='btn btn-sm mr-10 '>
                            Syýahatçylyk kärhanalary
                        </Link>
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


                {/* Countries */}
                <section className=' grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10'>
                    {
                        countriesJson.map((item, idx) => (
                            <Link to={item.img_name} className="border rounded-lg flex h-36 active:bg-slate-100 cursor-pointer bg-slate-50/50" key={idx}>
                                <div className='p-3 w-1/2'>
                                    <h1 className="font-semibold text-4xl">{item.country_name}</h1>
                                    <span className="text-sm">{item.description}</span>
                                </div>
                                <div className='w-1/2 h-full'>
                                    <img src={`/images/${item.img_name}-flag.gif`} alt="Turkiye" className='h-full object-cover' />
                                </div>
                            </Link>
                        ))
                    }
                </section>

            </div>
        </main>
    )
}

export default Homepage