SELECT COUNT(*) FROM questions WHERE id_categoria = 2;
SELECT nombre FROM questions WHERE id_categoria = 6 ORDER BY random() LIMIT 1;

-- Categoría 1: Competiciones y Torneos
INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (1, '¿Qué selección ganó la Copa Mundial de la FIFA en 2022?', '[
{
  "a": "Francia",
  "b": "Argentina",
  "c": "Croacia",
  "d": "Brasil"
}]', 'b');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (1, '¿Cuál es el club con más títulos de UEFA Champions League?', '[
{
  "a": "AC Milan",
  "b": "FC Barcelona",
  "c": "Real Madrid",
  "d": "Bayern Múnich"
}]', 'c');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (1, '¿Qué países fueron representantes de la Concacaf en el Mundial de Alemania 2006?', '[
{
  "a": "México, Estados Unidos y Costa Rica",
  "b": "México, Estados Unidos, Costa Rica y Trinidad y Tobago",
  "c": "México, Honduras y Costa Rica",
  "d": "México, Estados Unidos y Panamá"
}]', 'b');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (1, '¿Qué equipo ganó la Copa Libertadores en 2018 tras vencer a su acérrimo rival en Madrid?', '[
{
  "a": "Boca Juniors",
  "b": "River Plate",
  "c": "Flamengo",
  "d": "Palmeiras"
}]', 'b');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (1, '¿Qué equipo de la Liga MX descendió deportivamente en el año 2015?', '[
{
  "a": "Leones Negros de la UdeG",
  "b": "Dorados de Sinaloa",
  "c": "Lobos BUAP",
  "d": "Querétaro"
}]', 'a');


-- Categoría 2: Jugadores, Leyendas y Entrenadores
INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (2, '¿Quién resultó campeón goleador (Bota de Oro) del Mundial de Francia 1998?', '[
{
  "a": "Luis Figo",
  "b": "Zinedine Zidane",
  "c": "Davor Šuker",
  "d": "Luis Hernández"
}]', 'c');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (2, '¿Quién es el jugador con más partidos disputados en la historia de la Selección Mexicana?', '[
{
  "a": "Jorge Campos",
  "b": "Andrés Guardado",
  "c": "Pável Pardo",
  "d": "Claudio Suárez"
}]', 'b');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (2, '¿Qué técnico dirigió al Manchester United durante más de 26 años ganando 13 títulos de Premier League?', '[
{
  "a": "José Mourinho",
  "b": "Arsène Wenger",
  "c": "Sir Alex Ferguson",
  "d": "Pep Guardiola"
}]', 'c');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (2, '¿Qué futbolista apodado "El O Rei" ganó tres Copas del Mundo con Brasil?', '[
{
  "a": "Garrincha",
  "b": "Pelé",
  "c": "Ronaldo Nazário",
  "d": "Romário"
}]', 'b');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (2, '¿Quién ganó el premio Balón de Oro en el año 2007 antes del dominio entre Messi y Cristiano Ronaldo?', '[
{
  "a": "Kaká",
  "b": "Ronaldinho",
  "c": "Thierry Henry",
  "d": "Andriy Shevchenko"
}]', 'a');


-- Categoría 3: Reglamento, Táctica y Estilos de Juego
INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (3, '¿Cuántas reglas oficiales componen las Reglas del Juego establecidas por la IFAB?', '[
{
  "a": "15",
  "b": "17",
  "c": "20",
  "d": "12"
}]', 'b');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (3, '¿Qué término táctico describe el estilo de juego de posesión y pases rápidos popularizado por el Barcelona de Guardiola?', '[
{
  "a": "Catenaccio",
  "b": "Gegenpressing",
  "c": "Tiki-Taka",
  "d": "Jogo Bonito"
}]', 'c');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (3, '¿Qué decisión NO puede ser revisada directamente por el VAR durante un partido?', '[
{
  "a": "Goles e infracciones previas",
  "b": "Tarjetas rojas directas",
  "c": "Saques de banda o tiros de esquina",
  "d": "Penaltis marcados o no marcados"
}]', 'c');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (3, '¿En qué consiste la infracción de "fuera de juego" (offside)?', '[
{
  "a": "Estar en campo rival por delante del balón y del penúltimo adversario al recibir el pase",
  "b": "Tocar el balón con las manos dentro del área propia",
  "c": "Faltar al respeto al árbitro desde la banca de suplentes",
  "d": "Cometer una falta violenta al último hombre"
}]', 'a');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (3, '¿Cómo se llama la estrategia defensiva histórica italiana enfocada en el candado y contragolpe?', '[
{
  "a": "Total Voetbal",
  "b": "Catenaccio",
  "c": "Kick and Rush",
  "d": "Park the Bus"
}]', 'b');


-- Categoría 4: Historia y Momentos Icónicos
INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (4, '¿Cómo se le conoce a la histórica victoria de Uruguay frente a Brasil en la final del Mundial de 1950?', '[
{
  "a": "El Centenariazo",
  "b": "El Maracanazo",
  "c": "El Mineirazo",
  "d": "El Aztecase"
}]', 'b');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (4, '¿En qué año se celebró la primera Copa Mundial de Fútbol de la historia?', '[
{
  "a": "1924",
  "b": "1930",
  "c": "1938",
  "d": "1950"
}]', 'b');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (4, '¿En qué partido de un Mundial ocurrió el famoso gol conocido como "La Mano de Dios"?', '[
{
  "a": "Argentina vs. Inglaterra en 1986",
  "b": "Argentina vs. Alemania en 1990",
  "c": "Brasil vs. Italia en 1970",
  "d": "Uruguay vs. Ghana en 2010"
}]', 'a');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (4, '¿Qué selección impuso la revolucionaria "Naranja Mecánica" o Fútbol Total en los años 70?', '[
{
  "a": "Alemania",
  "b": "Países Bajos",
  "c": "Hungría",
  "d": "Brasil"
}]', 'b');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (4, '¿En qué año logró el Arsenal conquistar la Premier League de manera invicta ("Los Invisibles")?', '[
{
  "a": "1998-1999",
  "b": "2003-2004",
  "c": "2007-2008",
  "d": "2011-2012"
}]', 'b');


-- Categoría 5: Fichajes, Negocios y Estructura Institucional
INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (5, '¿Qué jugador posee el récord del traspaso más caro en la historia del fútbol tras costar 222 millones de euros?', '[
{
  "a": "Kylian Mbappé",
  "b": "Neymar Jr.",
  "c": "Cristiano Ronaldo",
  "d": "Jude Bellingham"
}]', 'b');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (5, '¿Qué organismo regulador aplica la normativa del "Fair Play Financiero" en el fútbol europeo?', '[
{
  "a": "FIFA",
  "b": "UEFA",
  "c": "CONMEBOL",
  "d": "IFAB"
}]', 'b');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (5, '¿En qué meses suele abrirse la ventana principal de traspasos (mercado de verano) en la mayoría de ligas europeas?', '[
{
  "a": "Enero y Febrero",
  "b": "Marzo y Abril",
  "c": "Julio y Agosto",
  "d": "Noviembre y Diciembre"
}]', 'c');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (5, '¿Qué término define el dinero estipulado en el contrato de un jugador para rescindirlo unilateralmente?', '[
{
  "a": "Prima de fichaje",
  "b": "Derecho de formación",
  "c": "Cláusula de rescisión",
  "d": "Toque de sueldo"
}]', 'c');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (5, '¿Cuál de los siguientes estadios de fútbol tiene mayor capacidad de espectadores en América Latina?', '[
{
  "a": "Estadio Azteca",
  "b": "Estadio Monumental (River Plate)",
  "c": "Estadio Maracaná",
  "d": "Estadio Olímpico Universitario"
}]', 'b');


-- Categoría 6: Cultura, Rivalidades y Folclore Futbolero
INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (6, '¿Cómo se le denomina tradicionalmente al enfrentamiento entre el Real Madrid y el FC Barcelona?', '[
{
  "a": "El Superclásico",
  "b": "El Clásico",
  "c": "Derby della Madonnina",
  "d": "El Clásico Capitalino"
}]', 'b');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (6, '¿Cuáles son los dos equipos que disputan el afamado "Superclásico" del fútbol argentino?', '[
{
  "a": "Racing vs. Independiente",
  "b": "Boca Juniors vs. River Plate",
  "c": "San Lorenzo vs. Huracán",
  "d": "Rosario Central vs. Newell''s"
}]', 'b');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (6, '¿A qué rivalidad regional pertenecen los equipos Tigres UANL y Rayados de Monterrey en México?', '[
{
  "a": "Clásico Tapatío",
  "b": "Clásico Regiomontano",
  "c": "Clásico Joven",
  "d": "Clásico Capitalino"
}]', 'b');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (6, '¿Qué término sudamericano se utiliza habitualmente para referirse al ambiente, colorido y cantos del público en la tribuna?', '[
{
  "a": "El Folclore o la Hinchada",
  "b": "La Ola",
  "c": "El Fair Play",
  "d": "El Mosaico"
}]', 'a');

INSERT INTO questions (id_categoria, nombre, opciones, correcta) VALUES (6, '¿Cómo se le conoce al clásico de la ciudad de Milán disputado entre el AC Milan y el Inter de Milán?', '[
{
  "a": "Derby de Italia",
  "b": "Derby della Madonnina",
  "c": "Derby della Mole",
  "d": "Derby del Sole"
}]', 'b');

