import { useMoralis } from 'react-moralis'
import { Formik } from 'formik'
import Navbar from '../../components/Navbar'

export default function CreatePost() {

    let { user } = useMoralis()

    return (
        <Formik
            initialValues={{
                title: '',
                content: ''
            }}
            onSubmit={(values, helpers) => {
                let headers = new Headers()
                headers.append('Content-Type', 'application/json')
                helpers.setSubmitting(true)
                fetch('https://civileducation.epiccodewizard2.repl.co/posts/add', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: values.title,
                        content: values.content,
                        avatar: 'data:image/png;base64,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',
                        userId: user.get('ethAddress')
                    }),
                    headers
                })
                console.log(JSON.stringify({
                    title: values.title,
                    content: values.content,
                    avatar: 'data:image/png;base64,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',
                    userId: user.get('ethAddress')
                }))

                helpers.setSubmitting(false)

            }}
        >
            {({ handleChange, handleSubmit, values, isSubmitting}) => {
                return (
                    <div>
                        <Navbar />
                        <form onSubmit={handleSubmit} className='m-3 p-3 shadow-md border border-gray-200 rounded-lg'>
                            <div className='text-center space-y-2 p-2'>
                                <h1 className='text-4xl font-bold'>
                                    Submit a Post Today!
                                </h1>
                                <p>
                                    Create a discussion. It can range from anything such as a discussion on policies, current events to school topics such as exam preperation
                                </p>
                            </div>
                            <div className='space-y-3 p-2'>
                                <div>
                                    <p className='py-2 justify-left text-left font-semibold text-xl'>
                                        Title:
                                    </p>
                                    <input name='title' className='outline-none w-3/5 max-w-xl px-4 py-2 border border-gray-400 rounded-lg' onChange={handleChange} value={values.title} />
                                </div>
                                <div>
                                    <p className='py-2 text-left justify-left font-semibold text-xl'>
                                        Content:
                                    </p>
                                    <textarea name='content' className='outline-none w-3/5 w-xl max-w-xl px-4 py-2 border border-gray-400 rounded-lg' onChange={handleChange} value={values.content} />
                                </div>
                            </div>
                            <div className='pt-4 pb-2'>
                                <button className='rounded-md font-medium py-2 px-5 bg-blue-400 text-white' type='submit' disabled={isSubmitting}>
                                    {!!!isSubmitting ?
                                        <p>Create a Post {isSubmitting ? 'Is Submitting' : 'Is Not Submitting'} </p>
                                        :
                                        <svg role="status" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>}
                                </button>
                            </div>
                        </form>
                    </div>
                )
            }}
        </Formik>
    )
}