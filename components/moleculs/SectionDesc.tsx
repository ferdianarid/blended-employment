import React from 'react'

interface ISectionDesc {
    title: string
    description: string
}

const SectionDesc: React.FC<ISectionDesc> = ({ title, description }) => {
    return (
        <React.Fragment>
            <div className="max-w-[262px]">
                <h3 className="font-bold text-2xl text-white">{title}</h3>
                <h3 className="font-light text-md pt-4 text-white">{description}</h3>
            </div>
        </React.Fragment>
    )
}

export default SectionDesc