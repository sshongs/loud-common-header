import Loud from 'a/top/loud.svg'
import Supergent from 'a/top/supergent.svg'
import Palmtree from 'a/top/palmtree.svg'
import LEN from 'a/top/len.svg'

export default function CommonHeader(){
    return(

        <div className="bg-zinc-900 text-zinc-400 text-[11px] font-bold relative z-10">
        <div className="container mx-auto">
            <div className="flex justify-center items-center">
                    <a className="block py-1 p-3 bg-main text-white transition duration-100 group hover:text-white" href="https://loudcorp.com"><Loud className="fill-zinc-50 w-3 inline-block align-[-0.16rem] group-hover:fill-white" /><span className='hidden md:inline ml-1'>LOUD CORPORATION</span></a>
                    <a className="block py-1 p-3 bg-zinc-900 hover:bg-zinc-800 transition duration-100 group hover:text-len" href="https://len.loudcorp.com"><LEN className="fill-zinc-300 w-7 inline-block align-[-0.17rem] group-hover:fill-len" /><span className='hidden md:inline ml-1'>LEN</span></a>
                    <a className="block py-1 p-3 bg-zinc-900 hover:bg-zinc-800 transition duration-100 group hover:text-supergent" href="https://supergent.gg"><Supergent className="fill-zinc-300 w-6 inline-block align-[-0.3rem]" /><span className='hidden md:inline ml-1'>SUPERGENT</span></a>
                    <a className="block py-1 p-3 bg-zinc-900 hover:bg-zinc-800 transition duration-100 group hover:text-orange-400" href="https://palmtree.is"><Palmtree className="fill-zinc-300 w-4 inline-block align-[-0.28rem] group-hover:fill-orange-400" /><span className='hidden md:inline ml-1'>PALMTREE ISLAND</span></a>
            </div>
        </div>
        </div>

    )
}