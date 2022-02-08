export default {
    install(app) {
        // vue3 플러그인 탭 참고
        app.config.globalProperties.$loadImage = src => {
            return new Promise( resolve => {
                const img = document.createElement('img');
                img.src = src
                img.addEventListener('load', () => {
                    // 완료!
                    resolve()
                })
            })
        }
    }
}