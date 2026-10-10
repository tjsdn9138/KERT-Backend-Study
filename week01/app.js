const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello Express!</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>나는 누구</h1><p>KERT 웹 백엔드 스터디 1기</p>');
});

app.use(express.static('public'));
app.get('/photo', (req, res) => {
    res.send('<img src="/sunglasscat.png" width="400">');
});

app.get('/time', (req, res) => {
    const now = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
    res.send(`<h1>접속 시간</h1><p>${now}</p>`);
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`서버 실행 중: http://localhost:${PORT}`);
});