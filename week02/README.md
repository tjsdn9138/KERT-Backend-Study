# KERT 웹 백엔드 스터디 - 2주차

## 실행 방법

```bash
git clone <내 레포 주소>
cd KERT-Backend-Study/week02
git switch Feat/ejs-board
npm install
node app.js
```

브라우저에서 http://localhost:3000/posts 에 접속합니다.
점검은 서버를 켠 상태에서 터미널을 하나 더 열고 `node check.js` 를 실행합니다.

## 구현한 라우트

| 메서드 | 주소 | 하는 일 |
|---|---|---|
| GET | `/posts` | 글 목록 (`list.ejs`) |
| GET | `/posts/new` | 글쓰기 폼 (`new.ejs`) |
| GET | `/posts/:id` | 글 상세 (`detail.ejs`), 없는 글은 404 |
| POST | `/posts` | 폼 데이터로 글 저장 후 새 글 상세로 redirect |
| POST | `/posts/:id/delete` | 글 삭제 후 `/posts` 로 redirect |

## 점검 결과

```
필수 14 / 14 통과
도전 0 / 3 통과
```

## (도전) 구현한 것

구현한 도전 과제 없음
