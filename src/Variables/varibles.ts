import { Message, Notification, ProfileData } from "../types/types";

export const regex = /^[\w]+([.][\w]+)*@(gmail|yahoo|outlook|hotmail|icloud|aol|protonmail)\.(com|org|net|edu|gov|mil|info|co(\.uk)?|us|io)$/;

export const levels = ['Básico', 'Medio', 'Avanzado'];
export const modes = ['Online', 'Presencial'];

export const categories = ['Animales', 'Ayuda', 'Consultoría', 'Diseño', 'Idiomas', 'Informática', 'Reparaciones', 'Salud', 'Tutorías', 'Otros  '];
export const profiles: ProfileData[] = [
  {
    id: 1,
    photo: "https://s3-alpha-sig.figma.com/img/b470/47e7/35553aca826d2fa7e62735cacf60e054?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aQjVG6pdYCSHhpTbTU0eYBy2o0X695Vvi5wQ2Ebeaix~Hn-aXb6tlftkcMBPcSNtsGERVGB-nn9k7w47rVuMrdBpYl-1duEQTKmWmm6aQBnxrMVJGntA4hMT0eM8ngy0FcKApti87VYuYRVusTlc~F0I09EYb--e0z3peWhQDThRe53FnHZ6LG0lp93Mp5Ht34ISMh06mkwRA6LYvxkToW5pNmjz3pBe1Pfb63Ff8elquR60Df1QXofx0CC90QZ97UCQWW2YW8AZzn~pkm--LLX~i7f12-NwEMl7iE~BOZOIJP4tnPUR-l7eoYhx52UDy6NQnujpkihd2t9z21os9A__ ",
    name: "Juanita Perez",
    service: "Cuidado de animales",
    location: "14011 Córdoba, Córdoba provincia",
    rating: 5,
    reviewsCount: 15,
    levels: [
      { name: "Básico", active: false },
      { name: "Medio", active: true },
      { name: "Experto", active: false }
    ],
    reviews: [
      { name: 'July', 
        city: 'Madrid', 
        review: 'Juanita me ayudó mucho a aprender a pintar un cuadro para mi familia', 
        givenSkill: 'Cocina',
        recivedSkill: 'Pintura',
        photo: 'https://s3-alpha-sig.figma.com/img/5494/b2cb/c5e7f6247f500b1c1d0013e023d455ae?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=REUEIWGri6QgbdhgJiK6RsglzeFGI25~VVQjFYvM0wm~EHSP5iHT7YKhdU4~~l7TKpLODqUj~aG0RNkG8qrt6BOdpmGe~wDA0Eu40L8pGatqqxaRfEWEcFyx62njF50~KBvDZCOenIMyAFjuI8cJ8kkshgwW1R3ngdvkRA-vnbHwBW2f9qwAyN0yTk1lw3Ye2JKLihNVCPjtPJjPcq1GmQfkLfetGS56pOvK253tSUxtsPMqyh008qB1qyaqkLEfZMTDgNZwvJmXLOpu3gUHOccaQHpxVQ3whMQYPHTUEMh-UQxJCOuPObcF3aA7pUyR5Kk~KaIL28dtGyVqXNpQNQ__' },
      { name: 'Evy', city: 'Madrid', review: 'Juanita tiene una paciencia infinita y te explica muy bien todos los procesos para iniciar en este bonito arte', photo: 'https://s3-alpha-sig.figma.com/img/a349/cdde/1776791dadd99c32bef907e5d7c0f4e8?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=la0ov8Dvigh2sp6QgFz7E5pcnCDhCoHrLtcWy3WJWzOK6AKqE1U7XJY8q9VLVouG0CkCopKc9xKz4R~BdqZrgj3pVYIWNwk0M7vy2NrnbgQktCJydN-4~OQNogTNcWbEpwLuh-IBQzeP0d2EjMv9DnFDkyGtXvFjX5p9tsKOgPlEurdRuSYlH76~YGRoAfLvr2TUVJvTrSDl83tzcKzn9CJnxpKQMhkLvuIR6OXSkmv8SaQ6iYS4Mb4mbhbEPk8Cv5GRO2x9at0LrzgjUB8vF5zILGXs4WZE5l4bHA9pBdjUzWCjVoTc4XFznyJ9YivC3T3O2rfcvl9T0ez4PGaGug__' },
      { name: 'Ely', city: 'Madrid', review: 'Una gran maestra muy dedicada y educada', photo: 'https://s3-alpha-sig.figma.com/img/31da/64df/8cc5a1429050e1445737d4cff167a519?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EXwuWlpkLjQI2dprdP4dvyIcYWiQJwU2GlMUhEamDhfN3Bj-nRhkkvwcplHaepgEcv8PSy5xQbKLroqxbjiTs3DFepNkwuct-odtgDMBMnHsu16YGm85oSEVRyrXNdNmI5ggph13XoN97AsuWSr6xw~0jZ48i4BkKaTUezNa7EoY2Wcql59YVwmdllk3N7IqUPRSk93Gwmd8xwZz6Tp6QaM4QL549elMk8rG1PeoLm43CJ5M7vCKvaTMIRcOS1i1oDwQw7IZwOwVz4t9rSosFJ8nrT6igOLQVpEE9tVCs6Nq9IN1Vc5Sh8bVHdu6qE1nq3ia1SYmh9Qw4b3YHlFPGA__' }
      ,
      { name: 'Laura García', 
        city: 'Madrid', 
        review: 'Las clases de pintura al óleo han sido absolutamente maravillosas. La técnica y paciencia que he podido desarrollar en cada sesión han superado mis expectativas, ¡es realmente inspirador! Además, el intercambio de habilidades de cocina vegetariana ha sido todo un acierto. He aprendido a preparar recetas deliciosas y sorprendentes, y me ha motivado a explorar aún más en la cocina. Este intercambio ha sido una experiencia enriquecedora en muchos sentidos, desde la creatividad artística hasta el descubrimiento de nuevos sabores. ¡Muy recomendado!"',
        givenSkill: 'Animales',
        recivedSkill: 'Tutorias',  
        photo: 'https://s3-alpha-sig.figma.com/img/9cce/b03b/9fc0ca1876d1c41c54d00f55bac718e2?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iJYsRXy4mORTsHjUD9a-N~-9A-u8Hh7WMq3Vc7CVk6rDwO0Db6TyJ~NCLvzFudOXErAgyGBDheMVSEAG2ADDYO-vEuJoHI9TkBrjmNbwDa-G5ZypzKy2d1-Ok26xO-jYBb9kpFN8xSoasA9WD6LHFPXLEWg50qYYnphuypo4kh5l8NdOy7VGEtlGE7w~IRSbH2k~UWoHeHUTitV--1B9ce1KFNqjVVP715am1M6TOn~037QdNzgh6yzCgy0Cctn1kptP3D92ulyHDISdgdq1S3prljnEbZf4uVYy0cD7rmwxnQEKliqUPjk3SSLBYlqcP4-igUihiRkPob1w5Rsnvg__'}
    ],
    availability: "9:00hs a 14:00hs",
    description: "Tengo una amplia experiencia en cuidar animales, he trabajado en una guardería de mascotas por 2 años.",
    skills: ["Animales", "Pintura"],
    interestSkills: ["Informática", "Idiomas", "Tutorias"]
  },
  {
    id: 2,
    photo: "https://s3-alpha-sig.figma.com/img/579b/b647/277f60d43c33a8814c60a8b79d718888?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JM~fwyZG-V-hYyE38O9Q7KwBbtYWRVs8mFNt~Bp-hBWxfBhoGrqfxNLuhZanhaqMJWlE-kHwlMHdysds2wBkSYErltjYu~CRjCxV6VqbRa3GaNkMp0rC~kF-URmVoWxCHCgX2biNXCt-~ImBsOeTSQp9mphlIR7i7aBvgO3yfrNDQZaPZbmaa12l4afAikglKPvp4UG8mw2cSWfKjgU~1hHnOsC0u88OVQ-BHx6bdW2x8S6P5mb-6FzEkBaSRGdsJhkLpFr2mKK-ICa0kUbJ~OjwcFKtplrZmp3mQt4U9nMSnmzUsd2LcH2b7J7Wllqk-swtG890Xo5Km1~26-G52w__",
    name: "Aina Pons",
    service: "Paseo de animales",
    location: "14011 Córdoba, Córdoba provincia",
    rating: 5,
    reviewsCount: 15,
    levels: [
      { name: "Básico", active: false },
      { name: "Medio", active: false },
      { name: "Experto", active: true }
    ],
    reviews: [
      { name: 'July', 
        city: 'Madrid', 
        review: 'Juanita me ayudó mucho a aprender a pintar un cuadro para mi familia',
        givenSkill: 'Cocina',
        recivedSkill: 'Pintura', 
        photo: 'https://s3-alpha-sig.figma.com/img/5494/b2cb/c5e7f6247f500b1c1d0013e023d455ae?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bQ8b8ObI4Lt8tckV9FC8FJxsgy~uqoYOSxVZU9l1aam8vzJcdZ1TwNJPMbEHkpfL-CaKupKx0gGBhyVu8ZrrY9p29vs8Odao7Qz26OjaIeG8nWtHs0TMJTKI5dgG5PCowcfOKKhf-Ew~bAgQ8mns3S0FCvzgz7nM7JRCemZA-jb9LlTNZiS4RGKcYHqNFLKiFt7F2PwnV6EV9EFKGjHHRXZahhra7G4f9tJckJtUQZa9wYe8TgWqlotUWEbmcSQqGtLbnvE3PKJ7GXbgxhONeFeuRzmc3sE2e1f2eh-MHf~sXN0nb84Ep0Cm50o2z4jgOnEeYVblbdimY393Hnegkw_' },
      { name: 'Evy', city: 'Madrid', review: 'Juanita tiene una paciencia infinita y te explica muy bien todos los procesos para iniciar en este bonito arte', photo: 'https://s3-alpha-sig.figma.com/img/a349/cdde/1776791dadd99c32bef907e5d7c0f4e8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0XHYwba39Ar0xib3zGh9ufqtYMEKIodlexSnBnM6KK0OUUyG4TcDO6kUM0ydn4vdSzkICZyHWn4~i5sLqkqddM3rOV20mtYb9ePwupAYPw6H~wCOxLiDV8qbZr-pGW0Pm1OgdlCssgBl0evpYJ-FuMidZdejmNre2Lc4VtU9rLZ6Cx-lcjqMgHhGdheBjO-tWE795zwthRRK~HtAsGUtXPwwWxfY5ot-3uzS-tYWalW3954ee10mE4m8u5Pn8m8joFejpPwaXzUCAI6An94CPs31Kevxdqu13tUPOw0ZTSR9~I8BirfdLdkdrNovrNLU3rDYFEBf~SRTS7JDj24yg__' },
      { name: 'Ely', city: 'Madrid', review: 'Una gran maestra muy dedicada y educada', photo: 'https://s3-alpha-sig.figma.com/img/31da/64df/8cc5a1429050e1445737d4cff167a519?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B1QnYrsyHmb8-wKPhZ6DN9CHv6uqTXVLUbV-YJfT4AGtsNSXPEfX2ojQ~urn5VZdZukaF4bha-bftGkxZZCxpZ1np~vrf2xcFCwObMNTQDjt649kBQYlSbI5~25JkIg1hjxh9OUtljxaBUweBGtpjW6DtHQbEwvQfT1l48QdkfpxegDjnrqBs1K48Z5ObdPHfHmLae2eWbeR6bpg~8ZYrGp3lwIoYy-R41Vkk1N1LRjwKd5vfCFoHRCjNYv6JGtDQ-sCQei8sitMFm4CtnxW3I~a5S5lNjRJrFRIwkTB7~Mg3Xleu2FRMEmyLAnSUcRQTQ~Ur8CfbwhZUrz7UiTvtg__' }
    ],
    availability: "Flexibilidad horaria",
    description: "Desde hace 1 año dedico mis tiempos libres en pasear los perros de mis amigos, me encanta pasear con ellos",
    skills: ["Animales"]
  },
  {
    id: 3,
    photo: "https://s3-alpha-sig.figma.com/img/753a/bba2/19d1091e26612340e3d9e9d9b8183d7e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DkTwnKZM1IrZ9d9FCcp4FGPIqVgmFAwmGUGvEZp7g1G0EfJ~vkc7NjonyyuZw5rfLswN5gsukTugDt78YP0M39sTYFQqlm3De2pxeiJUIqqCB3YIvPp3Zq1Go-TXzE1EAzvc~292NW5ck-Hu6bgBNaKpYKXUdq1~BCLhZGhz0BhCvFwe5ng-5drANb-W2YAglK3M5mtyvKtTC5bpBuELcxWNB4qctojc76SziaWLNMkoe0uCquEIe1ea76vXgKU9pm7JvAW1wpEljupfnRNF9N5YV5QQ2tax6W24AkpIVo-JC4K6wmLenjwR7WskYL-iZh8cOJJYruouFlxxLUlwYQ__",
    name: "Aaron Moreno",
    service: "Consejos de animales",
    location: "Online",
    rating: 5,
    reviewsCount: 15,
    levels: [
      { name: "Básico", active: false },
      { name: "Medio", active: true },
      { name: "Experto", active: false }
    ],
    reviews: [
      { name: 'July', 
        city: 'Madrid', 
        review: 'Juanita me ayudó mucho a aprender a pintar un cuadro para mi familia', 
        givenSkill: 'Cocina',
        recivedSkill: 'Pintura',
        photo: 'https://s3-alpha-sig.figma.com/img/5494/b2cb/c5e7f6247f500b1c1d0013e023d455ae?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=REUEIWGri6QgbdhgJiK6RsglzeFGI25~VVQjFYvM0wm~EHSP5iHT7YKhdU4~~l7TKpLODqUj~aG0RNkG8qrt6BOdpmGe~wDA0Eu40L8pGatqqxaRfEWEcFyx62njF50~KBvDZCOenIMyAFjuI8cJ8kkshgwW1R3ngdvkRA-vnbHwBW2f9qwAyN0yTk1lw3Ye2JKLihNVCPjtPJjPcq1GmQfkLfetGS56pOvK253tSUxtsPMqyh008qB1qyaqkLEfZMTDgNZwvJmXLOpu3gUHOccaQHpxVQ3whMQYPHTUEMh-UQxJCOuPObcF3aA7pUyR5Kk~KaIL28dtGyVqXNpQNQ__' },
      { name: 'Evy', city: 'Madrid', review: 'Juanita tiene una paciencia infinita y te explica muy bien todos los procesos para iniciar en este bonito arte', photo: 'https://s3-alpha-sig.figma.com/img/a349/cdde/1776791dadd99c32bef907e5d7c0f4e8?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=la0ov8Dvigh2sp6QgFz7E5pcnCDhCoHrLtcWy3WJWzOK6AKqE1U7XJY8q9VLVouG0CkCopKc9xKz4R~BdqZrgj3pVYIWNwk0M7vy2NrnbgQktCJydN-4~OQNogTNcWbEpwLuh-IBQzeP0d2EjMv9DnFDkyGtXvFjX5p9tsKOgPlEurdRuSYlH76~YGRoAfLvr2TUVJvTrSDl83tzcKzn9CJnxpKQMhkLvuIR6OXSkmv8SaQ6iYS4Mb4mbhbEPk8Cv5GRO2x9at0LrzgjUB8vF5zILGXs4WZE5l4bHA9pBdjUzWCjVoTc4XFznyJ9YivC3T3O2rfcvl9T0ez4PGaGug__' },
      { name: 'Ely', city: 'Madrid', review: 'Una gran maestra muy dedicada y educada', photo: 'https://s3-alpha-sig.figma.com/img/31da/64df/8cc5a1429050e1445737d4cff167a519?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EXwuWlpkLjQI2dprdP4dvyIcYWiQJwU2GlMUhEamDhfN3Bj-nRhkkvwcplHaepgEcv8PSy5xQbKLroqxbjiTs3DFepNkwuct-odtgDMBMnHsu16YGm85oSEVRyrXNdNmI5ggph13XoN97AsuWSr6xw~0jZ48i4BkKaTUezNa7EoY2Wcql59YVwmdllk3N7IqUPRSk93Gwmd8xwZz6Tp6QaM4QL549elMk8rG1PeoLm43CJ5M7vCKvaTMIRcOS1i1oDwQw7IZwOwVz4t9rSosFJ8nrT6igOLQVpEE9tVCs6Nq9IN1Vc5Sh8bVHdu6qE1nq3ia1SYmh9Qw4b3YHlFPGA__' }
    ],
    availability: "17:00hs a 21:00hs",
    description: "Tengo 3 años de estudios en medicina veterinaria, por lo cual puedo dar recomendaciones  a los dueños de mascotas",
    skills: ["Animales"]
  },
  { id: 4,
    photo: "https://s3-alpha-sig.figma.com/img/24f1/7eb6/c73b9a48db63e19cb69ac9a12339e6b8?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JFfR~5hsZnOlKjXaFH8kr86n2BzaB7Sq-D2shsLoNYHxgs~ZcvOcd-z~an9p6Xs5-p46fheUCSJMNRfLvwnMMSrZY~FYe8ejgFl2dnoEUFjSB0SmsWNemiP37oO9h7jKgDc1B8G3ULn~Q7rwZcvYVph8KGvSEvrE7-g-oBLtBFa7RJJLcpMyEPxg2QynF9XqUldiJ2MKfbFP37-qxhVNs7Hv1~wHi4eC~2P5udXN6ynW9pVMCkFbLBpdphgZ-aPCgJeaFlIrnzC2XAr1E1SS3TzCnASznXBlr5ObAWKlM41ghfy81p7V3Hv3gY0I8NsSsSQsgjE9G0-VmU7okCR4nw__",
    name: "Maria Nuria Salinas",
    service: "Aseo de animales",
    location: "08001 Barcelona, España",
    rating: 5,
    reviewsCount: 15,
    levels: [
      { name: "Básico", active: false },
      { name: "Medio", active: true },
      { name: "Experto", active: false }
    ],
    reviews: [
      { name: 'July', 
        city: 'Madrid', 
        review: 'Juanita me ayudó mucho a aprender a pintar un cuadro para mi familia', 
        givenSkill: 'Cocina',
        recivedSkill: 'Pintura',
        photo: 'https://s3-alpha-sig.figma.com/img/5494/b2cb/c5e7f6247f500b1c1d0013e023d455ae?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bQ8b8ObI4Lt8tckV9FC8FJxsgy~uqoYOSxVZU9l1aam8vzJcdZ1TwNJPMbEHkpfL-CaKupKx0gGBhyVu8ZrrY9p29vs8Odao7Qz26OjaIeG8nWtHs0TMJTKI5dgG5PCowcfOKKhf-Ew~bAgQ8mns3S0FCvzgz7nM7JRCemZA-jb9LlTNZiS4RGKcYHqNFLKiFt7F2PwnV6EV9EFKGjHHRXZahhra7G4f9tJckJtUQZa9wYe8TgWqlotUWEbmcSQqGtLbnvE3PKJ7GXbgxhONeFeuRzmc3sE2e1f2eh-MHf~sXN0nb84Ep0Cm50o2z4jgOnEeYVblbdimY393Hnegkw_' },
      { name: 'Evy', city: 'Madrid', review: 'Juanita tiene una paciencia infinita y te explica muy bien todos los procesos para iniciar en este bonito arte', photo: 'https://s3-alpha-sig.figma.com/img/a349/cdde/1776791dadd99c32bef907e5d7c0f4e8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0XHYwba39Ar0xib3zGh9ufqtYMEKIodlexSnBnM6KK0OUUyG4TcDO6kUM0ydn4vdSzkICZyHWn4~i5sLqkqddM3rOV20mtYb9ePwupAYPw6H~wCOxLiDV8qbZr-pGW0Pm1OgdlCssgBl0evpYJ-FuMidZdejmNre2Lc4VtU9rLZ6Cx-lcjqMgHhGdheBjO-tWE795zwthRRK~HtAsGUtXPwwWxfY5ot-3uzS-tYWalW3954ee10mE4m8u5Pn8m8joFejpPwaXzUCAI6An94CPs31Kevxdqu13tUPOw0ZTSR9~I8BirfdLdkdrNovrNLU3rDYFEBf~SRTS7JDj24yg__' },
      { name: 'Ely', city: 'Madrid', review: 'Una gran maestra muy dedicada y educada', photo: 'https://s3-alpha-sig.figma.com/img/31da/64df/8cc5a1429050e1445737d4cff167a519?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B1QnYrsyHmb8-wKPhZ6DN9CHv6uqTXVLUbV-YJfT4AGtsNSXPEfX2ojQ~urn5VZdZukaF4bha-bftGkxZZCxpZ1np~vrf2xcFCwObMNTQDjt649kBQYlSbI5~25JkIg1hjxh9OUtljxaBUweBGtpjW6DtHQbEwvQfT1l48QdkfpxegDjnrqBs1K48Z5ObdPHfHmLae2eWbeR6bpg~8ZYrGp3lwIoYy-R41Vkk1N1LRjwKd5vfCFoHRCjNYv6JGtDQ-sCQei8sitMFm4CtnxW3I~a5S5lNjRJrFRIwkTB7~Mg3Xleu2FRMEmyLAnSUcRQTQ~Ur8CfbwhZUrz7UiTvtg__' }
    ],
    availability: "10:00hs a 18:00hs",
    description: "Especialista en aseo y cuidado de mascotas con 5 años de experiencia. Ofrezco servicios de peluquería y baños para perros y gatos.",
    skills: ["Animales", "Peluquería"]
  }
];

export const mockNotifications: Notification[] = [
  {
    id: 1,
    type: "completed",
    user: "Laura González",
    message: "La cadena de favores está llegando a su fin. Cuéntanos tu experiencia.",
    date: "12:44 pm",
    imageUser: "https://s3-alpha-sig.figma.com/img/e770/1743/70f48b588224adfd9d1c4c3ae9b06873?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nsJIoP6yzS28wgpZEWKOOXxDSGRMzgJ5O6OknMP4QD51gAZcS7iwXs7AXfeBjog23dMHpW4l855llwJemFo27PDwEZgxY5DEMpGHEJuX-M7Rm2749nPGArvgT34gH6JpVfXJI2IWpjyHG3EqPWZdffwBXC1I~8KHfiPg5haFvnPHNqyniHt~v4Kp~ejMqHwZ1Y4AZYinmxjidE0Fb118RVPvu-RrUiLmU1rBRuUVwZqMQHP4VkMg-7QvVlVfmoRt0EEg1iRTW7jLLszBn0A2oZoA3ExfLV~fHOGee1kI51aXwC9w53OuDvjjI3DMZFj6i0GDFSjzEJl98VDkzObiGw__" 
  },
  {
    id: 2,
    type: "request",
    user: "Alberto Zuñiga",
    message: "ha enviado una solicitud.",
    date: "01:30 pm",
    imageUser: "https://s3-alpha-sig.figma.com/img/d2b4/7434/0cf0b35e03856e3b9d399657ad1a7ec4?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nuteueLjZfmHbwP4UZk1pPzg7PmxMmdm7gztw0cxH~AyhdYA5uFURSP83f6zt~6rYMDVr0hANA2KejbaU0THU1PZXdTEeVANfyPJmgpVzJ57MuWEE1zWpkJ1Kcl27rdajK7Kkzww0CDcON7QR~81juaJLKyoZgJLN1voRSs7kZS~cZvWfhiRK0rXXlbJ8jQ95fCOTi9cq7Siw2NQ~ILDiG-8RqwlHCnottkTmCEOnQGeEoQhvZ8ln5ANOt3W3LVk7mKxGSualRdtQxWzY7iW69uSv2zg75LCYl3zqhibyLZroj0kZoI1JAosliuJZL0ghWMnS12gWaC0HArvM0Q8Ow__"
  },
  {
    id: 3,
    type: "accepted",
    user: "Valeska Jara",
    message: "El intercambio ha comenzado. Envía tu primer mensaje y conoce a la otra persona.",
    date: "10:15 am",
    imageUser: "https://s3-alpha-sig.figma.com/img/31da/64df/8cc5a1429050e1445737d4cff167a519?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EXwuWlpkLjQI2dprdP4dvyIcYWiQJwU2GlMUhEamDhfN3Bj-nRhkkvwcplHaepgEcv8PSy5xQbKLroqxbjiTs3DFepNkwuct-odtgDMBMnHsu16YGm85oSEVRyrXNdNmI5ggph13XoN97AsuWSr6xw~0jZ48i4BkKaTUezNa7EoY2Wcql59YVwmdllk3N7IqUPRSk93Gwmd8xwZz6Tp6QaM4QL549elMk8rG1PeoLm43CJ5M7vCKvaTMIRcOS1i1oDwQw7IZwOwVz4t9rSosFJ8nrT6igOLQVpEE9tVCs6Nq9IN1Vc5Sh8bVHdu6qE1nq3ia1SYmh9Qw4b3YHlFPGA__"
  },
  {
    id: 4,
    type: "rejectedExchange",
    user: "Andrés Castro",
    message: "Lo sentimos, busca otras habilidades para intercambiar.",
    date: "11:20 am",
    imageUser: "https://s3-alpha-sig.figma.com/img/56ba/d462/2730638ef64135973f6dd27e6cb23301?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pSiTvOG6pZtbAd-w~p0Sp2fvAKt4g22V9s1HuPaVdAvR0zQbrMcqYdS3gf740PqNUkffSn9CosA3~7I3RhitVMXrRqArtgcgfhMbYZAeoIxDPXSn3kAT7vAIYLUYgPrnnuJA-Y~J5OGuIGbP38uvVZ5NGtk5kDqRVg91yzwbFkOtG3m8Ng168OrBrH99ofwSTDU3gHBU5Z-YpITtqwo4uWUYO9xChVvRYFYlEzkn~mpYE-G7heVOZ-ljTdEAAkgSU8ySgIaGfb-r54eC4xUpOjRguEeDrMjvat~8Tw4bBHhYkbMoP5z9n0kQlt3doFUb1oZpy1JOZWTdyIBiBFIrCA__"
  },
  {
    id: 5,
    type: "rejectedRequest",
    user: "Estela Naiad",
    message: "Has rechazado la solicitud de intercambio.",
    date: "09:50 am",
    imageUser: "https://s3-alpha-sig.figma.com/img/957a/9171/1abea02b1ea90a2145b69535c0452819?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=getS0XQl70XvBn1v9jkztS5SanemxNVIQFcj2GqXqoh-mmCG23vsbworV5TWfWAZZaAAR5INshlG0-TavGMMr21jGrTx6L5IItwBQFmrnwy8u~aLMccrUbMtW9Jvrk1hqzW0PvjMECCBp31zkGBG9-mIskyqhGGZH08JhCKXMqjBrvqwF8ly0DLvgavCxqYdf~q4~H1nAts-gqiUi4oN79CcBFYicmxpxfPvBU9U1yrcruUzC20vp2C2Z1cM7C8mlhIUSVIPDDRAqc-2PUAU1s2ZIgVFRvOYAJHkGIHTnK5hhV1g6aL9XnQQq2Dq3DvOXrvTvgh~XDDsoRAbHUJcGA__"
  }
];

export const userContacts = [
  { id: 1, name: "Lidia Soriano", message: "Muchas Gracias", src: "https://s3-alpha-sig.figma.com/img/fc60/2f83/897333d9c3ae864405985d11c92de113?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S16THUaOFCOL2-4KctzHcuwQP-vV~WB2otLGgeAu783UROEYACTjM-bYfu~vZBHzsEACqW5NO813DMbSqRlpJ1PGdQ5ByW1XI9rUBsSGbYpC-fVkQxk9yIeZSV6YFRrvmt7JPkbSGIBfenevhJzD2p-CPFmR1uMBQKk8Gq3FrZMmXcpVVR93dpQix~0gyQBXX~l1j0b56ZI0fFuGmjpPRSq-YbD3PhilJwB3xxVtwPc65aDRDWD~7atLvb6Swt1dNOsnMHM227b7v02xzKL6plwg6IXf~hxahrPSvHpnLVTPeOCmLqO8QdRdHaXK5Yu3lriChGS9wtoQvEGh4ZgVeg__" },
  { id: 2, name: "Elsa Landó", message: "No lo sé", src: "https://s3-alpha-sig.figma.com/img/e434/e5ad/c53d0f5d51bedc4b7a880f0f637b6df3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hbSSaSBSKlEaneaaD62MjO1GpYufBASpMH346xrKJGDvMIzmxLb4RE4PAkCdZNet5mOZa4tsryGjEiANj57381tBeUvZv3KnsqaRhLf53wCY3uPjq0SYZSmmsJh9L6racvOYIEif-hit8bBNT4Pd2HabLkvWFddcOQFmYeXumhoBq5jeBCpWgNVj1~ENgzBCiIKWJhIlrz5Zuo64p3N4vyOiLEHotBf9LjAJ5APQqe0pJ0bOki~yasfqo2PjOjmTXti47nkZJJHFfgqJtbDTACBJiYL46bcb~cAvgctLXfA2ru-OcD9zWNx6l9RgxeeibLu8kGBVbTnbWPSj0Tj3-g__" },
  { id: 3, name: "Estela Naiad", message: "¿Puedes?", src: "https://s3-alpha-sig.figma.com/img/957a/9171/1abea02b1ea90a2145b69535c0452819?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=getS0XQl70XvBn1v9jkztS5SanemxNVIQFcj2GqXqoh-mmCG23vsbworV5TWfWAZZaAAR5INshlG0-TavGMMr21jGrTx6L5IItwBQFmrnwy8u~aLMccrUbMtW9Jvrk1hqzW0PvjMECCBp31zkGBG9-mIskyqhGGZH08JhCKXMqjBrvqwF8ly0DLvgavCxqYdf~q4~H1nAts-gqiUi4oN79CcBFYicmxpxfPvBU9U1yrcruUzC20vp2C2Z1cM7C8mlhIUSVIPDDRAqc-2PUAU1s2ZIgVFRvOYAJHkGIHTnK5hhV1g6aL9XnQQq2Dq3DvOXrvTvgh~XDDsoRAbHUJcGA__" },
  { id: 4, name: "Andrés Castro", message: "¡Hola!", src: "https://s3-alpha-sig.figma.com/img/56ba/d462/2730638ef64135973f6dd27e6cb23301?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pSiTvOG6pZtbAd-w~p0Sp2fvAKt4g22V9s1HuPaVdAvR0zQbrMcqYdS3gf740PqNUkffSn9CosA3~7I3RhitVMXrRqArtgcgfhMbYZAeoIxDPXSn3kAT7vAIYLUYgPrnnuJA-Y~J5OGuIGbP38uvVZ5NGtk5kDqRVg91yzwbFkOtG3m8Ng168OrBrH99ofwSTDU3gHBU5Z-YpITtqwo4uWUYO9xChVvRYFYlEzkn~mpYE-G7heVOZ-ljTdEAAkgSU8ySgIaGfb-r54eC4xUpOjRguEeDrMjvat~8Tw4bBHhYkbMoP5z9n0kQlt3doFUb1oZpy1JOZWTdyIBiBFIrCA__" },
];

export const mensajes: Message[] = [
  { id: 1, content: "Sí! Me ha salido todo muy bien!", sender: "other" },
  { id: 2, content: "Qué bueno que te pude ayudar!", sender: "user" },
  { id: 3, content: "Me alegra mucho!", sender: "user" },
]