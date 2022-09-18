import medImage from "../assets/images/image 10.svg";
import reuImage from "../assets/images/image 12.svg";
import emeImage from "../assets/images/image 13.svg";
import cenImage from "../assets/images/image 14.svg";

export const helpNavs = [
  {
    text: "meditaciones",
    image: medImage,
    resources: [
      {
        href: "https://www.youtube.com/playlist?list=PLq6Xx0w_9LD3HycuRVVuJ-R-zqTLIj1B8",
        name: "Meditación Deepak Chopra",
      },
      {
        href: "https://open.spotify.com/artist/0xLA1OtEYiULf7h71H4Wly",
        name: "Meditación Guiada Spotify",
      },
    ],
  },
  {
    text: "reuniones",
    image: reuImage,
    resources: [
      {
        href: "https://aa.org.ar/grupos-virtuales-argentina/",
        name: "Reuniones virtuales (AA)",
      },
      {
        href: 'href="https://aa.org.ar/grupos-aa/',
        name: "Reuniones presenciales (AA)",
      },
    ],
  },
  {
    text: "emergencias",
    image: emeImage,
    resources: [
      {
        href: "https://api.whatsapp.com/send?phone=5491122926686",
        name: "Whatsapp Alcoholicos Anonimos",
      },
      {
        href: "https://www.argentina.gob.ar/servicio/recibir-atencion-ante-el-consumo-problematico-de-sustancias-psicoactivas",
        name: "Asistencia inmediata Sedronar",
      },
    ],
  },
  {
    text: "centros",
    image: cenImage,
    resources: [
      {
        href: "https://centroethos.com.ar/",
        name: "Centro Ethos",
      },
      {
        href: "https://manantiales.org/",
        name: "Manantiales",
      },
      {
        href: "https://www.buenosaires.gob.ar/salud/centros-de-atencion-en-adicciones",
        name: "Centro de atención a las adicciones CABA",
      },
    ],
  },
];
