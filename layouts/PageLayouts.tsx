import Navbar from 'components/moleculs/Navbar'
import React, { ReactNode } from 'react'

interface PageLayoutsType {
    children: ReactNode
}

const PageLayouts = ({ children }: PageLayoutsType) => {
    return (
        <React.Fragment>
            <div className="w-full max-w-[1440px] mx-auto">
                <Navbar />
                {children}
            </div>
        </React.Fragment>
    )
}

export default PageLayouts