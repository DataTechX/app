
const Login = () => {
    const facebook = () => {
        window.open('http://192.168.1.61:5000/api/facebook', '_self');
    }

    return (
        <div className="login">
            <h1 className="loginTitle">เลือกการเข้าสู่ระบบ</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton facebook" onClick={facebook}><h2>Facebook</h2>
                    </div>
                </div>
                {/* <div className="center">
                    <div className="line" />
                    <div className="or">หรือ</div>
                </div>
                <div className="right">
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Password" />
                    <button className="submit">Login</button>
                </div> */}
            </div>
        </div>
    )
}

export default Login;