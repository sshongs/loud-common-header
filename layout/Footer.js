import Link from "next/link"
import Logo from 'a/logo.svg'

export default function LayoutFooter(){
    return(
        <>
        <div className="footer bg-zinc-900 text-zinc-400 relative z-20">
            <div className="">
                <div className="container">
                <ul className="md:flex md:flex-wrap text-xs space-y-4 md:space-y-0 md:space-x-6 border-b-2 border-zinc-700 py-8 pb-4">
                    {[
                        {href:'https://supergent.gg', title:'슈퍼전트 공식 홈페이지'},
                        {href:'https://palmtree.is', title:'팜트리아일랜드 공식 홈페이지'},
                    ].map((val,index)=>
                        <li key={index}><a className="hover:text-sub" href={val.href}>{val.title}</a></li>
                    )}
                </ul>

                
                </div>
            </div>

            <div className="bg-zinc-900 py-8 text-xs">
            <div className="container">
                <div className="flex justify-between items-center">
                
                <div className="flex-auto">
                <div className="text-zinc-200 mb-2">
                2014-2022 LOUD CORPORATION
                </div>
                <div>
                    Live Our Dreams!, LOUD CORPORATION
                </div>
                <div className="mt-2">
                    Official contact email. contact@loudcorp.com
                </div>
                </div>



                <div className="">
                    <Logo className="w-16 fill-zinc-500" />
                </div>

                </div>
                </div>

            </div>

        </div>
        </>
    )
}