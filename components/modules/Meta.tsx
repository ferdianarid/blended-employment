import Head from 'next/head'
import React from 'react'

interface IMetaProps {
    title: string
    description: string
    keywords: string
}

const Meta: React.FC<IMetaProps> = ({ title, description, keywords }: IMetaProps) => {
    return (
        <React.Fragment>
            <Head>
                <title>{title} | Blended Employment</title>
                <meta itemProp="name" content={title} />
                <meta name="keywords" content={keywords} />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="description" content={description} />
                <meta itemProp="description" content={description} />
            </Head>
        </React.Fragment>
    )
}

export default Meta