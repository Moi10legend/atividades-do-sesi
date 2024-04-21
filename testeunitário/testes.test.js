const { beforeEach } = require('node:test')
const {soma} = require('./testeInformal')


describe('Funções matemáticas', () => {
    beforeAll(() => {
        console.log('Ínicio dos testes')
    })
    // beforeEach(() => {
    //     console.log('Próximo teste')
    //})
    it('Soma de dois números Acerto', () => {
        expect(soma(2,2)).toBe(4)
    })
    it('Soma de dois números Falha', () => {
        expect(soma(2,2)).toBe(3)
    })
})
