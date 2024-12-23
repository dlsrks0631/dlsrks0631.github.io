// Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function Login({ onLogin }) {
  // 일반 로그인용 상태
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  // 카카오 로그인 중 로딩 상태 관리
  const [isKakaoLoading, setIsKakaoLoading] = useState(false);

  // 라우터 이동 훅
  const navigate = useNavigate();

  /**
   * 일반 로그인 버튼 클릭 시
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password, keepLoggedIn);
    navigate("/");
  };

  /**
   * 카카오 로그인 버튼 클릭 시
   */
  const handleKakaoLogin = () => {
    if (!window.Kakao) {
      console.error("카카오 SDK가 로드되지 않았습니다.");
      alert("카카오 SDK가 로드되지 않았습니다. 나중에 다시 시도해주세요.");
      return;
    }

    setIsKakaoLoading(true);

    window.Kakao.Auth.login({
      scope: "profile_nickname, profile_image",
      success: function (authObj) {
        console.log("카카오 로그인 성공:", authObj);
        localStorage.setItem("kakaoAccessToken", authObj.access_token); // 액세스 토큰 저장

        window.Kakao.API.request({
          url: "/v2/user/me",
          success: function (res) {
            console.log("카카오 사용자 정보:", res);

            const kakaoId = res.id;
            const nickname =
              res.kakao_account?.profile?.nickname || "닉네임 없음";
            const userEmail = res.kakao_account?.email;
            const profileImage = res.kakao_account?.profile?.profile_image_url;

            // 출력부분
            console.log("Kakao ID:", kakaoId);
            console.log("Nickname:", nickname);
            console.log("Email:", userEmail);
            console.log("Profile Image URL:", profileImage);

            alert(`환영합니다, ${nickname}님!`);

            onLogin(
              userEmail || `kakao_${kakaoId}`,
              null,
              keepLoggedIn,
              nickname,
              profileImage
            );

            setIsKakaoLoading(false);
            navigate("/");
          },
          fail: function (error) {
            console.error("카카오 사용자 정보 요청 실패:", error);
            alert("사용자 정보 조회에 실패했습니다.");
            setIsKakaoLoading(false);
          },
        });
      },
      fail: function (err) {
        console.error("카카오 로그인 실패:", err);
        alert("카카오 로그인에 실패했습니다.");
        setIsKakaoLoading(false);
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>NETFLEX에 로그인</h2>

        {/* 일반 로그인 폼 */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.keepLoggedInGroup}>
            <input
              type="checkbox"
              checked={keepLoggedIn}
              onChange={(e) => setKeepLoggedIn(e.target.checked)}
            />
            <label>로그인 상태 유지</label>
          </div>

          <button type="submit" className={styles.loginButton}>
            로그인
          </button>

          {/* 카카오 로그인 버튼 */}
          <button
            onClick={handleKakaoLogin}
            className={styles.kakaoLoginButton}
            type="button" // 폼 제출 방지
            disabled={isKakaoLoading}
          >
            {isKakaoLoading ? "로그인 중..." : "카카오로 로그인"}
          </button>
        </form>

        {/* 회원가입 안내 */}
        <p className={styles.signupPrompt}>
          계정이 없으신가요?{" "}
          <Link to="/signup" className={styles.signupLink}>
            여기서 가입하세요
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
