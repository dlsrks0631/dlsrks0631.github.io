// Header.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

// Header Component
function Header({
  isLoggedIn,
  fullName,
  email,
  profileImage,
  onLogout,
  onToggleTheme,
  currentTheme,
  onToggleLanguage,
  currentLanguage,
}) {
  const [languageMenuVisible, setLanguageMenuVisible] = useState(false);
  const location = useLocation();

  const getTranslatedText = (text) => {
    const translations = {
      KR: {
        LOGIN: "로그인",
        LOGOUT: "로그아웃",
        "Light Mode": "라이트 모드",
        "Dark Mode": "다크 모드",
        Welcome: "환영합니다",
        Popular: "인기 영화",
      },
      EN: {
        LOGIN: "LOGIN",
        LOGOUT: "LOGOUT",
        "Light Mode": "Light Mode",
        "Dark Mode": "Dark Mode",
        Welcome: "Welcome",
        Popular: "Popular Movies",
      },
    };

    const languageTranslations =
      translations[currentLanguage] || translations["EN"];
    return languageTranslations[text] || text;
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuVisible(!languageMenuVisible);
  };

  // 현재 경로가 홈 페이지인지 확인
  const isHomePage = location.pathname === "/";

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          NETFLEX
        </Link>
        {/* 홈 페이지일 때만 나머지 헤더 내용 표시 */}
        {isHomePage && (
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <button className={styles.themeToggle} onClick={onToggleTheme}>
                  {currentTheme === "dark-mode" ? (
                    <i className="fa-solid fa-moon"></i>
                  ) : (
                    <i className="fa-sharp fa-regular fa-sun"></i> // 해와 달 아이콘 변경
                  )}
                </button>
              </li>
              <li className={styles.languageToggleWrapper}>
                <button
                  className={styles.languageToggle}
                  onClick={toggleLanguageMenu}
                >
                  <i className="fa-solid fa-globe"></i>
                </button>
                {languageMenuVisible && (
                  <div className={styles.languageMenu}>
                    <button onClick={() => onToggleLanguage("KR")}>
                      한국어
                    </button>
                    <button onClick={() => onToggleLanguage("EN")}>
                      English
                    </button>
                  </div>
                )}
              </li>
              <li>
                <Link to="/popular" className={styles.popularLink}>
                  {getTranslatedText("Popular")}
                </Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li className={styles.userInfo}>
                    {profileImage && (
                      <img
                        src={profileImage}
                        alt="Profile"
                        className={styles.profileImage}
                      />
                    )}
                    <span className={styles.username}>
                      {getTranslatedText("Welcome")}, {fullName}
                    </span>
                  </li>
                  <li>
                    <button className={styles.logoutButton} onClick={onLogout}>
                      {getTranslatedText("LOGOUT")}
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login" className={styles.loginLink}>
                    {getTranslatedText("LOGIN")}
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
