const sleep = n => new Promise(resolve => setTimeout(resolve, n));

//{id, title, body}

const posts = [
    {
        id: 1,
        title: 'redux thunk api tutorial',
        body: '리덕스 미들웨어 직접 만들어 보기'
    },
    {
        id: 2,
        title: 'redux thunk api tutorial2',
        body: '리덕스 미들웨어 직접 만들어 보기2'
    },
    {
        id: 3,
        title: 'redux thunk api tutorial3',
        body: '리덕스 미들웨어 직접 만들어 보기3'
    }
];

export const getPosts = async () => {
    await sleep(500);
    return posts;
};

export const getPostById = async (id) => {
    await sleep(500);
    return posts.find(post => post.id === id);
};