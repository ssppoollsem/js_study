// 로그인 했는지 검사하는 미들웨어
export default function({ store, redirect }) {
    if(!store.state.users.me) {
        // 로그인 안되어있으면 메인 페이지로 보냄 
        redirect('/');
    }
}