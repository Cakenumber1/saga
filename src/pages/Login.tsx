import {loginRequest} from "../store/auth/actions";
import {connect} from "react-redux";
import {useRef} from "react";

const Login = (props: any) => {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const callback = (data: any) => {
        console.log('write in cookies')
    }

    const login = () => {
        let data: any = {
            values: {
                email: emailRef!.current!.value,
                password: passwordRef!.current!.value
            },
            callback
        }
        props.login(data)
    }
    return (
        <div>
            <label htmlFor="email">email</label>
            <input id="email" type="email" name="email" ref={emailRef}/>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" ref={passwordRef}/>
            <button type="button" onClick={login}>sing in</button>
        </div>
    )

}

const mapDispatchToProps = (dispatch: any) => ({
    login: (params: any) => dispatch(loginRequest((params)))
})

export default connect(null, mapDispatchToProps)(Login)
