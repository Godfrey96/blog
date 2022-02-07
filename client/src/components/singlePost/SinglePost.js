import axios from 'axios'
import { useLocation, Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import './singlepost.css'
import { Context } from '../../context/Context'

const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})
    const { user } = useContext(Context)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [updateMode, setUpdateMode] = useState(false)

    const PF = 'http://localhost:5000/uploads/'

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/api/posts/" + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDescription(res.data.description)
        };
        getPost()
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete(`/api/posts/${post._id}`, {
                data: { username: user.username }
            });
            window.location.replace('/')
        } catch (error) {

        }
    }

    const handlerUpdate = async () => {
        try {
            await axios.put(`/api/posts/${post._id}`, {
                username: user.username,
                title,
                description
            });
            setUpdateMode(false)
            // window.location.reload()
        } catch (err) {

        }
    }

    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                {post.photo && (
                    <img
                        className='singlePostImg'
                        src={PF + post.photo}
                        alt=''
                    />
                )}
                {
                    updateMode ? (
                        <input
                            type='text'
                            value={title}
                            autoFocus
                            className='singlePostTitleInput'
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    ) : (
                        <h1 className='singlePostTitle'>
                            {title}
                            {post.username === user?.username && (
                                <div className='singleEdit'>
                                    <i className='singlePostIcon far fa-edit' onClick={() => setUpdateMode(true)}></i>
                                    <i className='singlePostIcon far fa-trash-alt' onClick={handleDelete}></i>
                                </div>
                            )}
                        </h1>
                    )
                }

                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>
                        Author:
                        <Link to={`/?user=${post.username}`} className='link'>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className='singlePostDate'>
                        {new Date(post.createdAt).toDateString()}
                    </span>
                </div>
                {updateMode ? (
                    <textarea
                        className='singlePostDescInput'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                ) : (
                    <p className='singlePostDesc'>{description}</p>
                )}
                {updateMode && (
                    <button className='singlePostButton' onClick={handlerUpdate}>Update</button>
                )}
            </div>
        </div>
    )
}

export default SinglePost
