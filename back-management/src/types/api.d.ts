interface CaptchaAPIRes {
    msg: string,
    img: string,
    code: number,
    captchaEnabled: boolean,
    uuid: string
}

interface LoginAPIReq {
    username: string,
    password: string,
    code: string,
    uuid: string
}

interface LoginAPIRes {
    msg: string,
    code: string,
    token: string,
}