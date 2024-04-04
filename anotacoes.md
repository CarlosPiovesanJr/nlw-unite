#HTML 
    -tags
    -Atributos 


#CSS


#JS 

//objeto javascript = {}
const participante = {
    nome: "Junior Piovesan",
    email: "junior.piovesan@gmail.com",
    dataInscricao: new Date(2024, 3, 1, 22, 35),
    dataCheckIn: new Date(2024, 3, 1, 22, 00),
}

//array
let participantes = [
    {
        nome: "Junior Piovesan",
        email: "junior.piovesan@gmail.com",
        dataInscricao: new Date(2024, 3, 1, 22, 35),
        dataCheckIn: new Date(2024, 3, 1, 22, 00),
    }
]
 //Estrutura de repetição - loop

for (let participante of participantes) {
    output = output + criarNovoParticipante(participante);
  }