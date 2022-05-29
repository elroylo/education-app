import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import styles from './SpecBlog.module.css'

export default function Post() {
    let [post, setBlog] = useState()
    let navigate = useNavigate()
    let { id } = useParams()
    let [load, setLoad] = useState(false)

    async function getPost() {
        setLoad(false)
        fetch(`https://civileducation.epiccodewizard2.repl.co/blogs/get/${id}`)
            .then(res => res.json())
            .then(json => setBlog(json))
        setLoad(true)
    }

    useEffect(() => {
        getPost()
    }, [id])

    if (post) {
        return (
            <div>
                <Navbar />
                <img
                    src={post.cover}
                    className='w-3/5 justify-center items-center m-auto mt-4 rounded-lg'
                />
                <div className='p-2 m-auto justify-center items-center text-center'>
                    <div className='text-4xl font-bold'>
                        {post.title}
                    </div>
                    <div className='text-2xl font-medium'>
                        by {post.userId}
                    </div>
                </div>
                <div
                    className={`${styles.content} m-auto`}
                    dangerouslySetInnerHTML={{__html: post.content}}
                />
            </div>
        )
    } else {
        return (
            <div>
                Loading....
            </div>
        )
    }
    }




