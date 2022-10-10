import React, { useEffect, useState } from 'react'
import axios from 'axios'

const url = "http://gateway.marvel.com/v1/public/comics"
const apiKey = import.meta.env.VITE_MARVEL_API_PUBLIC_KEY
const ts = 1
const hash = "64d5f5c1d3940753ccf44151f4d31ab2"

const ApiTest = () => {
    const [get, setGet] = useState(null)

    const fetchData = async () => {
        try {
            const response = (await axios.get(`${url}?ts=${ts}&apikey=${apiKey}&hash=${hash}`))
            const data = response.data
            setGet(data)
            console.dir(data)
            for(let i=0; i < data.data.count; i++) {
                console.log(data.data.results[i].title)
            }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if(!get) return null

    return (
        <div>{get.data.results[0].title}</div>
    )
}

export default ApiTest