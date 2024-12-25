// App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Popular from "./routes/Popular";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [theme, setTheme] = useState("dark-mode");
  const [language, setLanguage] = useState("KR");

  // 로그인 상태와 테마, 언어를 로컬 스토리지와 세션 스토리지에서 가져오기
  useEffect(() => {
    // localStorage에서 로그인 상태 및 사용자 정보 로드
    const storedLoginStatusLocal = localStorage.getItem("isLoggedIn");
    const storedFullNameLocal = localStorage.getItem("fullName");
    const storedEmailLocal = localStorage.getItem("email");
    const storedProfileImageLocal = localStorage.getItem("profileImage");

    // sessionStorage에서 로그인 상태 및 사용자 정보 로드
    const storedLoginStatusSession = sessionStorage.getItem("isLoggedIn");
    const storedFullNameSession = sessionStorage.getItem("fullName");
    const storedEmailSession = sessionStorage.getItem("email");
    const storedProfileImageSession = sessionStorage.getItem("profileImage");

    // localStorage에 로그인 상태가 "true"인 경우
    if (storedLoginStatusLocal === "true" && storedFullNameLocal) {
      setIsLoggedIn(true);
      setFullName(storedFullNameLocal);
      setEmail(storedEmailLocal || "");
      setProfileImage(storedProfileImageLocal || "");
    }
    // sessionStorage에 로그인 상태가 "true"인 경우
    else if (storedLoginStatusSession === "true" && storedFullNameSession) {
      setIsLoggedIn(true);
      setFullName(storedFullNameSession);
      setEmail(storedEmailSession || "");
      setProfileImage(storedProfileImageSession || "");
    }

    // 테마 및 언어 설정
    const storedTheme = localStorage.getItem("theme") || "dark-mode";
    const storedLanguage = localStorage.getItem("language") || "KR";

    setTheme(storedTheme);
    setLanguage(storedLanguage);
    document.documentElement.className = storedTheme; // 테마 반영
  }, []);

  // 카카오 SDK 초기화
  useEffect(() => {
    const kakaoKey = process.env.REACT_APP_KAKAO_JS_KEY;
    console.log("Kakao Key:", kakaoKey); // 디버깅용 로그
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        if (!kakaoKey) {
          console.error("카카오 JavaScript 키가 설정되지 않았습니다.");
          return;
        }
        window.Kakao.init(kakaoKey);
        console.log("카카오 SDK 초기화 상태:", window.Kakao.isInitialized());
      }
    } else {
      console.error(
        "카카오 SDK가 로드되지 않았습니다. index.html에 SDK 스크립트를 추가했는지 확인하세요."
      );
    }
  }, []);

  // 회원가입 처리
  const handleSignup = (email, password, fullName) => {
    // 회원가입 시 로컬스토리지에 사용자 정보 저장
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("fullName", fullName);

    // 로그인 상태로 변경
    setIsLoggedIn(true);
    setFullName(fullName);
    setEmail(email);
    setProfileImage("");
    localStorage.setItem("isLoggedIn", "true");
  };

  /**
   * 로그인 처리 함수
   * @param {string} email - 사용자 이메일
   * @param {string|null} password - 사용자 비밀번호 (일반 로그인)
   * @param {boolean} keepLoggedIn - 로그인 상태 유지 여부
   * @param {string} nickname - 카카오 닉네임 (카카오 로그인)
   * @param {string} profileImageURL - 카카오 프로필 이미지 URL (카카오 로그인)
   */
  const handleLogin = (
    email,
    password,
    keepLoggedIn,
    nickname = "",
    profileImageURL = ""
  ) => {
    if (password) {
      // 일반 로그인 로직
      const storedEmail = localStorage.getItem("email");
      const storedPassword = localStorage.getItem("password");
      const storedFullName = localStorage.getItem("fullName");

      if (email === storedEmail && password === storedPassword) {
        setIsLoggedIn(true);
        setFullName(storedFullName);
        setEmail(email);
        setProfileImage("");
        if (keepLoggedIn) {
          localStorage.setItem("isLoggedIn", "true");
        } else {
          sessionStorage.setItem("isLoggedIn", "true"); // 세션 저장
        }
      } else {
        alert("이메일 또는 비밀번호가 올바르지 않습니다.");
      }
    } else {
      // 카카오 로그인 로직
      setIsLoggedIn(true);
      setFullName(nickname);
      setEmail(email);
      setProfileImage(profileImageURL);
      if (keepLoggedIn) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("fullName", nickname);
        localStorage.setItem("email", email);
        localStorage.setItem("profileImage", profileImageURL);
      } else {
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("fullName", nickname);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("profileImage", profileImageURL);
      }
    }
  };

  // 로그아웃 처리
  const handleLogout = () => {
    const accessToken = window.Kakao.Auth.getAccessToken();
    console.log("현재 액세스 토큰:", accessToken);

    if (window.Kakao && accessToken) {
      window.Kakao.Auth.logout(
        () => {
          console.log("카카오 로그아웃 성공");
          localStorage.removeItem("kakaoAccessToken");
          sessionStorage.removeItem("kakaoAccessToken");
        },
        (error) => {
          console.error("카카오 로그아웃 실패:", error);
          alert("카카오 로그아웃에 실패했습니다.");
        }
      );
    }

    // 일반 로그아웃 처리
    setIsLoggedIn(false);
    setFullName("");
    setEmail("");
    setProfileImage("");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("fullName");
    localStorage.removeItem("email");
    localStorage.removeItem("profileImage");
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("fullName");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("profileImage");
  };

  // 테마 토글 처리
  const toggleTheme = () => {
    const newTheme = theme === "dark-mode" ? "light-mode" : "dark-mode";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  // 언어 토글 처리
  const toggleLanguage = () => {
    const newLanguage = language === "KR" ? "EN" : "KR";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <Router basename="/moviedb">
      {/* Header 컴포넌트를 전체 페이지에 고정 */}
      <Header
        isLoggedIn={isLoggedIn}
        fullName={fullName}
        email={email}
        profileImage={profileImage}
        onLogout={handleLogout}
        onToggleTheme={toggleTheme}
        currentTheme={theme}
        onToggleLanguage={toggleLanguage}
        currentLanguage={language}
      />

      {/* 페이지 라우팅 */}
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route
          path="/"
          element={
            <Home
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
              theme={theme}
              language={language}
              onToggleTheme={toggleTheme}
              onToggleLanguage={toggleLanguage}
              fullName={fullName}
              email={email}
              profileImage={profileImage}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
