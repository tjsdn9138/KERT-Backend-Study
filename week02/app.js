const express = require('express');
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');

const posts = [
    { id: 1, title: 'Express 설치했어요', author: 'kim', content: '쓰기' },
    { id: 2, title: '서버가 안 켜져요', author: 'lee', content: '귀찮네요' },
    { id: 3, title: 'EJS 질문', author: 'park', content: '정말' }
];


function findPost(posts, id) {
    return posts.find((post) => post.id === id) ?? null;
}

app.get('/', (req, res) => {
    res.redirect('/posts');
})

app.get('/posts', (req, res) => {
    res.render('list', { posts });
});

app.get('/posts/new', (req, res) => {
    res.render('new');
})

app.get('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const post = findPost(posts, id);

    if (!post) {
        return res.status(404).send('글이 없습니다');
    }

    res.render('detail', { post });
});

app.use(express.urlencoded({ extended: false }));

function addPost(posts, title, author, content) {
    const maxId = posts.reduce((max, post) => Math.max(max, post.id), 0);
    const post = { id: maxId + 1, title, author, content };
    posts.push(post);
    return post;
}

app.post('/posts', (req, res) => {
    const { title, author, content } = req.body;
    const post = addPost(posts, title, author, content);
    res.redirect(`/posts/${post.id}`);
})

app.post('/posts/:id/delete', (req, res) => {
    const id = Number(req.params.id);
    const index = posts.findIndex((post) => post.id === id);

    if (index !== -1) {
        posts.splice(index, 1);
    }
    
    res.redirect('/posts');
})

app.listen(PORT, () => {
    console.log(`서버 실행 중: http://localhost:${PORT}`);
})