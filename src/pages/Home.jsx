import Box from '../components/Box'
import { posts } from "../data/posts";

const Home = () => {
    return (
        <div className="home">
            {posts.map(post => (
                <Box key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Home;