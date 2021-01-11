import React from 'react';
import { Link } from 'react-router-dom';

import UserCard from '../UserCard/UserCard.component';
import TagBadge from '../TagBadge/TagBadge.component';

import './PostItem.styles.css';

const PostItem = ({ post: { id,score, title, body, tagname, username, user_id, answer_count, comment_count, views, creation_date,owner,view_count } }) => {
    const answerVoteUp = (
        <div className='vote answer'>
            <span className='vote-count'>{answer_count}</span>
            <div className='count-text'>answers</div>
        </div>
    )

    const answerVoteDown = (
        <div className='vote'>
            <span className='vote-count'>{answer_count}</span>
            <div className='count-text'>answers</div>
        </div>
    )

    return (
        <div className='posts'>
            <div className='stats-container'>
                <div className='stats'>
                    <div className='vote'>
                        <span className='vote-count'>{score}</span>
                        <div className='count-text'>votes</div>
                    </div>
                    {answer_count > 0 ? answerVoteUp : answerVoteDown}
                    <div className='vote'>
                        <div className='count-text'>{view_count} views</div>
                    </div>
                </div>
            </div>
            <div className='summary'>
                <h3><Link to={`/questions/${id}`}>
                    {title}
                </Link></h3>
                <div className='brief'>
                    {title.substring(0, 200)}...
                </div>
                <TagBadge
                    tag_name={tagname}
                    size={'s-tag'}
                    float={'left'}
                />
                <UserCard
                    created_at={creation_date}
                    user_id={owner.user_id}
                    username ={owner.display_name}
                    img={owner.profile_image}
                    float={'right'}
                    backgroundColor={'transparent'}
                />
            </div>
        </div>

    )
};

export default PostItem;