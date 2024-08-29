class Livro{
    constructor(titulo, autor, editora, anoPublicacao){
        this.titulo = titulo
        this.autor = autor
        this.editora = editora
        this.anoPublicacao = anoPublicacao
    }

    get valorDoTitulo(){
        return this.titulo
    }

    set novoTitulo(titulo){
        this.titulo = titulo
    }
        
    get valorDoAutor(){
        return this.autor
    }
     set novoAutor(autor){
        this.autor = autor
     }

     get valorDaEditora(){
        return this.editora
     }

     set novaEditora(editora){
        this.editora = editora
     }

     get valorDoAnoPublicao(){
        return this.anoPublicacao
     }

     set novoAnoDePublicacao(novoAnoDePublicacao){
        this.titulo = novoAnoDePublicacao
     }

}