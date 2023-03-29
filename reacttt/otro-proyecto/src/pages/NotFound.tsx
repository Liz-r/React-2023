import React from 'react'

export default function NotFound() {
  return (
    <div className="card text-center" style={{minWidth:"1000px"}}>
      <div className="card-body">
        <h1 className="card-title">Sorry, Page Not Found</h1>
        <h2 className='card-title'>404</h2>
        <a href="/home" className="btn btn-primary">Return to Home</a>
      </div>
    </div>
  )
}
