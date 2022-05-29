import React from 'react'

export default function CommentComponent({uid, content, avatar}) {
    return (
        <div className='flex-col py-4'>
            <div className='flex p-2 my-2'>
                <img src={avatar} className='rounded-full w-10' />
                <p className='text-lg font-semibold'>
                    {uid}
                </p>
            </div>
            <div className='text-truncate'>
                {content}
            </div>
        </div>
    )
}