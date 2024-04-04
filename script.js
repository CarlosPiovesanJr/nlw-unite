let participantes = [
  {
    nome: "Junior Piovesan",
    email: "junior.piovesan@gmail.com",
    dataInscricao: new Date(2024, 3, 1, 22, 35),
    dataCheckIn: null,
  },
  {
    nome: "Micheli Vitter",
    email: "michivitter@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 13, 15),
    dataCheckIn: new Date(2024, 2, 25, 22, 20),
  },
  {
    nome: "Fulano da Silva",
    email: "fulano.silva@gmail.com",
    dataInscricao: new Date(2024, 3, 5, 10, 0),
    dataCheckIn: new Date(2024, 3, 5, 9, 45),
  },
  {
    nome: "Ciclano Santos",
    email: "ciclano.santos@gmail.com",
    dataInscricao: new Date(2024, 3, 10, 15, 30),
    dataCheckIn: new Date(2024, 3, 11, 8, 0),
  },
  {
    nome: "Beltrano Oliveira",
    email: "beltrano.oliveira@gmail.com",
    dataInscricao: new Date(2024, 3, 12, 18, 45),
    dataCheckIn: new Date(2024, 3, 12, 18, 30),
  },
  {
    nome: "Maria Souza",
    email: "maria.souza@gmail.com",
    dataInscricao: new Date(2024, 3, 20, 11, 20),
    dataCheckIn: new Date(2024, 3, 20, 11, 15),
  },
  {
    nome: "João Pereira",
    email: "joao.pereira@gmail.com",
    dataInscricao: new Date(2024, 3, 21, 19, 0),
    dataCheckIn: new Date(2024, 3, 22, 8, 30),
  },
  {
    nome: "Ana Martins",
    email: "ana.martins@gmail.com",
    dataInscricao: new Date(2024, 3, 25, 14, 10),
    dataCheckIn: new Date(2024, 3, 25, 14, 0),
  },
  {
    nome: "Pedro Mendes",
    email: "pedro.mendes@gmail.com",
    dataInscricao: new Date(2024, 3, 28, 9, 30),
    dataCheckIn: new Date(2024, 3, 28, 9, 20),
  },
  {
    nome: "Carla Lima",
    email: "carla.lima@gmail.com",
    dataInscricao: new Date(2024, 3, 30, 17, 45),
    dataCheckIn: new Date(2024, 3, 30, 17, 30),
  },
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao);

  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn);

  if (participante.dataCheckIn == null) {
    dataCheckIn = `
    <button
    data-email="${participante.email}" 
    onclick="fazerCheckIn(event)">
    Confirmar check-in
    </button>
    `;
  }

  return `
    <tr>
            <td>
                <strong>
                    ${participante.nome}
                </strong>
                <br>
                <small>
                    ${participante.email}
                </small>
            </td>
            <td> ${dataInscricao}</td>
            <td> ${dataCheckIn}</td>
    </tr>
    `;
};

const atualizarLIsta = (participantes) => {
  let output = "";
  //Estrutura de repetição - loop

  for (let participante of participantes) {
    output = output + criarNovoParticipante(participante);
  }

  //substituir informaçãod do html
  document.querySelector("tbody").innerHTML = output;
}; //arrow function

atualizarLIsta(participantes);

const adicionarParticipante = (event) => {
  event.preventDefault();

  const dadosDoFormulario = new FormData(event.target);

  const participante = {
    nome: dadosDoFormulario.get("nome"),
    email: dadosDoFormulario.get("email"),
    dataInscricao: new Date(),
    dataCheckIn: null,
  };

  //verificar se o participante já existe
  const participanteExiste = participantes.find((p) => p.email == participante.email
  );

  if (participanteExiste) {
    alert("Email já cadastrado!");
    return;
  }

  participantes = [participante, ...participantes];
  atualizarLIsta(participantes);

  //limpar o formulario
  event.target.querySelector('[name="nome"]').value = "";
  event.target.querySelector('[name="email"]').value = "";
};

const fazerCheckIn = (event) => {
  //confirmar se realmente quer o check-in
  const mensagemConfirmacao = "Tem certeza que deseja fazer o check-in?";
  if (confirm(mensagemConfirmacao) == false) {
    return;
  }

  //encontrar o participante dentro da lista
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email;
  });
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date();

  //atualizar a lista de participantes
  atualizarLIsta(participantes);
};
