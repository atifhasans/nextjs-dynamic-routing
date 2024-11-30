import React from 'react'
import Link from 'next/link'

const Home = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users/')
  const response = await data.json()
  console.log(response)

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          User List
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {response.map((item) => (
            <div
              key={item.id}
              className="p-4 transition-transform duration-300 transform hover:scale-105"
            >
              <div className="card bg-white border border-gray-200 rounded-lg shadow-md w-80">
                <div className="card-body p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Name: {item.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">
                    Username: {item.username}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    Company: {item.company.name}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Email: {item.email}
                  </p>
                  <div className="card-actions">
                    <Link href={`/${item.id}`}>
                      <button className="btn btn-primary w-full py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
                        View User Detail
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Home
