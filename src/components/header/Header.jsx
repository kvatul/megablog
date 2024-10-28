import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Logo, LogoutBtn } from "../index";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  console.log("authstatus", authStatus);

  const navigate = useNavigate();
  const navItems = [
    { title: "Home", path: "/", active: true },
    { title: "Login", path: "/login", active: !authStatus },
    { title: "Signup", path: "/signup", active: !authStatus },
    { title: "All Post", path: "/all-posts", active: authStatus },
    { title: "Add Post", path: "/add-post", active: authStatus },
  ];

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="80px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map(
              ({ title, path, active }, index) =>
                active && (
                  <li key={index}>
                    <button
                      className="inline-block round-full duration-200 hover:bg-blue-500 px-4 py-2"
                      onClick={() => {
                        navigate(path);
                      }}
                    >
                      {title}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;

/* 
{navItems.map(({ title, path, active }, index) => { */
