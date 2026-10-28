const flashcards = [
    {
        question: "¿Qué selección ha ganado más Copas del Mundo de la FIFA?",
        answer: "Brasil, con un total de 5 títulos mundiales (1958, 1962, 1970, 1994 y 2002)."
    },
    {
        question: "¿Quién es el máximo goleador histórico de la UEFA Champions League?",
        answer: "Cristiano Ronaldo, con 140 goles anotados en la competición."
    },
    {
        question: "¿Qué jugador ostenta el récord de más Balones de Oro ganados?",
        answer: "Lionel Messi, con 8 galardones en su carrera."
    },
    {
        question: "¿En qué país se celebró la primera Copa del Mundo de la FIFA en 1930?",
        answer: "En Uruguay, país que también se proclamó campeón del torneo tras vencer a Argentina."
    },
    {
        question: "¿Qué selección ganó la Copa del Mundo de la FIFA 2022 en Catar?",
        answer: "La selección de Argentina, liderada por Lionel Messi, tras vencer a Francia en la tanda de penales."
    },
    {
        question: "¿Cuál es el récord de goles anotados por un jugador en un solo año calendario?",
        answer: "Lionel Messi, quien anotó 91 goles en el año 2012 (79 con el Barcelona y 12 con la selección de Argentina)."
    },
    {
        question: "¿Qué club europeo ha ganado más títulos de la UEFA Champions League?",
        answer: "El Real Madrid, consolidándose como el rey histórico de la competición."
    },
    {
        question: "¿Quién es el máximo goleador en la historia de las Copas del Mundo de la FIFA?",
        answer: "El alemán Miroslav Klose, con un total de 16 goles anotados en fases finales de mundiales."
    },
    {
        question: "¿Qué portero es famoso por su estilo excéntrico y la jugada conocida como 'el escorpión'?",
        answer: "El guardameta colombiano René Higuita."
    },
    {
        question: "¿Qué selección nacional es conocida popularmente como 'La Roja'?",
        answer: "Principalmente la selección de España (y también utilizada por Chile en Sudamérica)."
    },
    {
        question: "¿En qué estadio se juega tradicionalmente la final de la FA Cup en Inglaterra?",
        answer: "En el Estadio de Wembley, ubicado en Londres."
    },
    {
        question: "¿Qué jugador brasileño es el único en la historia en haber ganado 3 Copas del Mundo como jugador?",
        answer: "Edson Arantes do Nascimento, Pelé (ganador en 1958, 1962 y 1970)."
    },
    {
        question: "¿Cuál es el clásico del fútbol español conocido mundialmente?",
        answer: "El FC Barcelona contra el Real Madrid, popularmente llamado 'El Clásico'."
    },
    {
        question: "¿Qué trofeo se le entrega de forma definitiva al equipo que gana la Copa Libertadores tres veces consecutivas o cinco alternas?",
        answer: "El trofeo original de la Copa Libertadores (aunque los clubes conservan réplicas oficiales)."
    },
    {
        question: "¿Qué país inventó y reglamentó las reglas modernas del fútbol a mediados del siglo XIX?",
        answer: "Inglaterra, con la fundación de la Asociación Inglesa de Fútbol (The FA) en 1863."
    },
    {
        question: "¿Quién fue el primer director técnico en ganar la UEFA Champions League cuatro veces?",
        answer: "El italiano Carlo Ancelotti."
    },
    {
        question: "¿Qué estadio es conocido como el 'Templo del Fútbol' en Sudamérica?",
        answer: "El Estadio Maracaná, ubicado en Río de Janeiro, Brasil."
    },
    {
        question: "¿Cuál es la duración reglamentaria de un partido oficial de fútbol sin contar prórroga?",
        answer: "90 minutos, divididos en dos tiempos iguales de 45 minutos con un descanso de 15 minutos."
    },
    {
        question: "¿Qué selección ganó de forma invicta y con portería imbatida la Eurocopa de 2012?",
        answer: "La selección de España, cerrando su ciclo dorado con una goleada 4-0 a Italia en la final."
    },
    {
        question: "¿Qué regla introdujo la IFAB en 2020 debido a la pandemia para ayudar con la fatiga de los jugadores?",
        answer: "La regla de las 5 sustituciones permitidas por equipo durante un partido oficial."
    }
];

let indiceActual = 0; // Comienza en la tarjeta 1 (índice 0)
let estaVolteada = false;

function actualizarInterfaz() {
    const tarjetaActual = flashcards[indiceActual];
    const elementoFlashcard = document.getElementById("flashcard");
    const botonAccion = document.getElementById("actionBtn");
    const barraProgreso = document.getElementById("progressBar");
    const porcentajeProgreso = document.getElementById("progressPercentage");
    const contadorTarjetas = document.getElementById("cardCount");
    const botonAnterior = document.getElementById("prevBtn");
    const botonSiguiente = document.getElementById("nextBtn");

    elementoFlashcard.textContent = estaVolteada ? tarjetaActual.answer : tarjetaActual.question;
    botonAccion.textContent = estaVolteada ? "Ocultar Respuesta" : "Mostrar Respuesta";

    const numeroActual = indiceActual + 1;
    const total = flashcards.length;
    const porcentaje = Math.round((numeroActual / total) * 100);

    barraProgreso.style.width = porcentaje + "%";
    porcentajeProgreso.textContent = porcentaje + "%";
    contadorTarjetas.textContent = numeroActual + " de " + total;

    botonAnterior.disabled = indiceActual === 0;
    botonSiguiente.disabled = indiceActual === total - 1;
}

function toggleAnswer() {
    estaVolteada = !estaVolteada;
    actualizarInterfaz();
}

function nextCard() {
    if (indiceActual < flashcards.length - 1) {
        indiceActual++;
        estaVolteada = false;
        actualizarInterfaz();
    }
}

function prevCard() {
    if (indiceActual > 0) {
        indiceActual--;
        estaVolteada = false;
        actualizarInterfaz();
    }
}

actualizarInterfaz();