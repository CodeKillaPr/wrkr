import { useState } from "react";
// import Pattern from "./component/background";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "./assets/api";
import MyNameIs from "./component/mynameis_card";

function Form() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    is_admin: false,
  });

  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    if (name === "is_admin") {
      setRegisterData({
        ...registerData,
        is_admin_input: value,
        is_admin: value.toLowerCase() === "yes",
      });
    } else {
      setRegisterData({ ...registerData, [name]: value });
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(loginData);
      console.log("Inicio de sesión exitoso:", data);
      localStorage.setItem("token", data.access_token);
      if (data.is_admin) {
        navigate("/patron");
      } else {
        navigate("/wrkr");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(registerData);
      console.log("Registro exitoso:", data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <StyledWrapper>
      {/* <PatternWrapper>
        <Pattern />
      </PatternWrapper> */}
      <div className="wrapper bg-gradient-to-tl from-gray-500 via-gray-600 to-gray-700">
        <div className="fixed xs:left-[0rem] xs:h-[15rem] xs:top-[1rem] sm:left-[0rem] sm:top-[0rem] md:top-[15rem] md:left-[2rem] lg:left-[10rem] lg:top-[15rem] xl:left-[20rem] xl:top-[20rem] opacity-[100%] duration-300">
          <MyNameIs />
        </div>
        <div className="card-switch">
          <label className="switch">
            <input className="toggle" type="checkbox" />
            <span className="slider" />
            <span className="card-side " />
            <div className="flip-card__inner ">
              <div className="flip-card__front bg-gray-800">
                <div className="title">Log in</div>
                <form
                  id="loginForm"
                  className="flip-card__form"
                  onSubmit={handleLoginSubmit}
                >
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="flip-card__input hover:scale-105 duration-300 bg-gray-600"
                    value={loginData.email}
                    onChange={handleLoginChange}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="flip-card__input hover:scale-105 duration-300 bg-gray-600"
                    value={loginData.password}
                    onChange={handleLoginChange}
                  />
                  <button className="flip-card__btn hover:scale-95 hover:bg-blue-500 focus:bg-blue-500 dark:bg-gray-700">
                    let&apos;s go!
                  </button>
                </form>
              </div>
              <div className="flip-card__back bg-gray-800">
                <div className="title">Sign up</div>
                <form
                  id="registerForm"
                  className="flip-card__form"
                  onSubmit={handleRegisterSubmit}
                >
                  <input
                    type="name"
                    placeholder="Name"
                    name="first_name"
                    className="flip-card__input hover:scale-105 duration-300 bg-gray-600"
                    value={registerData.first_name}
                    onChange={handleRegisterChange}
                  />
                  <input
                    type="name"
                    placeholder="Last Name(Optional)"
                    name="last_name"
                    className="flip-card__input hover:scale-105 duration-300 bg-gray-600"
                    value={registerData.last_name}
                    onChange={handleRegisterChange}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="flip-card__input hover:scale-105 duration-300 bg-gray-600"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="flip-card__input hover:scale-105 duration-300 bg-gray-600"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                  />
                  <input
                    type="text"
                    name="is_admin"
                    placeholder="Patron (yes/no)"
                    value={registerData.is_admin_input || ""}
                    onChange={handleRegisterChange}
                    className="flip-card__input hover:scale-105 duration-300 bg-gray-600"
                  />
                  <button
                    className="flip-card__btn hover:scale-95 hover:bg-blue-500 focus:bg-blue-500 duration-200 dark:bg-gray-700"
                    onClick={() => document.querySelector(".toggle").click()}
                  >
                    Confirm!
                  </button>
                </form>
              </div>
            </div>
          </label>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative;
  .wrapper {
    --input-focus: #2d8cf0;
    --font-color: #fefefe;
    --font-color-sub: #7e7e7e;
    --bg-color: #111;
    --bg-color-alt: #7e7e7e;
    --main-color: #fefefe;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
    z-index: 1;
  }

  /* switch card */
  .switch {
    transform: translateY(-200px);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 50px;
    height: 20px;
    z-index: 2;
  }

  .card-side::before {
    position: absolute;
    content: "Log in";
    left: -70px;
    top: 0;
    width: 100px;
    text-decoration: underline;
    color: var(--font-color);
    font-weight: 600;
    z-index: 2;
  }

  .card-side::after {
    position: absolute;
    content: "Sign up";
    left: 70px;
    top: 0;
    width: 100px;
    text-decoration: none;
    color: var(--font-color);
    font-weight: 600;
    z-index: 2;
  }

  .toggle {
    opacity: 0;
    width: 0;
    height: 0;
    z-index: 2;
  }

  .slider {
    box-sizing: border-box;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    background-color: #1f2937;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.3s;
    z-index: 2;
  }

  .slider:before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    border: 2px solid var(--main-color);
    border-radius: 5px;
    left: -2px;
    bottom: 2px;
    background-color: #1f2937;
    box-shadow: 0 3px 0 var(--main-color);
    transition: 0.3s;
    z-index: 2;
  }

  .toggle:checked + .slider {
    background-color: var(--input-focus);
  }

  .toggle:checked + .slider:before {
    transform: translateX(30px);
  }

  .toggle:checked ~ .card-side:before {
    text-decoration: none;
  }

  .toggle:checked ~ .card-side:after {
    text-decoration: underline;
  }

  /* card */

  .flip-card__inner {
    width: 300px;
    height: 350px;
    position: relative;
    background-color: transparent;
    perspective: 1000px;
    /* width: 100%;
    height: 100%; */
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    z-index: 2;
  }

  .toggle:checked ~ .flip-card__inner {
    transform: rotateY(180deg);
  }

  .toggle:checked ~ .flip-card__front {
    box-shadow: none;
  }

  .flip-card__front,
  .flip-card__back {
    padding: 20px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    gap: 20px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    z-index: 2;
  }

  .flip-card__back {
    width: 100%;
    transform: rotateY(180deg);
  }

  .flip-card__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    z-index: 2;
  }

  .title {
    margin: 20px 0 20px 0;
    font-size: 25px;
    font-weight: 900;
    text-align: center;
    color: var(--main-color);
    z-index: 2;
  }

  .flip-card__input {
    width: 250px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 15px;
    font-weight: 600;
    color: white !important;
    padding: 5px 10px;
    outline: none;
    z-index: 2;
  }

  .flip-card__input::placeholder {
    color: var(--font-color-sub);
    opacity: 0.8;
  }

  .flip-card__input:focus {
    border: 2px solid var(--input-focus);
  }

  .flip-card__btn:active,
  .button-confirm:active {
    box-shadow: 0px 0px var(--main-color);
    transform: translate(3px, 3px);
  }

  .flip-card__btn {
    margin: 20px 0 20px 0;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 17px;
    font-weight: 600;
    color: var(--font-color);
    cursor: pointer;
    z-index: 2;
  }
`;

// const PatternWrapper = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 0;
// `;

export default Form;
