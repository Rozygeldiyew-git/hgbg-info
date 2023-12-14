import { Link } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io";
import turCompaniesListJson from '../../public/json/turist_companies'


const TuristCompanies = () => {

    return (
        <main className="bg-[url('/with-girl.jpg')] bg-no-repeat bg-cover h-auto bg-opacity-5">
            <div className="container mx-auto">


                {/* Navbar */}
                <div className="navbar ">
                    <div className="navbar-start text-xl text-brand_color font-bold flex gap-3">
                        <Link to={'/'} className="btn btn-sm btn-primary">
                            <IoIosArrowRoundBack size={30} />
                            <span>
                                Back
                            </span>
                        </Link>
                    </div>
                    <div className="navbar-center font-bold text-brand_color text-3xl ">
                        Syýahatçylyk kärhanalary
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

                <div className="overflow-x-auto  ">
                    <table className="table table-lg font-semibold bg-slate-50/50 my-10">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Syýahat kärhanasynyň ady</th>
                                <th>Telefon belgileri</th>
                                <th>Adresi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                turCompaniesListJson.map((item, idx) => (
                                    <tr  key={idx}>
                                        <th>{idx + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.phone_numbers}</td>
                                        <td>{item.address}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>


            </div>
        </main>
    )
}

export default TuristCompanies