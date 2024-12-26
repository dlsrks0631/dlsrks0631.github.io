# Movie App

React를 사용하여 영화 정보를 제공하는 웹 애플리케이션입니다.

## 프로젝트 개요

- **기능**: 인기 영화 목록 보기, 검색, 정렬, 즐겨찾기 추가/제거, 사용자 인증(카카오 로그인)
- **사용 기술**:
  - React
  - TMDB API (영화 데이터 제공)
  - 환경 변수 관리 (.env)
  - CORS 해결을 위한 Express 서버 (백엔드)
  - GitHub Pages를 통한 배포

---

## 설치 및 실행

### 1. 프로젝트 클론

```bash
git clone https://github.com/dlsrks0631/dlsrks0631.github.io.git movie-app
cd movie-app
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경 변수 설정

`.env-prod`, `.env-dev` 파일을 작성해야 합니다.

#### `.env-dev`

```env
IP_ADDRESS=localhost
PORT=3000
REACT_APP_TMDB_API_KEY=YOUR_API_KEY
REACT_APP_KAKAO_JS_KEY=YOUR_KAKAO_JS_KEY
REACT_APP_DEFAULT_LANGUAGE=KR
```

#### `.env-prod`

```env
IP_ADDRESS=your-production-server-ip
PORT=80
REACT_APP_TMDB_API_KEY=YOUR_API_KEY
REACT_APP_KAKAO_JS_KEY=YOUR_KAKAO_JS_KEY
REACT_APP_DEFAULT_LANGUAGE=EN
```

**주의**: `.env`, `.env-dev`, `.env-prod` 파일은 `.gitignore`에 포함되어야 합니다.

---

## 명령어

### 개발 서버 실행 (Development)

```bash
npm start
```

- 로컬 환경에서 개발 서버를 실행합니다. `http://localhost:3000`에서 앱을 확인할 수 있습니다.

### 배포 빌드 생성 (Production)

```bash
npm run build:prod
```

- 최적화된 프로덕션 빌드를 생성합니다. `build/` 폴더에 생성됩니다.

### 개발용 빌드 생성 (Development)

```bash
npm run build:dev
```

- 개발 환경용 빌드를 생성합니다.

### GitHub Pages에 배포

```bash
npm run deploy
```

- `predeploy` 스크립트를 실행한 후 GitHub Pages로 배포합니다.

---

## 프로젝트 구조

```
movie-app/
├── src/
│   ├── components/      # 재사용 가능한 컴포넌트
│   ├── routes/          # 페이지별 라우팅 컴포넌트
│   ├── App.js           # 메인 App 컴포넌트
│   └── index.js         # 진입점 파일
├── public/
├── .env                 # 환경 변수 파일
├── package.json
├── README.md
└── .gitignore
```

---

## 주의 사항

1. `.env` 파일을 반드시 설정한 후 실행하세요.
2. 프로젝트가 GitHub Pages에서 정상적으로 동작하려면 `package.json`의 `homepage` 필드를 정확히 설정해야 합니다.
   - 예: `"homepage": "https://your-username.github.io/movie-app"`
