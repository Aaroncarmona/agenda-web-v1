import { Link } from 'react-router-dom'
import imagen from '../assets/hacker.png'
import { useState } from 'react'

export function Navigation( { filter , setFilter} ) {
    return (
        <div>
            <input 
                type="text"
                placeholder="Buscar contactos"
                className='bg-zinc-700 p-3 block w-full h-10'
                value={filter}
                onChange={(e) => { setFilter(e.target.value) }}
            />
        </div>
    ) 
}