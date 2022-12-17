import React, { ChangeEvent, useState } from "react";
import { Input, Space, Button } from "antd";
import styles from "./login.module.scss";
import "./login.less";

export default function Login() {
  const [usernameVal, setUsernameVal] = useState(""); // 定义用户输入信息
  const [passwordVal, setPasswordVal] = useState("");
  const [captchaVal, setCaptchaVal] = useState("");
  const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 修改 usernameVal 这个变量，为用户输入的那个值
    setUsernameVal(e.target.value);
  };
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 修改 usernameVal 这个变量，为用户输入的那个值
    setPasswordVal(e.target.value);
  };
  const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 修改 usernameVal 这个变量，为用户输入的那个值
    setCaptchaVal(e.target.value);
  };

  const goLogin = () => {
    console.log(usernameVal, passwordVal, captchaVal);
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBox + " loginbox"}>
        <div className={styles.title}>
          <h1>通用后台系统</h1>
          <p>Strive Everyday</p>
        </div>
        {/* 表单部分 */}
        <div className="form">
          <Space direction="vertical" style={{ display: "flex" }} size="large">
            <Input placeholder="用户名" onChange={usernameChange} />
            <Input.Password placeholder="密码" onChange={passwordChange} />
            <div className="captchaBox">
              <Input placeholder="验证码" onChange={captchaChange} />
              <div className="captchaImg">
                <img height="38" src="" alt="" />
              </div>
            </div>
            <Button type="primary" className="loginBtn" block onClick={goLogin}>
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
}
