// ============================================================================
// 🎨 CONFIGURACIÓN DE TEMÁTICA DEL JUEGO (theme-config.js)
// ============================================================================
// Para crear un nuevo juego con otra temática:
// 1. Duplica este repositorio o edita este archivo.
// 2. Modifica los textos, zonas, casillas (40 en total), cartas, rangos y logros.
// 3. Cambia la imagen central en `GAME_THEME.centerImage`.
// ¡El motor del juego (monopollados.js) y el multijugador (multiplayer-firebase.js)
// funcionarán automáticamente sin necesidad de tocar su código!
// ============================================================================

window.GAME_THEME = {
    id: "arroyo-poli",
    title: "🌊 Arroyo-Poli",
    subtitle: "Invierte · Comparte · Conquista Benalmádena",
    centerImage: "img/arroyo-poli-board.svg",
    currencySymbol: "€",
    startingMoney: 2500,
    startingFollowers: 100,
    passGoReward: 500,
    jailFine: 50,
    terms: {
        buildingSingular: "Mejora",
        buildingPlural: "Mejoras",
        reputationName: "Prestigio local",
        jailName: "Retención municipal",
        deckPositiveName: "BRISA DEL MAR",
        deckPositiveIcon: "🌊",
        deckNegativeName: "LEVANTE Y OBRAS",
        deckNegativeIcon: "🚧"
    },
    playerAvatars: ['🚠', '🚆', '⛵', '🌴', '🐬', '🏰', '🎡', '☀️', '🏖️', '🦜'],
    defaultNames: [
        'Vecino del Arroyo',
        'Marinera de Benalmádena',
        'Guía del Calamorro',
        'Comerciante de la Mezquita',
        'Capitana de Puerto Marina',
        'Paseante de La Paloma'
    ],
    rankSystem: {
        ranks: [
            { name: "Visitante", min: 0, max: 2, icon: "🧳", color: "#64748b" },
            { name: "Vecino del Arroyo", min: 3, max: 5, icon: "🏘️", color: "#0ea5a8" },
            { name: "Comerciante Local", min: 6, max: 8, icon: "🛍️", color: "#f97360" },
            { name: "Inversor de la Costa", min: 9, max: 12, icon: "🏗️", color: "#e6a23c" },
            { name: "Alcalde de la Partida", min: 13, max: 999, icon: "🏛️", color: "#f4c95d" }
        ]
    },
    followersSystem: {
        gainReasons: {
            digitalStation: 50,  // Al comprar estación digital
            menteAlfaCard: 25,   // Al sacar carta positiva
            completeVuelta: 30,  // Al completar una vuelta
            winRent: 10,         // Al cobrar alquiler
            buildMentoria: 20    // Al construir mejora
        },
        spendOptions: {
            propertyDiscount: { cost: 100, discount: 0.1 }, // 10% descuento en propiedades
            rentProtection: { cost: 150, turns: 3 },        // Protección contra alquileres por 3 turnos
            extraRoll: { cost: 200 },                       // Tirada extra de dados
            skipTax: { cost: 120 }                          // Saltar impuesto
        }
    },
    achievements: [
        {
            id: "primer_millonario",
            name: "Capital de la Costa",
            description: "Primer jugador en llegar a €3000",
            icon: "💰",
            reward: { type: "money", amount: 500 },
            completed: false,
            playerId: null
        },
        {
            id: "monopolista_digital",
            name: "Red de Cercanías",
            description: "Poseer las cuatro estaciones de transporte",
            icon: "🚆",
            reward: { type: "followers", amount: 200 },
            completed: false,
            playerId: null
        },
        {
            id: "superviviente",
            name: "A Prueba de Levante",
            description: "Sobrevivir 3 bancarrotas",
            icon: "💪",
            reward: { type: "protection", turns: 5 },
            completed: false,
            playerId: null
        },
        {
            id: "mentor_supremo",
            name: "Promotor de la Costa",
            description: "Construir 10 mejoras",
            icon: "🏗️",
            reward: { type: "money", amount: 1000 },
            completed: false,
            playerId: null
        },
        {
            id: "alpha_velocidad",
            name: "Ruta Exprés",
            description: "Comprar 5 propiedades en 10 turnos",
            icon: "⚡",
            reward: { type: "followers", amount: 150 },
            completed: false,
            playerId: null
        },
        {
            id: "influencer_viral",
            name: "Embajador Local",
            description: "Acumular 500 puntos de prestigio",
            icon: "🔥",
            reward: { type: "money", amount: 800 },
            completed: false,
            playerId: null
        }
    ],
    zoneData: {
        arroyo: { mentorCost: 50, mentorRent: 50, maxRent: 200 },
        centro: { mentorCost: 75, mentorRent: 75, maxRent: 300 },
        costa: { mentorCost: 100, mentorRent: 100, maxRent: 400 },
        marina: { mentorCost: 125, mentorRent: 125, maxRent: 500 },
        parques: { mentorCost: 150, mentorRent: 150, maxRent: 600 },
        hoteles: { mentorCost: 175, mentorRent: 175, maxRent: 700 },
        sierra: { mentorCost: 200, mentorRent: 200, maxRent: 800 },
        monumentos: { mentorCost: 225, mentorRent: 225, maxRent: 900 },
        exclusiva: { mentorCost: 250, mentorRent: 250, maxRent: 1000 }
    },
    digitalStationData: {
        stations: ["ESTACIÓN ARROYO DE LA MIEL", "ESTACIÓN BENALMÁDENA-ARROYO", "ESTACIÓN TORREMUELLE", "ESTACIÓN CARVAJAL"],
        baseRent: [25, 50, 100, 200]
    },
    boardCells: [
        // Mitad superior: Benalmádena Pueblo, monumentos y montaña
        { name: "PLAZA DE ESPAÑA", type: "corner", class: "corner" },
        { name: "CALLE REAL", type: "property", zone: "monumentos", price: 100, class: "monumentos", constructions: 0 },
        { name: "BRISA DEL MAR", type: "card", class: "special" },
        { name: "CALLE SANTO DOMINGO", type: "property", zone: "monumentos", price: 120, class: "monumentos", constructions: 0 },
        { name: "IBI MUNICIPAL", type: "tax", amount: 200, class: "special" },
        { name: "ESTACIÓN TORREMUELLE", type: "digital-station", price: 200, class: "digital-station" },
        { name: "AVENIDA JUAN LUIS PERALTA", type: "property", zone: "exclusiva", price: 140, class: "exclusiva", constructions: 0 },
        { name: "JARDINES DEL MURO", type: "property", zone: "exclusiva", price: 140, class: "exclusiva", constructions: 0 },
        { name: "CASTILLO DE COLOMARES", type: "property", zone: "exclusiva", price: 160, class: "exclusiva", constructions: 0 },
        { name: "AVENIDA DEL CHORRILLO", type: "property", zone: "exclusiva", price: 160, class: "exclusiva", constructions: 0 },
        { name: "RETENCIÓN MUNICIPAL", type: "jail", class: "corner" },

        { name: "ESTUPA DE LA ILUMINACIÓN", type: "property", zone: "sierra", price: 180, class: "sierra", constructions: 0 },
        { name: "ESTACIÓN CARVAJAL", type: "digital-station", price: 200, class: "digital-station" },
        { name: "MARIPOSARIO", type: "property", zone: "sierra", price: 180, class: "sierra", constructions: 0 },
        { name: "TELEFÉRICO", type: "property", zone: "sierra", price: 200, class: "sierra", constructions: 0 },
        { name: "MIRADOR DEL CALAMORRO", type: "corner", class: "corner" },
        { name: "MONTE CALAMORRO", type: "property", zone: "monumentos", price: 220, class: "monumentos", constructions: 0 },
        { name: "LEVANTE Y OBRAS", type: "card", class: "special" },
        { name: "BENALMÁDENA PUEBLO", type: "property", zone: "monumentos", price: 220, class: "monumentos", constructions: 0 },
        { name: "MIRADOR DEL MEDITERRÁNEO", type: "property", zone: "monumentos", price: 240, class: "monumentos", constructions: 0 },
        { name: "TASA TURÍSTICA", type: "tax", amount: 100, class: "special" },

        // Mitad inferior: Arroyo de la Miel, parques, hoteles y costa
        { name: "PARQUE DE LA PALOMA", type: "property", zone: "parques", price: 400, class: "parques", constructions: 0, fractional: true, shareSize: 25 },
        { name: "AVENIDA GAMONAL", type: "property", zone: "parques", price: 260, class: "parques", constructions: 0 },
        { name: "TÍVOLI: LA NORIA", type: "property", zone: "parques", price: 280, class: "parques", constructions: 0 },
        { name: "ESTACIÓN ARROYO DE LA MIEL", type: "digital-station", price: 200, class: "digital-station" },
        { name: "AVENIDA DE LA CONSTITUCIÓN", type: "property", zone: "centro", price: 300, class: "centro", constructions: 0 },
        { name: "CALLE BLAS INFANTE", type: "property", zone: "centro", price: 300, class: "centro", constructions: 0 },
        { name: "CALLE LAS FLORES", type: "property", zone: "centro", price: 300, class: "centro", constructions: 0 },
        { name: "PLAZA DE LA MEZQUITA", type: "property", zone: "centro", price: 320, class: "centro", constructions: 0 },
        { name: "AYUNTAMIENTO", type: "property", zone: "centro", price: 320, class: "centro", constructions: 0 },
        { name: "VE A RETENCIÓN MUNICIPAL", type: "corner", class: "corner" },

        { name: "AVENIDA ANTONIO MACHADO", type: "property", zone: "costa", price: 350, class: "costa", constructions: 0 },
        { name: "AVENIDA ALAY", type: "property", zone: "costa", price: 350, class: "costa", constructions: 0 },
        { name: "BIL BIL", type: "property", zone: "costa", price: 400, class: "costa", constructions: 0 },
        { name: "BENAL-BEACH", type: "property", zone: "hoteles", price: 400, class: "hoteles", constructions: 0 },
        { name: "ESTACIÓN BENALMÁDENA-ARROYO", type: "digital-station", price: 200, class: "digital-station" },
        { name: "PUERTO MARINA", type: "property", zone: "marina", price: 400, class: "marina", constructions: 0 },
        { name: "PUEBLO MARINERO", type: "property", zone: "marina", price: 500, class: "marina", constructions: 0 },
        { name: "AVENIDA FEDERICO GARCÍA LORCA", type: "property", zone: "marina", price: 500, class: "marina", constructions: 0 },
        { name: "HIGUERÓN RESORT", type: "property", zone: "exclusiva", price: 600, class: "exclusiva", constructions: 0 }
    ],
    menteAlfaCards: [
        "🚠 Día despejado en el Teleférico. Avanza 3 casillas y cobra €300.",
        "⛵ Regata en Puerto Marina. Cobra €400 y roba otra carta.",
        "🏛️ Subvención municipal para tu negocio. Cobra €500.",
        "🌅 Amanecer en el paseo marítimo. Repite turno y cobra €200.",
        "🎟️ Visita cultural. Paga €150 pero avanza 2 casillas.",
        "🏖️ Temporada alta. Cobra €350 y avanza 2 casillas.",
        "🎉 Feria de Arroyo. Todos los jugadores te pagan €100.",
        "🎥 Video viral: Avanza hasta la propiedad más cara disponible y cómprala con 50% descuento.",
        "🚌 Bono de movilidad. Sal de la cárcel (mental) gratis. [GUARDABLE]",
        "🎙️ Campaña turística exitosa. Cobra €600 y elige una propiedad de otro jugador para comprarla al precio original.",
        "🍢 Ruta de tapas: cobra €500 de cada jugador.",
        "🚆 Cercanías sin retrasos: Tira 3 dados y muévete la suma total.",
        "🏗️ Reforma rentable: Paga €300 pero duplica el alquiler de todas tus propiedades por 3 turnos.",
        "🌴 Postal de la Costa del Sol: Cobra €600 e intercambia posiciones con cualquier jugador.",
        "🔥 Festival local: Avanza hasta la siguiente propiedad sin dueño y cómprala gratis.",
        "📖 Archivo histórico: Avanza 4 casillas y cobra €200 por cada propiedad que poseas.",
        "🦜 Tarde en La Paloma: Repite turno y cobra €100 por cada jugador en el juego.",
        "🐬 Protección marina: Cobra €800 y eres inmune a la siguiente carta negativa.",
        "✨ Plan de rehabilitación: Cobra €1000 y construye una mentoría gratis en cualquier propiedad tuya.",
        "🏨 Premio hotelero: Paga €1200 pero roba 2 propiedades de otros jugadores.",
        "🤝 Asociación de comerciantes: Avanza 6 casillas y cobra €300.",
        "📺 Reportaje nacional: Cobra €700 y todos los jugadores te pagan €50.",
        "🚗 Ruta panorámica: Cobra €500 y avanza a la casilla más cara del tablero.",
        "🎪 Noche de feria: Cobra €400 de cada jugador.",
        "👑 Distinción local: Roba la propiedad más valiosa de otro jugador y cobra €300.",
        "📵 Jornada sin tráfico: Cobra €600 y construye mentorías gratis en 2 propiedades.",
        "💬 Convenio turístico: Cobra €800 y elige el próximo movimiento de cualquier jugador.",
        "🎯 Atajo por el Arroyo: Cobra €500 y muévete directamente a cualquier casilla que elijas.",
        "📢 Mercado gastronómico: Cobra €300 de cada jugador y avanza 3 casillas.",
        "🏛️ Concesión excepcional: Paga €2000 pero controlas los próximos 2 turnos de cualquier jugador.",
        "🎡 Recuerdo de Tívoli: Avanza 3 casillas y eres inmune a perder propiedades por 2 turnos.",
        "📅 Verano récord: Cobra €600 y duplica el valor de construcción de todas tus propiedades.",
        "🏠 Expansión inmobiliaria: Roba 2 propiedades de otros jugadores y cobra €400.",
        "🔑 Oportunidad de inversión: Elige cualquier propiedad del tablero y cómprala al 50% de su valor.",
        "🗝️ Llave de la ciudad: Cobra €500 y roba 1 carta especial de otro jugador. [GUARDABLE]",
        "🏆 Premio Costa del Sol: Roba 1 propiedad y 1 carta especial de cada jugador."
    ],
    realidadSistemaCards: [
        "🏛️ Revisión fiscal: Paga €800 y retrocede 3 casillas.",
        "🚧 Obras inesperadas: Pierdes turno y paga €300.",
        "📉 Mala temporada: Retrocede 5 casillas y pierde 1 propiedad.",
        "🌬️ Levante fuerte: Paga €400 a cada jugador.",
        "📶 Avería de fibra: Pierdes €600 y no puedes tirar dados el próximo turno.",
        "💳 Cargo bancario: Pierdes €1500 y da €200 a cada jugador.",
        "📉 Caída del mercado: Pierdes €1200 y retrocede 4 casillas.",
        "🚪 Cierre preventivo: Pierde 2 propiedades y paga €500.",
        "😒 Reseñas negativas: Todos los jugadores te roban €150 cada uno.",
        "🚗 Atasco en la costa: Retrocede 3 casillas y paga €200.",
        "⭐ Inspección turística: Paga €600 y pierde la propiedad más valiosa.",
        "🍽️ Reserva cancelada: Avanza 2 casillas pero paga €400.",
        "🏠 Reforma estructural: Pierdes €800 y todas las construcciones de tus propiedades.",
        "☕ Terraza cerrada: Pierdes 2 turnos y paga €300.",
        "📄 Licencia pendiente: Pierdes €800 y da €100 a cada jugador.",
        "👥 Competencia nueva: Pierde 1 propiedad y €400.",
        "📷 Equipo averiado: Paga €500 y no puedes cobrar alquileres por 2 turnos.",
        "🎙️ Evento cancelado: Pierdes turno y paga €300.",
        "📚 Seguro comercial: Cobra €400 y protégete de la próxima carta negativa. [GUARDABLE]",
        "🖼️ Reforma fallida: Pierdes €1000 y retrocede 3 casillas.",
        "📺 Campaña retirada: Pierdes €600 y da €100 a cada jugador.",
        "📱 Promoción de emergencia: Cobra €300 pero pierde 1 propiedad.",
        "📞 Oferta de compra: Elige: cobra €1200 pero pierde 2 propiedades, o rechaza y paga €200.",
        "✏️ Cartelería incorrecta: Paga €400 a cada jugador.",
        "🔄 Cambio de imagen fallido: Paga €600 e intercambia tu propiedad más cara con la más barata de otro jugador.",
        "💔 Asociación disuelta: Pierde 2 propiedades y paga €500.",
        "📝 Proyecto duplicado: Todos los jugadores cobran €200.",
        "🤝 Contrato desfavorable: Paga €600 y da tu propiedad más barata a otro jugador.",
        "💻 Caída de reservas: Pierdes €800 y no puedes cobrar alquileres por 3 turnos.",
        "💼 Expropiación parcial: Cobra €1500 pero pierde 3 propiedades.",
        "🚗 Multas de aparcamiento: Pierde tu propiedad más valiosa y paga €700.",
        "💡 Campaña conjunta: Cobra €200 pero todos los jugadores avanzan 2 casillas gratis.",
        "🏠 Daños por temporal: Pierde 2 propiedades y paga €600.",
        "🔄 Compra impugnada: Roba 1 propiedad pero paga €500 a cada jugador.",
        "🗝️ Fondo de contingencia: Cobra €600 y protégete de las próximas 2 cartas negativas. [GUARDABLE]",
        "🎯 Operación urbanística: Roba 1 propiedad de cada jugador pero ve a la cárcel por 2 turnos."
    ]
};
