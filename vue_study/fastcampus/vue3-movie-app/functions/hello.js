exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'jjseo',
            age: 50,
            email: 'sssppoollsem@naver.com'
        })
    }
}