const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
    const response = await fetch(`${API_ROOT}${subreddit}.json`);

    const json = await response.json();

    return json.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
    const response = await fetch(`${API_ROOT}/subreddits.json`);

    const json = await response.json();

    return json.data.children.map((subreddit) => subreddit.data);
};

export const getPostComments = async (postlink) => {
    const response = await fetch(`${API_ROOT}${postlink}.json`);

    const json = await response.json();

    return json[1].data.children.map((comment) => comment.data); // json[0] -> post description ; json[1] -> post comments
};