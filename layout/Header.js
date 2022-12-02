import Link from 'next/link'
import Logo from 'a/logo_full.svg'
import {useRouter} from 'next/router'

export default function LayoutHeader(){
    

    return(
        <>
            <div className='sticky top-0 left-0 z-40 w-full px-5 bg-cover shadow-xl bg-main'>
                <div className='container items-center justify-between mx-auto overflow-hidden overflow-x-auto text-white lg:flex'>
                    <div className='flex items-center justify-center'>
                    <Link href="/" className='hidden md:block'><Logo className="w-16 mr-3 relative -top-0.5 fill-white" /></Link>
                    <ul className='flex'>
                        {[
                            {url:'/#about',title:'ABOUT'},
                            {url:'/#service',title:'SERVICE'},
                            {url:'/#partner',title:'PARTNER'},
                            {url:'/#contact',title:'CONTACT'},
                        ].map(menu=>
                            <li key={menu.title}><Link scroll={false} href={menu.url} className='block px-2 py-4 text-sm transition duration-150 engFont lg:text-md lg:px-3 hover:scale-110'>{menu.title}</Link></li>
                        )}
                        
                    </ul>
                    </div>

                </div>
            </div>

        </>
    )
}