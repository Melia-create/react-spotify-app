import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

export default function NotFoundPage() {
    return (
        <div>
            <Header/>
            <h2>Page not found.</h2>
            <p>Go to <Link to="/dashboard">Homepage</Link></p>
        </div>
    )
}
