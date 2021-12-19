import React from 'react'
import Header from './Header'
import { Button } from 'react-bootstrap'

export default function Home() {
    return (
        <div>
          <h2>Home</h2>  
          <Header/>
          <Button type="submit">Login to Spotify</Button>
        </div>
    )
}
