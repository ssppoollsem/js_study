
// https://docs.cypress.io/guides/references/assertions#BDD-Assertions
// 검색 (메인) 페이지로 접근한 후,
// 영화 제목을 'frozen'으로, 표시 개수를 30개로 입력하고,
// 'Apply' 버튼을 클릭해 영화 목록을 검색합니다.
// 영화 목록 30개가 잘 출력됩니다.
// 영화 목록에서 'Frozen 2' (겨울왕국2) 영화 아이템을 클릭하면,
// 영화 상세 정보 페이지로 이동합니다.
// 상세 정보 페이지에서 정보를 확인할 수 있습니다. 

describe('영화 검색(겨울왕국2', () => {
    it('검색 페이지로 접근합니다', () => {
        cy.visit('/') // 메인페이지로 접근헸을떄
        cy.get('header .nav-link.active') // 해당 셀렉트를 찾아서
            .contains('Search') // Search라는 텍스트가 포함되어있는지 확인
    })
    it('영화를 검색합니다', () => {
        cy.get('input.form-control')
            .type('frozen') // 인풋요소에 type를 타이핑 하는 역할
        cy.get('select.form-select:nth-child(2)')
            .select('30') // 셀렉트 데이터를 선택하는 역할
        cy.get('button.btn')
            .contains('Apply')
            .click()
        cy.wait(2000) // 클릭하고 나서 목록이 다 출력될때까지 2초를 기다림  
        cy.get('.movie')
            .should('have.length', 30) // movie가 설정한 30개까지 잘 출력되는지 확인 
    })
    it('겨울왕국2 영화 아이템을 선택합니다', () => {
        cy.get('.movie .title')
            .contains('Frozen II')
            .click() // 겨울왕국2를 클릭한다.
    })
    it('영화 상세 정보를 확인합니다.', () => {
        cy.url() // http://localhost:8080/movie/tt4520988
            .should('include', '/movie/tt4520988')
        cy.wait(1000)
        cy.get('header .nav-link.active')
            .contains('Movie')
        cy.get('.title')
            .contains('Frozen II')
    })
})