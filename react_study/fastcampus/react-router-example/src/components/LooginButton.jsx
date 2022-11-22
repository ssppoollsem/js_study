import { useNavigate } from 'react-router-dom';

export default function LoginButton() {
    const history = useNavigate();
    function login() {
        setTimeout(() => {
            // 페이지를 이동
            history('/');
        }, 1000);
    }
    return <button onClick={login}>로그인하기</button>;
}
