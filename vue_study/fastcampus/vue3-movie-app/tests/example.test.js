import { double } from './example'

describe('그룹1', () => {
    // 그룹테스트 안에 모든 테스트가 시작하기 전에 단 한번 동작
    beforeAll(() => {
        console.log('beforeAll')
    })

    // 그룹테스트 안에 모든 테스트 이후에 단 한번 동작
    afterAll(() => {
        console.log('afterAll')
    })

    // 그룹테스트 안에 각각에 테스트가 동작하기 직전에 동작
    beforeEach(() => {
        console.log('beforeEach')
    })

    // 그룹테스트 안에 각각에 테스트가 동작한 이후에 동작
    afterEach(() => {
        console.log('afterEach')
    })

    test('첫 테스트', () => {
        console.log('첫 테스트')
        expect(123).toBe(123)
    })
    
    test('인수가 숫자 데이터입니다.', () => {
        console.log('인수가 숫자 데이터입니다.')
        expect(double(3)).toBe(6)
        expect(double(10)).toBe(20)
    })
    
    test('인수가 없습니다.', () => {
        console.log('인수가 없습니다.')
        expect(double()).toBe(0)
    })
})