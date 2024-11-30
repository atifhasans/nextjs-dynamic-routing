import React from 'react'

const Navbar = async () => {
    return (
        <div className="bg-neutral text-neutral-content">
            <div className="navbar container mx-auto px-4 py-2">
                <div className="flex items-center justify-between w-full">
                    <button className="btn btn-ghost normal-case text-2xl font-bold tracking-wide">
                        Dynamic Routing
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
