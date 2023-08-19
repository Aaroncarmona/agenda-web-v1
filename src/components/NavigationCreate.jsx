import { Link } from 'react-router-dom'
import PlusIcon from '@heroicons/react/24/solid/PlusIcon'

export function NavigationCreate() {

    return (
        <Link to='/contacts-create' className='flex justify-center items-center bg-zinc-700 hover:bg-zinc-600'>
            <div className=''>
                <PlusIcon className="w-6 h-6 my-2 text-blue-500" />        
            </div>
        </Link>
    )
}

//pencil
//plus
//trash
//clipboard-document

