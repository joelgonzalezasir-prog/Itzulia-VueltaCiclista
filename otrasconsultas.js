// ARRAY DE ETAPAS
const etapas = [
  {
    nombre: "Etapa 1",
    fecha: "07/04/2025",
    salida: "Vitoria-Gasteiz",
    meta: "Labastida",
    km: 165,
    perfil: "Media montaña",
    desnivel: "+2.300 m",
    puertos: "Puerto Herrera (3ª)"
  },
  {
    nombre: "Etapa 2",
    fecha: "08/04/2025",
    salida: "Pamplona",
    meta: "Lekunberri",
    km: 158,
    perfil: "Montaña",
    desnivel: "+3.000 m",
    puertos: "Azpiroz (2ª), Uitzi (3ª)"
  },
  {
    nombre: "Etapa 3",
    fecha: "09/04/2025",
    salida: "Eibar",
    meta: "Eibar",
    km: 190,
    perfil: "Alta montaña",
    desnivel: "+3.800 m",
    puertos: "Arrate (1ª), Izua (Especial)"
  },
  {
    nombre: "Etapa 4",
    fecha: "10/04/2025",
    salida: "Santurtzi",
    meta: "Bilbao",
    km: 175,
    perfil: "Media montaña",
    desnivel: "+2.500 m",
    puertos: "Vivero (2ª)"
  },
  {
    nombre: "Etapa 5",
    fecha: "11/04/2025",
    salida: "Orduña",
    meta: "Amurrio",
    km: 150,
    perfil: "Llano",
    desnivel: "+1.200 m",
    puertos: "Sin puertos destacados"
  },
  {
    nombre: "Etapa 6",
    fecha: "12/04/2025",
    salida: "Eibar",
    meta: "Eibar",
    km: 135,
    perfil: "Alta montaña",
    desnivel: "+3.200 m",
    puertos: "Krabelin (2ª), Trabakua (3ª)"
  }
];
//--------------------------------------------------------------------------------------------------------------------------
// FUNCION LIMPIAR RESULTADOS CUANDO PULSEMOS A OTRA CAJA
function limpiarResultadosEtapa() {

  document.getElementById("resultado-estadisticas").innerHTML = "";
  document.getElementById("resultado-corredor").innerHTML = "";
  document.getElementById("resultado-apuestas").innerHTML = "";
  document.getElementById("resultado-sorteo").innerHTML = "";

}
function limpiarResultadosEstats() {

  document.getElementById("resultado-etapa").innerHTML = "";
  document.getElementById("resultado-corredor").innerHTML = "";
  document.getElementById("resultado-apuestas").innerHTML = "";
  document.getElementById("resultado-sorteo").innerHTML = "";

}

function limpiarResultadosCorre() {

  document.getElementById("resultado-etapa").innerHTML = "";
  document.getElementById("resultado-estadisticas").innerHTML = "";
  document.getElementById("resultado-apuestas").innerHTML = "";
  document.getElementById("resultado-sorteo").innerHTML = "";
}

function limpiarResultadosApu() {

  document.getElementById("resultado-etapa").innerHTML = "";
  document.getElementById("resultado-estadisticas").innerHTML = "";
  document.getElementById("resultado-corredor").innerHTML = "";
  document.getElementById("resultado-sorteo").innerHTML = "";

}

function limpiarResultadosSorte() {

  document.getElementById("resultado-etapa").innerHTML = "";
  document.getElementById("resultado-estadisticas").innerHTML = "";
  document.getElementById("resultado-corredor").innerHTML = "";
  document.getElementById("resultado-apuestas").innerHTML = "";

}



//---------------------------------------------------------------------------------------------------------------------------
// FUNCIÓN MOSTRAR (INFO ETAPA)
function mostrarEtapa() {
  const select = document.getElementById("select-etapa");
  const resultado = document.getElementById("resultado-etapa");

  const index = select.selectedIndex;

  if (index === 0) {
    resultado.innerHTML = "<p>Selecciona una etapa</p>";
    return;
  }

  const etapa = etapas[index - 1];

  resultado.innerHTML = `
    <h3 id="rojo">${etapa.nombre}</h3>
    <p><strong id="rojo">Fecha:</strong> ${etapa.fecha}</p>
    <p><strong id="rojo">Salida:</strong> ${etapa.salida}</p>
    <p><strong id="rojo">Meta:</strong> ${etapa.meta}</p>
    <p><strong id="rojo">Kilómetros:</strong> ${etapa.km} km</p>
    <p><strong id="rojo">Perfil:</strong> ${etapa.perfil}</p>
    <p><strong id="rojo">Desnivel:</strong> ${etapa.desnivel}</p>
    <p><strong id="rojo">Puertos:</strong> ${etapa.puertos}</p>
  `;
  limpiarResultadosEtapa();
}

// -------------------------------------------------------------------------------------------------------------------------
//ARRAY CORREDORES Y CLASIFICACION
let corredores = {
    // Team Visma | Lease a Bike
    "Jonas Vingegaard": 1,
    "Steven Kruijswijk": 2,
    "Sepp Kuss": 3,
    "Loe van Belle": 4,
    "Johannes Staune-Mittet": 5,
    "Ben Tulett": 6,
    "Milan Vader": 7,

    // Soudal Quick-Step
    "Remco Evenepoel": 11,
    "Gil Gelders": 12,
    "James Knox": 13,
    "Mikel Landa": 14,
    "William Junior Lecerf": 15,
    "Pieter Serry": 16,
    "Louis Vervaeke": 17,

    // Movistar Team
    "Alexander Aranburu": 21,
    "Jon Barrenetxea": 22,
    "Davide Formolo": 23,
    "Pelayo Sanchez": 24,
    "Gregor Mühlberger": 25,
    "Nelson Oliveira": 26,
    "Gonzalo Serrano": 27,

    // Bora-Hansgrohe
    "Primož Roglič": 31,
    "Roger Adria": 32,
    "Emanuel Buchmann": 33,
    "Jai Hindley": 34,
    "Bob Jungels": 35,
    "Maximilian Schachmann": 36,
    "Matteo Soberro": 37,

    // EF Education - EasyPost
    "Rigoberto Uran": 41,
    "Alexander Cepeda": 42,
    "Esteban Chaves": 43,
    "Sean Quinn": 44,
    "Archie Ryan": 45,
    "James Shaw": 46,
    "Markel Beloki": 47,

    // Arkéa-B&B Hotels
    "Clément Champoussin": 51,
    "Elie Gesbert": 52,
    "Alessandro Verre": 53,
    "Anthony Delaplace": 54,
    "Laurens Huys": 55,
    "Lukasz Owsian": 56,
    "Kévin Vauquelin": 57,

    // Team Jayco Alula
    "Lucas Hamilton": 61,
    "Davide De Pretto": 62,
    "Edward Dunbar": 63,
    "Felix Engelhardt": 64,
    "Rudy Porter": 65,
    "Juul Jensen": 66,
    "Mauro Schmid": 67,

    // Lidl-Trek
    "Mattias Skjelmose": 71,
    "Andrea Bagioli": 72,
    "Julien Bernard": 73,
    "Fabio Felline": 74,
    "Tao Geoghegan Hart": 75,
    "Bauke Mollema": 76,
    "Natnael Tesfazion": 77,

    // Groupama-FDJ
    "David Gaudu": 81,
    "Lorenzo Germani": 82,
    "Romain Gregoire": 83,
    "Quentin Pacher": 84,
    "Rémy Rochas": 85,
    "Clément Russo": 86,
    "Reuben Thompson": 87,

    // Cofidis
    "Ion Izagirre": 91,
    "Thomas Champion": 92,
    "Simon Geschke": 93,
    "Gorka Izagirre": 94,
    "Jonathan Lastra": 95,
    "Stefano Oldani": 96,
    "Harrison Wood": 97,

// Bahrain Victorious
    "Juan Ayuso": 101,
    "Igor Arrieta": 102,
    "Sjoerd Bax": 103,
    "Isaac Del Toro": 104,
    "Brandon McNulty": 105,
    "Marc Soler": 106,
    "Jay Vine": 107,

    // Intermarché - Wanty
    "Pello Bilbao": 111,
    "Yukiya Arashiro": 112,
    "Nikias Arndt": 113,
    "Santiago Buitrago": 114,
    "Johan Price": 115,
    "Jasha Sütterlin": 116,
    "Edoardo Zambanini": 117,

    // Astana Qazaqstan Team
    "Louis Du Bouisson Meintjes": 121,
    "Vito Braet": 122,
    "Alexy Faure Prost": 123,
    "Tom Paquot": 124,
    "Kevin Colleoni": 125,
    "Lorenzo Rota": 126,
    "Rein Taaramäe": 127,

    // TotalEnergies
    "Samuele Battistella": 131,
    "Gleb Brussenskiy": 132,
    "Igor Chzhan": 133,
    "Gianmarco Garofoli": 134,
    "Harold Lopez": 135,
    "Ide Schelling": 136,
    "Anton Kuzmin": 137,

    // Team DSM-Firmenich PostNL
    "Mathieu Burgaudeau": 141,
    "Steff Cras": 142,
    "Fabien Doubey": 143,
    "Jordan Jegat": 144,
    "Alan Jousseaume": 145,
    "Fabien Grellier": 146,
    "Alexis Vuillermoz": 147,

    // Ineos Grenadiers
    "Warren Barguil": 151,
    "Romain Combaud": 152,
    "Gijs Leemreize": 153,
    "Enzo Leijnse": 154,
    "Edgar Onley": 155,
    "Martijn Tusveld": 156,
    "Emils Liepins": 157,

    // Euskaltel-Euskadi
    "Carlos Rodríguez": 161,
    "Jonathan Castroviejo": 162,
    "Omar Fraile": 163,
    "Ethan Hayter": 164,
    "Michal Kwiatkowski": 165,
    "Thomas Pidcock": 166,
    "Brandon Rivera": 167,
    // Decathlon AG2R La Mondiale Team
    "Gotzon Martin": 171,
    "Iker Mintegi": 172,
    "Victor De La Parte": 173,
    "Xabier Berasategi": 174,
    "Txomin Juaristi": 175,
    "James Fouche": 176,
    "Enekoitz Azparren": 177,

    // Equipo Kern Pharma
    "Felix Gall": 181,
    "Bruno Armirail": 182,
    "Alex Baudin": 183,
    "Jaakko Hänninen": 184,
    "Valentin Retailleau": 185,
    "Paul Lapeira": 186,
    "Nans Peters": 187,

    // Alpecin-Deceuninck
    "Unai Iribar": 191,
    "Pablo Castrillo": 192,
    "Ivan Cobo": 193,
    "Jon Agirre": 194,
    "Mikel Retegi": 195,
    "Pau Miquel": 196,
    "Ibon Ruiz": 197,

    // Caja Rural-SegurosRGA
    "Nicola Conci": 201,
    "Quinten Hermans": 202,
    "Jimmy Janssens": 203,
    "Juri Hollmann": 204,
    "Jason Osborne": 205,
    "Stan Van Tricht": 206,
    "Luca Vergallito": 207,

    // Burgos-BH
    "Orluis Aular": 211,
    "Sebastian Berwick": 212,
    "Joseba Lopez": 213,
    "Joel Nicolau": 214,
    "Eduard Prades": 215,
    "Guillermo Silva": 216,
    "Gorka Sorarrain": 217,

    // Q36.5 Pro Cycling Team
    "Jose Manuel Diaz": 221,
    "Victor Langellotti": 222,
    "Karel Vacek": 223,
    "Jesus Ezquerra": 224,
    "Aaron Gate": 225,
    "Antonio Fagundez": 226,
    "Jetse Bol": 227,

    // Team Q36.5 Pro Cycling Team
    "Xabier Azparren": 231,
    "Matteo Badilatti": 232,
    "Filippo Conca": 233,
    "David De La Cruz": 234,
    "Mark Donovan": 235,
    "Carl Hagen": 236,
    "Damien Howson": 237
};

    let clasificacionFinal =[
        "Juan Ayuso",
        "Carlos Rodríguez",
        "Mattias Skjelmose",
        "Marc Soler",
        "Brandon McNulty",
        "Pello Bilbao",
        "Isaac Del Toro",
        "Kevin Vauquelin",
        "Ion Izagirre",
        "Alex Baudin",
        "Santiago Buitrago",
        "Jai Hindley",
        "Maximilian Schachmann",
        "Victor Langellotti",
        "Alex Aranburu",
        "Esteban Chaves",
        "Jordan Jegat",
        "Ethan Hayter",
        "Edgar Onley",
        "Bruno Armirail",
        "Rigoberto Urán",
        "Simon Geschke",
        "Quentin Pacher",
        "Victor de la Parte",
        "William Junior Lecerf",
        "Brandon Smith Rivera",
        "Bauke Mollema",
        "Luca Vergallito",
        "Ibon Ruiz",
        "Edoardo Zambanini",
        "Gijs Leemreize",
        "Emanuel Buchmann",
        "Lucas Hamilton",
        "Nelson Oliveira",
        "Edward Dunbar",
        "Jose Manuel Diaz Gallego",
        "Mark Donovan",
        "Romain Gregoire",
        "Archie Ryan",
        "Louis Meintjes",
        "Sepp Kuss",
        "Orluis Aular",
        "Tao Geoghegan Hart",
        "Alexander Cepeda",
        "Davide Formolo",
        "Nicola Conci",
        "Gianmarco Garofoli",
        "Warren Barguil",
        "Joel Nicolau",
        "James Shaw",
        "Rudy Porter",
        "Antonio Eric Fagundez Lima",
        "Johannes Staune-Mittet",
        "Gregor Mühlberger",
        "Jonathan Castroviejo Nicolas",
        "Jason Osborne",
        "Clément Champoussin",
        "Steven Kruijswijk",
        "Damien Craig Howson",
        "David de la Cruz Melgarejo",
        "Igor Arrieta Lizarraga",
        "Txomin Juaristi Arrieta",
        "Jimmy Janssens",
        "Kevin Colleoni",
        "Carl Fredrik Hagen",
        "Jesus Ezquerra Muela",
        "Jon Barrenetxea Golzarri",
        "Martijn Tusveld",
        "Anthony Delaplace",
        "Rémy Rochas",
        "Unai Iribar Jauregi",
        "Milan Vader",
        "Rein Taaramäe",
        "Harold Martin Lopez Granizo",
        "Alexis Vuillermoz",
        "Xabier Berasategi Garmendia",
        "Alexy Faure Prost",
        "Juul Christopher Jensen",
        "Alessandro Verre",
        "Fabien Doubey",
        "Sjoerd Bax",
        "Jaakko Hänninen",
        "Iker Mintegi Claver",
        "Gotzon Martin Sanz",
        "Enekoitz Azparren Irurzun",
        "Nans Peters",
        "Harrison Wood",
        "Reuben Thompson",
        "Markel Beloki Fernandez",
        "Alan Jousseaume",
        "Bob Jungels",
        "Aaron Murray Gate",
        "Thomas Champion",
        "Jasha Sütterlin",
        "Romain Combaud",
        "Jetse Bol",
        "Filippo Conca",
        "Gorka Sorarrain Agirrezabala",
        "Joseba Lopez Cuesta",
        "Mathieu Burgaudeau",
        "Lorenzo Germani",
        "Stan Van Tricht",
        "Fabien Grellier",
        "Mikel Retegi Goñi",
        "Xabier Mikel Azparren Irurzun",
        "Laurens Huys",
        "James Fouche",
        "Ivan Cobo Cayon",
        "Enzo Leijnse"
    ]

//FUNCION ESTADISTICAS
function verEstadisticas() {

  let resultado = document.getElementById("resultado-estadisticas");

  // Número de corredores que terminaron
  let totalFinalizados = clasificacionFinal.length;

  // Total que empezaron
  let totalInicio = 168;

  // Porcentaje
  let porcentaje = ((totalFinalizados / totalInicio) * 100).toFixed(2);

  // TOP 10
  let top10 = "";
  for (let i = 0; i < 10; i++) {
    top10 += `<p>${i + 1}. ${clasificacionFinal[i]}</p>`;
  }

  // Último clasificado
  let ultimo = clasificacionFinal[clasificacionFinal.length - 1];

  // RESULTADO
  resultado.innerHTML = `
    <p id="rojo"><strong>Han terminado ${totalFinalizados} corredores (${porcentaje}%)</strong></p>

    <p id="rojo"><strong>Top 10:</strong></p>
    ${top10}

    <p><strong id="rojo">Último clasificado:</strong> ${ultimo}</p>
  `;
  limpiarResultadosEstats();
}

//--------------------------------------------------------------------------------------------------------------------------
//FUNCION POSICION CORREDORES
let dorsales = {};

for (let nombre in corredores) {
  dorsales[corredores[nombre]] = nombre;
}
function consultarCorredor() {

  const input = document.getElementById("input-corredor").value.trim();
  const resultado = document.getElementById("resultado-corredor");

  if (input === "") {
    alert("Introduce un dorsal o nombre");
    return;
  }

  let dorsal = null;
  let nombre = null;

  // SI ES DORSAL
  if (!isNaN(input)) {

    dorsal = parseInt(input);
    nombre = dorsales[dorsal];

    if (!nombre) {
      resultado.innerHTML = `<p>⚠️ El dorsal ${dorsal} no está en la lista</p>`;
      return;
    }

  } else {
    // SI ES NOMBRE
    let encontrado = Object.keys(corredores).find(c =>
      c.toLowerCase() === input.toLowerCase()
    );

    if (!encontrado) {
      resultado.innerHTML = `<p>⚠️ El corredor "${input}" no está en la lista</p>`;
      return;
    }

    nombre = encontrado;
    dorsal = corredores[nombre];
  }

  // POSICIÓN
  let posicion = clasificacionFinal.indexOf(nombre);

  if (posicion === -1) {
    resultado.innerHTML = `
      <p>⚠️ El dorsal ${dorsal} no tiene clasificación ya que no ha terminado la carrera</p>
    `;
    return;
  }

  // RESULTADO
  resultado.innerHTML = `
    <h3 id="rojo">Resultado</h3>
    <p><strong id="rojo">Dorsal:</strong> ${dorsal}</p>
    <p><strong id="rojo">Corredor:</strong> ${nombre}</p>
    <p><strong id="rojo">Posición:</strong> ${posicion + 1}</p>
  `;
  limpiarResultadosCorre();
}
//---------------------------------------------------------------------------------------------------------------------------
//FUNCION APUESTAS
function comprobarApuesta() {

  let apuesta = parseInt(document.getElementById("apuesta-euros").value);
  let dorsal1 = parseInt(document.getElementById("dorsal1").value);
  let dorsal2 = parseInt(document.getElementById("dorsal2").value);
  let dorsal3 = parseInt(document.getElementById("dorsal3").value);
  let resultado = document.getElementById("resultado-apuestas");

  // Validar apuesta
  if (isNaN(apuesta) || apuesta < 100 || apuesta > 300) {
    resultado.innerHTML = `<p> ⚠️ La apuesta debe estar entre 100€ y 300€</p>`;
    return;
  }

  // Validar dorsales
  if (
    dorsal1 < 1 || dorsal1 > 237 ||
    dorsal2 < 1 || dorsal2 > 237 ||
    dorsal3 < 1 || dorsal3 > 237
  ) {
    resultado.innerHTML = `<p> ⚠️ Los dorsales deben estar entre 1 y 237</p>`;
    return;
  }

  // TOP 3 REAL
  let top3 = [
    clasificacionFinal[0],
    clasificacionFinal[1],
    clasificacionFinal[2]
  ];

  let aciertos = [];
  let posiciones = [];

  // Función para comprobar dorsal
  function comprobar(dorsal) {
    for (let nombre in corredores) {
      if (corredores[nombre] === dorsal) {
        if (top3.includes(nombre)) {
          aciertos.push(dorsal);
          posiciones.push(top3.indexOf(nombre) + 1);
        }
      }
    }
  }

  comprobar(dorsal1);
  comprobar(dorsal2);
  comprobar(dorsal3);

  let dinero = 0;

  if (aciertos.length === 1) {
    dinero = apuesta * 2;
    resultado.innerHTML =
      `<p><strong id="rojo">GENIAL</strong>, el dorsal ${aciertos[0]} ha quedado en la posición ${posiciones[0]}, por lo que has ganado <strong id="rojo">${dinero} €</strong></p>`;
  }

  else if (aciertos.length === 2) {
    dinero = apuesta * 4;
    resultado.innerHTML =
      `<p><strong id="rojo">GENIAL</strong>, el dorsal ${aciertos[0]} y el dorsal ${aciertos[1]} han quedado en la posición ${posiciones[0]} y ${posiciones[1]}, por lo que has ganado <strong id="rojo">${dinero} €</strong></p>`;
  }

  else if (aciertos.length === 3) {
    dinero = apuesta * 6;
    resultado.innerHTML =
       `<p><strong id="rojo">GENIAL</strong>, has acertado todos los dorsales ${aciertos[0]}, ${aciertos[1]}, ${aciertos[2]}, por lo que has ganado <strong id="rojo">${dinero} €</strong></p>`;
  }

  else {
    resultado.innerHTML =
      `<p><strong id="rojo">LO SENTIMOS</strong>, no has acertado ninguno de los dorsales.</p>`;
  }
  limpiarResultadosApu();
}
//------------------------------------------------------------------------------------------------------------------------------
//FUNCION SORTEO ITZULIA-DNI

// Array para guardar DNIs usados
let dnisRegistrados = [];

function sorteo() {

  const dni = document.getElementById("dni").value.trim();
  const dorsalUsuario = document.getElementById("dorsal-apuesta").value;
  const resultado = document.getElementById("resultado-sorteo");

  // 1. Validar campos vacíos
  if (dni === "" || dorsalUsuario === "") {
    alert("Introduce DNI y dorsal");
    return;
  }

  // 2. Validar DNI (8 números + letra)
  const regexDNI = /^[0-9]{8}[A-Za-z]$/;

  if (!regexDNI.test(dni)) {
    alert("El DNI debe tener 8 números y una letra (ej: 12345678A)");
    return;
  }

  // 3. Comprobar si ya ha participado
  if (dnisRegistrados.includes(dni)) {
    alert("Este DNI ya ha realizado una apuesta");
    return;
  }

  // 4. Validar dorsal (1–237)
  const dorsalNum = parseInt(dorsalUsuario);

  if (dorsalNum < 1 || dorsalNum > 237) {
    alert("El dorsal debe estar entre 1 y 237");
    return;
  }

  // 5. Obtener dorsales del array
  const listaDorsales = Object.values(corredores);

  // 6. Generar dorsal aleatorio
  const dorsalRandom = listaDorsales[Math.floor(Math.random() * listaDorsales.length)];

  // Guardar DNI (IMPORTANTE)
  dnisRegistrados.push(dni);

  // 7. Comparar
  if (dorsalNum === dorsalRandom) {

    resultado.innerHTML = `
      <h3 id="rojo">🎉 ¡GENIAL!</h3>
      <p>Tu dorsal ${dorsalUsuario} ha sido premiado</p>
      <p>Has ganado un <strong>lote de productos Itzulia</strong> 🎁</p>
    `;

  } else {

    resultado.innerHTML = `
      <h3>❌ No ha habido suerte</h3>
      <p>Tu dorsal: ${dorsalUsuario}</p>
      <p>Dorsal ganador: ${dorsalRandom}</p>
    `;
  }
  limpiarResultadosSorte();
}
