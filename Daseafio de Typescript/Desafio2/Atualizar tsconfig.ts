/*Como podemos melhorar o esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}*/

//Resposta

enum emprego{atriz, padeiro}

type humano={nome:string, idade:number, profissao:emprego}

let pessoa1:humano = {

    nome:'Maria',
    idade: 29,
    profissao: emprego.atriz,

}

let pessoa2:humano = {

    nome: 'Roberto',
    idade: 19,
    profissao: emprego.padeiro, 

}

let pessoa3:humano = {

    nome: 'Laura',
    idade: 32,
    profissao: emprego.atriz,

} 

let pessoa4:humano = {

    nome: 'Carlos',
    idade: 19,
    profissao : emprego.padeiro,

}
