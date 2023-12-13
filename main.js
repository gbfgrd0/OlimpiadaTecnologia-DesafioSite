const contents = [
  [
    "Trajes espaciais",
    false,
    "Um traje espacial é um sistema complexo de vestimentas, equipamentos e sistemas ambientais projetados para manter uma pessoa viva e confortável no extremo e perigoso ambiente do espaço exterior",
    "components/imagens/estados-unidos.png",
    "components/imagens/Trajes espaciais.jpeg"
  ],

  [
    "Sistema de comunicação",
    false,
    "Os Sistemas de Comunicação são de suma importância para a exploração espacial, uma vez que permitem o contato com o universo, seja com outra nave ou planeta alienígena, ou com as tripulações naves e bases estelares da Frota Estelar.",
    "components/imagens/russia.png",
    "components/imagens/ISS.jpeg"
  ],

  [
    "Armazém de Alimentos",
    true,
    "Os alimentos e o modo como são ingeridos e embalados sempre foram afetados pela microgravidade do ambiente espacial. Devido a esse fenômeno, os alimentos são armazenados e servidos de modo a evitar que a comida se mova dentro da Estação Espacial",
    "components/imagens/russia.png",
    "components/imagens/ISS.jpeg"
  ],

  [
    "Sistema de Suporte À Vida e Controle Ambiental",
    true,
    "Os Sistemas de suporte à vida provê ou controla elementos como pressão atmosférica, nível de oxigênio, água, extinção de incêndios, além de outras coisas. O sistema Elektron gera o oxigênio que circula a bordo da estação e garante a estabilidade e manutenção de uma atmosfera estável.",
    "components/imagens/estados-unidos.png",
    "components/imagens/ISS.jpeg"
  ],

  [
    "Controle de altitude",
    true,
    "A Estação Espacial Internacional é mantida em órbita numa altitude limite mínima e máxima de 278 a 460 km. Normalmente o limite máximo é de 425 km para permitir manobras de encontros para espaçonaves Soyuz. Devido a Estação está em constante queda por causa do arrasto atmosférico e queda do efeito de gravidade, ela precisa ser impulsionada para altitudes mais elevadas várias vezes durante o ano.",
    "components/imagens/russia.png",
    "components/imagens/ISS.jpeg"
  ],

  [
    "Sistema de geração de energia elétrica",
    true,
    "A eletricidade é obtida através de painéis solares anexos às extremidades de sua estrutura modular a uma tensão que varia entre 130 a 180 volts. A energia é estabilizada e distribuída a 160 volts e então convertida para 124 volts.",
    "components/imagens/russia.png",
    "components/imagens/ISS.jpeg"
  ],

  [
    "Controle de orientação",
    true,
    "O controle de orientação da Estação é um sistema que funciona à base de dois sistemas, um sistema de giroscópios de controle de momento (CMGs - control moment gyroscopes) mantém a Estação orientada, e também é composto pelo módulo Pirs apontado para a Terra.",
    "components/imagens/russia.png",
    "components/imagens/ISS.jpeg"
  ],

  [
    "Sistema de propulsão",
    false,
    "A propulsão de naves espaciais se refere a qualquer um dos vários métodos utilizados para modificar a velocidade de uma nave espacial ou de um satélite artificial. Qualquer método tem vantagens e desvantagens, pelo que esta é uma área de pesquisa de grande atividade.",
    "components/imagens/russia.png",
    "components/imagens/Sistema de propulsão.jpeg"
  ],

  [
    "Compartimento de docagem da Estação",
    false,
    'Este compartimento, denominado Pirs (em russo: Пирс, significando "cais") também chamado de Stikovochny Otsek 1. É um módulo de acoplagem que serve para a entrada e saída de espaçonaves com outros astronautas e mantimentos, por exemplo.',
    "components/imagens/estados-unidos.png",
    "components/imagens/Compartimento de docagem da Estação.jpeg"
  ],

  [
    "Mãos robóticas",
    false,
    "Dextre é um robô com dois braços ou telemanipulator, que é parte do Sistema de Serviço Móvel na Estação Espacial Internacional (ISS) e estende-se a função deste sistema para substituir algumas atividades que exigem caminhadas espaciais. Ele foi lançado em 11 de março de 2008 na missão STS-123.",
    "components/imagens/coreia-do-sul.png",
    "components/imagens/braco robotico.jpeg"
  ],

  [
    "Módulo do laboratório Kibõ",
    false,
    "O Kibō, também conhecido como Módulo de Experiências Japonês (JEM - na sigla em inglês; Kibō, esperança em japonês) é o componente japonês da estação. O módulo é composto por um módulo pressurizado, por um Complexo Exposto, um Módulo de Experiências e Logística e um Sistema do Manipulador Remoto.",
    "components/imagens/japao.png",
    "components/imagens/kibo.jpeg"
  ],

  [
    "Câmara de Despressurização",
    true,
    "A Câmara de despressurização da estação consiste em duas câmaras cilíndricas fixadas de ponta a ponta por uma antepara com uma escotilha de conexão. Foi criado para permitir atividades extraveiculares tanto de astronautas com trajes espaciais tipo Unidade de Mobilidade Extraveicular.",
    "components/imagens/estados-unidos.png",
    "components/imagens/ISS.jpeg"
  ]
];

const steps = [
  [
    "Analisar os componentes do traje",
    "Determinar os danos",
    "Se possível realizar reparos",
    "Caso não, substituição de novos"
  ],

  ["Análise dos danos", "Restauração dos aparelhos"],

  ["Armazenamento de alimento de forma segura"],

  ["Geração de oxigênio", "Manutenção de uma atmosfera estável."],

  ["Evitar desequilíbrio da espaçonave."],

  [
    "Os painéis solares rastreiam o sol para maximizar a sua performance",
    "Reduzir ligeiramente o arrasto da estação alinhando os painéis solares no limite do vetor de velocidade."
  ],

  ["Orientação e controle da estação.", "Controle da navegação."],

  ["Examinar os dados", "Realizar os reparos"],

  [
    "Analisar a estrutura e a estabilidade do módulo",
    "Realizar reparos se possível",
    "Realizar a troca de partes da doca se preciso"
  ],

  [
    "Averiguar as possíveis falhas",
    "Restauração dos danos",
    "Caso necessário substituição por outra"
  ],

  [
    "Análise da estrutura da cada um dos componentes",
    "Realizar reparos em cada componente comprometido",
    "Realizar a substituição de componentes sem possibilidade de reparo"
  ],

  [
    "Despressurização dos astronautas",
    "Permite a entrada e saída dos astronautas"
  ]
];

var showingContent = false;

var blocos;
var project;

window.onload = () => {
  var fundoTransicao = document.getElementById("imagem-transicao");
  fundoTransicao.style.display = "none";

  var body = document.getElementsByTagName("body")[0];
  body.style.display = "block";
  //--------------------------------------
  blocos = document.getElementById("blocos");
  blocos.style.display = "";
  //iniciando parte dos projetos
  project = document.getElementById("project");
  project.style.display = "none";

  for (i in contents) {
    //cria o elemento
    var span = document.createElement("span");
    span.className = "search";
    span.setAttribute("value", contents[i][0]);
    blocos.appendChild(span);

    var img = document.createElement("img");
    img.className = "images";
    img.src = contents[i][4];
    span.appendChild(img);

    var h5 = document.createElement("h5");
    h5.innerHTML = contents[i][0];
    span.appendChild(h5);

    var div = document.createElement("div");
    if (contents[i][1]) div.className = "status";
    else div.className = "statusErr";

    var img = document.createElement("img");
    img.src = "./components/imagens/check.png";
    img.className = "logoCheck";
    div.appendChild(img);

    var p = document.createElement("p");
    if (contents[i][1]) p.innerHTML = "Intacto";
    else p.innerHTML = "Danificado";
    div.appendChild(p);

    span.appendChild(div);

    //funcao para quando clicar, deve desativar todo o resto
    span.onclick = () => {
      for (i in contents) {
        if (
          (window.event.target.getAttribute("value") == contents[i][0]) |
          (window.event.target.parentElement.getAttribute("value") ==
            contents[i][0])
        ) {
          console.log(contents[i][1]);

          //modifica o texto
          var title = document.getElementById("title");
          title.innerHTML = contents[i][0];

          var text = document.getElementById("text");
          text.innerHTML = contents[i][2];

          var bandeira = document.getElementById("bandeira");
          bandeira.src = contents[i][3];

          var imagem = document.getElementById("espaço_img");
          imagem.src = contents[i][4];
          var textoPassos = document.getElementById("textoPasso");
          if (contents[i][1]) textoPassos.innerText = "Utilidades";
          else textoPassos.innerText = "Passo a passo para o reparo:";

          var passos = document.getElementById("passos");
          while (passos.firstChild) passos.removeChild(passos.firstChild);
          for (n in steps[i]) {
            var divv = document.createElement("div");
            divv.className = "itemLista";

            var box = document.createElement("input");
            box.type = "checkbox";
            divv.appendChild(box);

            var text = document.createElement("h4");
            text.innerHTML = steps[i][n];
            divv.appendChild(text);

            divv.appendChild(document.createElement("br"));

            passos.appendChild(divv);
          }

          //mostra a parte certa do negocio
          blocos.style.display = "none";
          project.style.display = "";
          showingContent = true;
        }
      }
    };
  }
};

function goBack() {
  showingContent = false;
  //project.style.display = 'none'
  blocos.style.display = "";
}

function clicadoaqui(event) {
  console.log("Clicou");
  for (i in contents) {
    if (window.event.target.value == contents[i][0]) {
      console.log(contents[i][1]);

      //modifica o texto
      //var text = document.getElementById('text')
      //text.innerHTML = contents[i][1]

      //mostra a parte certa do negocio
      blocos.style.display = "none";
      //project.style.display = ''
      showingContent = true;
    }
  }
}
