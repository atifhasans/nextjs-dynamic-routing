import React from 'react'
import Link from 'next/link'

const page = async ({ params: { id } }) => {
    console.log(id)

    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const response = await data.json()
    console.log(response)

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="card bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
                <div className="card-body space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">Name: {response.name}</h2>
                    <p className="text-gray-600">Email: <span className="font-medium text-gray-800">{response.email}</span></p>
                    <p className="text-gray-600">Phone: <span className="font-medium text-gray-800">{response.phone}</span></p>
                    <p className="text-gray-600">Website: <a href={`https://${response.website}`} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-500 hover:underline">{response.website}</a></p>
                    <p className="text-gray-600">Company: <span className="font-medium text-gray-800">{response.company.name}</span></p>
                    <p className="text-gray-600">City: <span className="font-medium text-gray-800">{response.address.city}</span></p>
                    <p className="text-gray-600">Street: <span className="font-medium text-gray-800">{response.address.street}</span></p>
                    <p className="text-gray-600">Zipcode: <span className="font-medium text-gray-800">{response.address.zipcode}</span></p>
                    <div className="card-actions">
                        <Link href={`/`}>
                            <button className="btn btn-primary w-full mt-4">Back to All Users</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
