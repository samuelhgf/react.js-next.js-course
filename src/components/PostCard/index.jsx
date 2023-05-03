export const PostCard = ({ id, cover, title, body }) => (
    <div className='post' alt={title}>
        <img src={cover}></img>
        <div className='post-content'>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    </div>
);