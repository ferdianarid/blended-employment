import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <React.Fragment>
            <div className="px-[88px] z-50 w-full mx-auto relative">
                <div className="w-full max-w-[1264px] mt-8 bg-white flex justify-between items-center  shadow-slate-100 shadow-2xl h-20 fixed px-8 py-4">
                    <Image src='/homepage/header/logo.png' width={98} height={40} />
                    <div className="flex items-center space-x-8">
                        <Link href={'/job-board'}>
                            <h1 className="font-semibold text-[#76767E] text-sm">Live Job Board</h1>
                        </Link>
                        <Link href={'/industry-specialisations'}>
                            <h1 className="font-semibold text-[#76767E] text-sm">Industry Specialisations</h1>
                        </Link>
                        <Link href={'/about-us'}>
                            <h1 className="font-semibold text-[#76767E] text-sm">About Us</h1>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <Image src='/homepage/header/australia.png' width={24} height={24} alt={'australia'} />
                        <h3 className="font-bold text-sm pl-2">07 3667 8895</h3>
                        <button className="ml-[24px] py-[10px] px-4 rounded-[4px] text-sm font-bold text-white bg-[#0D1F42]">Book a Demo</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar