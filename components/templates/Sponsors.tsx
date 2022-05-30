import React from 'react'
import Image from 'next/image'

const Sponsors = () => {
    // image name
    const imagePath = ["junior", "business-news", "4bc", "courier", "skynews", "radio-brisbane", "headspace", "2gb"]
    return (
        <React.Fragment>
            <div className="bg-white w-[1264px] -top-36 absolute h-[320px] py-16 px-[264px]">
                <h1 className="font-bold text-xl uppercase text-center">Featured In</h1>
                <div className="grid grid-cols-4 gap-8 py-10">
                    {imagePath.map((path) => {
                        return (
                            <Image key={path} src={`/homepage/sponsors/${path}.png`} height={40} width={160} alt={path} />
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sponsors