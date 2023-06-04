import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import Posts from '../../JsonData/Posts';
import moment from 'moment';
import './post.css';

export const Post = () => {
    return (
        <>
            {Posts.map((post, index) => (
                <div className="post" key={index}>
                    <div className="post-header" >
                        <div className="post-profile">
                            <img src={post.profileImage} alt="" srcset="" className='profile-image' />
                        </div>
                        <div className="post-details">
                            <div className="post-name">
                                <h4>{post.profileName}</h4>
                            </div>
                            <div className="post-time">
                                <p>{moment(post.postTime).fromNow()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="post-caption">
                        <p>{post.postCaption}</p>
                    </div>
                    <div className="post-img">
                        <img src={post.postImg} alt="" className='post-img' />
                    </div>
                    <hr />
                    <div className='post-footer'>
                        <div>
                            <FontAwesomeIcon icon={faThumbsUp} />Like
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faComment} />Comment
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faShare} />Share
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
