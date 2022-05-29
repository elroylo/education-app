import React from 'react'
import { useParams } from 'react-router-dom'

export default function SpecificBlog() {

    let { id: bid } = useParams()

    return (
        <div>
            {bid}
        </div>
    )
}