import styled from "styled-components";
import './Subreddit.css';
import Card from '../../components/Card/Card.jsx';

const Subreddit = (props) => {
    return (
        <section id="subreddits">
            <h2 id="subreddits_title">Subreddits</h2>
            {
                props.subreddits.map((topic, index) => (
                    <Card key={index} topic={topic} />)
                )
            }
        </section>
        
    );
};

export default Subreddit;