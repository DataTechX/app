import { useLocation } from 'react-router-dom';
import { posts } from '../data/posts';

const Post = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[2];

    const post = posts.find(post => post.id === path);

    console.log(location);

    return (
        <div className="post">
            <img src="{post.img}" alt="" className='postImg'/>
            <h2 className='postTitle'>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default Post;