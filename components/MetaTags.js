import Head from "next/head"

export default function Metatags({title,description}){

    return(
        <>
        <Head>
            <title key="title">{title} - {process.env.APP_WEBSITE_NAME}</title>
            <meta property="og:title" content={`${title} - ${process.env.APP_WEBSITE_NAME}`} key="og:title"/>
            <meta name="twitter:title" content={`${title} - ${process.env.APP_WEBSITE_NAME}`} key="tw:title"/>
            <meta name="description" content={`${description}`} key="des"/>
            <meta property="og:title" content={`${title} - ${process.env.APP_WEBSITE_NAME}`} key="og:title"/>
            <meta property="og:description" content={`${description}`} key="og:des"/>
            <meta name="twitter:description" content={`${description}`} key="tw:des"/>
        </Head>
        </>
    )
}