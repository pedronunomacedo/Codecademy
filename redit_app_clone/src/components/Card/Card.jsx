import styled from "styled-components";
import './Card.css';

const Card = (props) => {
    return (
        <button className="subreddit_topic">
            <img src="https://api.adorable.io/avatars/25/Home" />
            <p>{props.topic.data.subreddit}</p>
            <img src={`https://api.adorable.io/avatars/10/${props.topic.data.subreddit}`} />
        </button>
    );
};

export default Card;