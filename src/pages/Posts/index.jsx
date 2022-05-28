import { React} from 'react';


function PostPage() {
  fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(function(response){
    return response.json
  })
  .then((response)=> {
    console.log(response)
  })
  return (
    <div>
      <button onclick="request()"> Post </button>
    </div>
  )
}

export default PostPage