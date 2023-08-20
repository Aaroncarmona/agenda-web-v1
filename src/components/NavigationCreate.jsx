import {Link} from 'react-router-dom'
import {UserPlusIcon} from '@heroicons/react/24/solid'

export function NavigationCreate({currentContact, setCurrentContact}) {

    return (
        <div
            className='flex justify-center items-center bg-zinc-700 hover:bg-zinc-600 cursor-pointer'
            onClick={() => {
                setCurrentContact({
                    action: "create"
                })
            }}
        >
            <UserPlusIcon className="w-6 h-6 my-2.5 text-blue-500"/>
        </div>
    )
}
