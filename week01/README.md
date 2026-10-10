# KERT 웹 백엔드 스터디 - 1주차

## 실행 방법

1. 레포를 clone 하고 `week01` 폴더로 이동합니다.
   ```
   git clone https://github.com/tjsdn9138/KERT-Backend-Study.git
   cd KERT-Backend-Study/week01
   ```
2. 패키지를 설치합니다. (Node.js 필요)
   ```
   npm install
   ```
3. 개발 서버를 실행합니다. (nodemon 으로 파일 수정 시 자동 재시작)
   ```
   npm run dev
   ```
4. 브라우저에서 `http://localhost:3000` 에 접속합니다.

## 구현한 라우트

| 경로 | 설명 |
| --- | --- |
| `/` | `Hello Express!` 제목을 보여줍니다. |
| `/about` | 자기소개(`나는 누구`, KERT 웹 백엔드 스터디 1기)를 보여줍니다. |
| `/photo` | `public/sunglasscat.png` 이미지를 보여줍니다. (`public` 폴더는 `express.static` 으로 공개) |
| `/time` | 접속한 시각을 한국 시간(Asia/Seoul)으로 보여줍니다. |

## 연습 문제

`node practice.js` 실행 결과의 마지막 줄:

```
10 / 10 통과
```
