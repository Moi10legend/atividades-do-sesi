console.log('Olá julia')

class pessoa {
    nome;
    idade;
    genero;
}

const julia = new pessoa()

julia.nome = 'Júlia vitória'
julia.idade = 17
julia.genero = 'Feminino'

console.log(`${julia.nome} é ${julia.genero} e tem ${julia.idade} anos`)

const moises = new pessoa()

moises.nome = 'Moisés Freire'
moises.idade = 17
moises.genero = 'masculino'

console.log(moises)