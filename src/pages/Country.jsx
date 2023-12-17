import { Link, useParams } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io";
import countryVisaInfoArray from '../../public/json/countries_visa_info'
import parse from 'html-react-parser';
import { useTranslation } from "react-i18next";



const Country = () => {
    const params = useParams()
    const id = params.id


    const { i18n, t } = useTranslation()
    const changeLanuage = (value) => {
        i18n.changeLanguage(value);
        localStorage.setItem('language', value);
    }

    const countryVisaInfo = countryVisaInfoArray.filter((item) => item.id === id)[0]
    const content = i18n.language === 'tm' ? parse(countryVisaInfo.content.tm) : i18n.language === 'en' ? parse(countryVisaInfo.content.en) : parse(countryVisaInfo.content.ru)


    const divStyle = {
        backgroundImage: `url('/background-images/${countryVisaInfo.id}.webp')`,
    };

    return (
        <main className='bg-no-repeat bg-cover bg-center h-screen bg-opacity-5  overflow-y-auto remove-scrollbar' style={divStyle}>

            {/* Navbar */}
            <div className=" bg-slate-50/80">
                <div className="navbar container mx-auto ">
                    <div className="navbar-start text-xl text-brand_color font-bold flex gap-3">
                        <Link to={'/'} className="btn btn-sm btn-primary">
                            <IoIosArrowRoundBack size={30} />
                            <span>
                                {t('back')}
                            </span>
                        </Link>
                    </div>
                    <div className="navbar-center flex gap-4">
                        <span className="font-semibold text-2xl">{i18n.language === 'tm' ? countryVisaInfo.name.tm : i18n.language === 'en' ? countryVisaInfo.name.en : countryVisaInfo.name.ru}</span>
                        <div className="w-10 h-10  block rounded-full">
                            <img src={`/images/${countryVisaInfo.id}-flag.gif`} alt="Turkiye" className='rounded-full h-full w-full object-cover' />
                        </div>
                    </div>

                    <div className="navbar-end">
                        <span className='font-semibold mx-2'>
                            {t('lang')}
                        </span>
                        <div className='flex gap-3'>
                            <img src="/flags/tm.jpg" alt="Turkmen" className='w-10 cursor-pointer' onClick={() => changeLanuage('tm')} />
                            <img src="/flags/en.jpg" alt="English" className='w-10 cursor-pointer' onClick={() => changeLanuage('en')} />
                            <img src="/flags/ru.jpg" alt="Russian" className='w-10 cursor-pointer' onClick={() => changeLanuage('ru')} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto" >
                <div className={`w-8/12 p-6 rounded-xl font-semibold mx-auto my-14 ${typeof content !== 'object' && 'whitespace-pre-line'} bg-slate-50/80 `}>

                    {content}

                    <div>
                        <p>
                            {t('source_link_text')}
                        </p>
                        <p className="text-blue-700">{countryVisaInfo.source_link}</p>
                    </div>

                </div>
            </div>
        </main>

    )
}

export default Country