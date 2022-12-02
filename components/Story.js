import Image from 'next/image'
import Link from 'next/link'
export default function Story({data, type}) {

    if(!type) type = 'box'

    if(type === 'box'){
        return (
            <>
                <ul className='flex flex-wrap -m-2'>
                    {data.map((content, index) =>
                        <li key={index} className={`p-2 w-4/12 flex-initial group`}>
                            <Link href={`/story/${content.id}`} className="block">
                                <div className='relative h-full bg-white group-hover:scale-[1.02] group-hover:shadow-2xl transition-all duration-100'>
    
                                    <div className='aspect-video relative bg-zinc-400'>
                                        <Image src={content.thumb} fill alt="" className='object-cover' />
                                    </div>
    
                                    <div className='p-6 word-fix left-0 w-full bottom-0'>
                                        <small className='mb-4 font-bold text-zinc-400 engFont inline-block border-b-4 border-zinc-400'>{content.category}</small>
                                        <h3 className='mb-2 font-bold leading-5 text-black'>
                                           {content.title}
                                        </h3>
                                        <div className='date text-xs mt-0.5 mb-2 text-zinc-400 font-bold tracking-tight'>{content.publishedAt}</div>
                                        <p className='text-xs text-zinc-400'>
                                            {content.shortArticle}
                                        </p>
                                    </div>
    
    
                                </div>
                            </Link>
                        </li>
                    )}
                </ul>
            </>
        )
    }

    else if(type === 'list'){
        return (
            <>
                <ul className='flex flex-wrap -m-2'>
                    {data.map((content, index) =>
                        <li key={index} className={`p-2 w-full flex-initial group`}>
                            <Link href={`/story/${content.id}`} className="block">
                                <div className='flex items-center relative bg-white group-hover:scale-[1.02] group-hover:shadow-2xl transition-all duration-100'>

                                   
                                    <div className='aspect-square relative bg-zinc-400 w-4/12 lg:w-2/12 self-stretch'>
                                        <Image src={content.thumb} fill alt="" className='object-cover' />
                                    </div>
                              
    
                                    <div className='p-6 word-fix left-0 w-full bottom-0'>
                                        <small className='mb-2 font-bold text-zinc-400 engFont inline-block border-b-4 border-zinc-400'>{content.category}</small>
                                        <h3 className='mb-2 font-bold leading-5'>
                                           {content.title}
                                        </h3>
                                        <div className='date text-xs mt-0.5 mb-2 text-zinc-400 font-bold tracking-tight'>{content.publishedAt}</div>
                                        <p className='text-xs text-zinc-400'>
                                            {content.shortArticle}
                                        </p>
                                    </div>
    
    
                                </div>
                            </Link>
                        </li>
                    )}
                </ul>
            </>
        )
    }

    
}