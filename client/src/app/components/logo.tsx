import Link from "next/link"

export default function Logo(){
    return(
        <div className="flex flex-shrink-0 items-center">
            <Link className='text-yellow-400 rounded-md text-md hover:bg-blue-800  bg-blue-700 p-1 font-bold uppercase'  href={'/'} >Soccer-bet</Link>
        </div>
    )
}