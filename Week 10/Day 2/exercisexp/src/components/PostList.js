
import myJson from '../myJson.json'

const PostList = (props) => {
  return(
    <>
    {myJson.map((item, index)=>{
        return(<div key={index}> 
            <h1>{item.title}</h1>
            <p>{item.content}</p>
            </div>
        )
    })}
    </>
  )
};


export default PostList