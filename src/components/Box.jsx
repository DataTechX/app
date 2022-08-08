import { Link } from "react-router-dom";

const Box = ({ post }) => {
    return (
        <div className="box">
            <div className="box-header">
                <Link className="link" to={`/post/${post.id}`}>
                    {/* {post.title} */}
                    <img src={post.img} alt="" className="img"/>
                    <h2>{post.desc}</h2>
                </Link>
            </div>
            <div className="box-body">
                <p>{post.body}</p>
            </div>
        </div>
    );
}

export default Box;