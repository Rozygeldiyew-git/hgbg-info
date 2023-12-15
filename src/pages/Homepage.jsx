import { Link } from 'react-router-dom'
import countriesJson from '../../public/json/countries.json'
import { useTranslation } from "react-i18next";
import LazyLoadedImage from '../components/LazyLoadImage'


const Homepage = () => {


    const { i18n, t } = useTranslation()
    const changeLanuage = (value) => {
        i18n.changeLanguage(value);
        localStorage.setItem('language', value);
    }


    return (
        <main className="bg-[url('/back-airplane.jpg')] brightness-110 bg-no-repeat bg-cover w-full h-screen overflow-y-auto remove-scrollbar  ">
            <div className=" flex justify-center overflow-y-auto">
                {/* Navbar */}
                <div className="navbar w-11/12 ">
                    <div className="navbar-start text-xl text-white font-bold flex gap-3">
                        <img src="/green_logo.webp" alt="Logo" className='bg-base-100 rounded-full' />
                        <span>
                            Howa gatnawlarynyň  <br /> Baş gullugy
                        </span>
                    </div>

                    {/* <div className="font-bold text-white text-3xl ">
                        {t('rules_of_visa_formulation')}
                    </div> */}

                    <div className="navbar-end">
                        <Link to='/turist-companies' className='btn btn-sm mr-5 '>
                            {t('turism_companies')}
                        </Link>
                        <span className='font-semibold mx-2'>
                            {t('lang')}
                        </span>

                        <div className='flex gap-3'>
                            <img src="/flags/tm.jpg" alt="Turkmen" className='w-10 cursor-pointer ' onClick={() => changeLanuage('tm')} />
                            <img src="/flags/en.jpg" alt="English" className='w-10 cursor-pointer ' onClick={() => changeLanuage('en')} />
                            <img src="/flags/ru.jpg" alt="Russian" className='w-10 cursor-pointer ' onClick={() => changeLanuage('ru')} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto " >



                <div className="font-bold text-white text-4xl my-10 text-center ">
                    {t('rules_of_visa_formulation')}
                </div>

                {/* Countries */}
                <section className=' grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10'>
                    {
                        countriesJson.map((item, idx) => (
                            <Link to={item.img_name} className="border rounded-lg flex h-36 active:bg-slate-100 cursor-pointer bg-slate-50/50" key={idx}>
                                <div className='p-3 w-1/2 flex items-center justify-center'>
                                    <h1 className="font-semibold text-2xl">{i18n.language === 'tm' ? item.country_name.tm : i18n.language === 'en' ? item.country_name.en : item.country_name.ru}</h1>
                                </div>
                                <div className='w-1/2 h-full'>
                                    {/* <img src={`/images/${item.img_name}-flag.gif`} alt={item.country_name.tm} className='w-full h-full object-cover rounded-tr-lg rounded-br-lg' /> */}
                                    <LazyLoadedImage src={`/images/${item.img_name}-flag.gif`} alt={item.country_name.tm}  className='w-full h-full object-cover rounded-tr-lg rounded-br-lg' />

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