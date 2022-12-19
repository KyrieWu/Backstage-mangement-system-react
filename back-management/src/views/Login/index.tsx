import React, { ChangeEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Space, Button, message } from "antd";
import styles from "./login.module.scss";
import "./login.less";

import { CaptchaAPI, LoginAPI } from "@/request/api";

export default function Login() {
  const navigateTo = useNavigate();
  useEffect(() => {
    getCaptchaImg();
  }, []);

  const [usernameVal, setUsernameVal] = useState(""); // 定义用户输入信息
  const [passwordVal, setPasswordVal] = useState("");
  const [captchaVal, setCaptchaVal] = useState("");
  // 验证码图片信息
  const [captchaImg, setCaptchaImg] = useState("");
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

  const goLogin = async () => {
    console.log(usernameVal, passwordVal, captchaVal);

    // 验证是否有空值
    if (!usernameVal.trim() || !passwordVal.trim || !captchaVal.trim()) {
      message.warning("请完整输入信息!");
      return;
    } else {
      // qdtest1  123456
      let loginAPIRes = await LoginAPI({
        username: usernameVal,
        password: passwordVal,
        code: captchaVal,
        uuid: localStorage.getItem("uuid") as string,
      });
      console.log(loginAPIRes);
      if (loginAPIRes.code == "200") {
        message.success("登录成功");
        localStorage.setItem("wu-back-management-token", loginAPIRes.token);
        navigateTo("/page1");
        localStorage.removeItem("uuid");
      }
    }
  };

  const getCaptchaImg = async () => {
    let captchaAPIRes = await CaptchaAPI();
    if (captchaAPIRes.code == 200) {
      setCaptchaImg(`data:image/gif;base64,${captchaAPIRes.img}`);
      localStorage.setItem("uuid", captchaAPIRes.uuid);
    }
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
              <div className="captchaImg" onClick={getCaptchaImg}>
                <img height="38" src={captchaImg} alt="" />
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
