import axios from "axios";

let fetching = async () => {
    let myData = await axios.get('https://jsonplaceholder.typicode.com/posts')
    let dataTitle = await myData.data.forEach(post => { console.log(post.title)
        
    });
    
}

export {fetching}

