import React from 'react'

const ContentLayouts = ({ children }: any) => {
    return (
        <React.Fragment>
            <div className="w-full mt-[88px] flex items-center justify-between">{children}</div>
        </React.Fragment>
    )
}

export default ContentLayouts