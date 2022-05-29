import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useMoralis } from 'react-moralis'
import { GOOGLE_MEET } from '../../constants/comments'

//AiOutlineArrowRight
export default function CommentInput({ className, pid }) {

    const { user } = useMoralis()
    const [content, setContent] = React.useState('')

    function google() {
        window.open(
            `https://meet.google.com/new`,
            '_blank' // <- This is what makes it open in a new window.
        );
    }
    function submit() {
        let body = JSON.stringify({
            userId: user.get('ethAddress'),
            content
        })
        let headers = new Headers()
        headers.append('Content-Type', 'application/json')
        console.log(body)
        fetch(`https://civileducation.epiccodewizard2.repl.co/posts/comments/${pid}`, {
            body,
            method: 'POST',
            headers
        })
            .then(res => res.json())
            .then(json => {
                if (json.nlp.length != 0) {
                    alert(json.nlp)
                } else {
                    setContent('')
                    window.location.reload()
                }
            })
    }

    return (
        <div className={`${className}`}>
            <div>
                <p className='text-2xl font-bold p-2'>
                    Add a Comment:
                </p>
            </div>
            <div>
            <textarea className='py-2 my-2 px-4 border-2 border-gray-400 rounded-lg' value={content} onChange={e => setContent(e.target.value)} />
                <button onClick={submit} type='submit' className='hover:bg-gray-100 p-2 m-2 rounded-full shadow-md border-2 border-gray-300'>
                    <AiOutlineArrowRight height={40} />
                </button>
                <button onClick={google} className='p-2 m-2 rounded-full shadow-md'>
                    <img src={GOOGLE_MEET} className='h-5' />
                </button>
            </div>
        </div>
    )
}