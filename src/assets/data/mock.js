import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaUser,
} from "react-icons/fa";
import { MdApps, MdContacts } from "react-icons/md";

export const projects = [
  {
    id: 1,
    name: "Gabriel",
    description: "LCM",
    url: "GRU",
    technology: "Female",
    language: [],
    avater: "http://dummyimage.com/250x.png/ff4444/ffffff",
    image: "http://dummyimage.com/250x.png/5fa2dd/ffffff",
    desc_long: "TMN",
    images: "SACC",
    status: "SA",
  },
  
  {
    id: 20,
    name: "Nathalia",
    description: "MPV",
    url: "DJO",
    technology: "Genderqueer",
    language: [],
    avater: "http://dummyimage.com/250x.png/5fa2dd/ffffff",
    image: "http://dummyimage.com/250x.png/dddddd/000000",
    desc_long: "KWK",
    images: "KMPV",
    status: "NA",
  },
];
export const socialmedia = [
  {
    id: 1,
    icon: <FaGithub className="w-5 h-5" />,
    name: "Github",
    url: "https://github.com/gostgmaer",
    text: "Github",
  },
  {
    id: 2,
    icon: <FaLinkedin className="w-5 h-5" />,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/kishor-sarkar/",
    text: "Linkedin",
  },
  {
    id: 3,
    icon: <FaFacebook className="w-5 h-5" />,
    name: "Facebook",
    url: "https://www.facebook.com/GOST.RKS",
    text: "Facebook",
  },
  {
    id: 4,
    icon: <FaInstagram className="w-5 h-5" />,
    name: "Instagram",
    url: "https://www.instagram.com/kishor.sarkar.in/",
    text: "Instagram",
  },
];
export const urls = [
  {
    id: 10,
    text: "Home",
    url: "/",
    icon: <FaHome className="w-5 h-5" />,
    navigation: "home",
  },
  {
    id: 4,
    text: "about",
    url: "/about",
    icon: <FaUser className="w-5 h-5" />,
    navigation: "about",
  },

  {
    id: 2,
    text: "portfolio",
    url: "/portfolio",
    icon: <MdApps className="w-5 h-5" />,
    navigation: "portfolio",
  },
  {
    id: 1,
    text: "contact",
    url: "/contact",
    icon: <MdContacts className="w-5 h-5" />,
    navigation: "contact",
  },
];
export const resumeContent = {
  experiance: {
    title: "Work Experiances",
    data: [
      {
        id: 1,
        position: "Research and Development",
        company: "Tagchat",
        start_time: "2022-06-16 05:08:21",
        end_time: "2022-08-07 10:27:46",
        details: [{}, {}],
      },
      {
        id: 2,
        position: "Marketing",
        company: "Oodoo",
        start_time: "2023-01-16 10:59:55",
        end_time: "2022-12-31 08:28:44",
        details: [],
      },
      {
        id: 3,
        position: "Human Resources",
        company: "Voolia",
        start_time: "2023-05-17 20:24:12",
        end_time: "2022-07-30 17:34:36",
        details: [{}, {}, {}],
      },
    ],
  },
  technical_skills: {
    title: "Technical Skills",
    skills: [
      {
        id: 1,
        skill: "Training",
        scale: 3.8,
      },
      {
        id: 2,
        skill: "Training",
        scale: 4.1,
      },
      {
        id: 3,
        skill: "Marketing",
        scale: 1.9,
      },
      {
        id: 4,
        skill: "Legal",
        scale: 2.2,
      },
      {
        id: 5,
        skill: "Legal",
        scale: 3.0,
      },
      {
        id: 6,
        skill: "Marketing",
        scale: 2.4,
      },
      {
        id: 7,
        skill: "Human Resources",
        scale: 2.2,
      },
      {
        id: 8,
        skill: "Legal",
        scale: 3.9,
      },
      {
        id: 9,
        skill: "Legal",
        scale: 2.7,
      },
      {
        id: 10,
        skill: "Training",
        scale: 2.4,
      },
    ],
  },
  profession_skills: {
    title: "Professional Skills",
    skills: [
      {
        id: 1,
        skill: "Business Development",
        scale: 4.3,
      },
      {
        id: 2,
        skill: "Human Resources",
        scale: 2.2,
      },
      {
        id: 3,
        skill: "Research and Development",
        scale: 1.6,
      },
      {
        id: 4,
        skill: "Human Resources",
        scale: 2.7,
      },
      {
        id: 5,
        skill: "Training",
        scale: 1.6,
      },
    ],
  },
  education: {
    title: "Education",
    data: [
      {
        id: 1,
        grade: 5.81,
        college_name: "IIT, Bangalore",
        department: "Computer Science",
        degree: "B.E",
        start_date: "2022-12-27 15:55:41",
        end_date: "2022-10-17 14:37:52",
        location: "17 Burrows Point",
        coursework: [
          "Web Development",
          "Client-side scripting",
          "Web architecture",
          "Object-Oriented Programming",
          "Mobile application development",
        ],
      },
      {
        id: 5,
        grade: 5.81,
        college_name: "IIT, Bangalore",
        department: "Computer Science",
        degree: "B.E",
        start_date: "2022-12-27 15:55:41",
        end_date: "2022-10-17 14:37:52",
        location: "17 Burrows Point",
        coursework: [
          "Web Development",
          "Client-side scripting",
          "Web architecture",
          "Object-Oriented Programming",
          "Mobile application development",
        ],
      },
    ],
  },
  profile: {
    name: "Kishor Sarkar",
    contact: [
      {
        id: 1,
        text: "Glover-Gusikowski",
        urls: "Support",
      },
      {
        id: 2,
        text: "Romaguera Inc",
        urls: "Accounting",
      },
    ],
    language: [
      {
        id: 1,
        language: "Croatian",
        profeciancy: 23,
      },
      {
        id: 2,
        language: "Gujarati",
        profeciancy: 51,
      },
      {
        id: 3,
        language: "Assamese",
        profeciancy: 14,
      },
    ],
    socialMedia: [
      {
        id: 1,
        social: "spiegel.de",
        name: "Quimba",
        url: "https://blinklist.com/volutpat/erat/quisque/erat/eros/viverra.js?in=ultrices&faucibus=vel&orci=augue&luctus=vestibulum&et=ante&ultrices=ipsum&posuere=primis&cubilia=in&curae=faucibus&donec=orci&pharetra=luctus&magna=et&vestibulum=ultrices&aliquet=posuere&ultrices=cubilia&erat=curae&tortor=donec&sollicitudin=pharetra&mi=magna&sit=vestibulum&amet=aliquet&lobortis=ultrices&sapien=erat&sapien=tortor&non=sollicitudin&mi=mi&integer=sit&ac=amet&neque=lobortis&duis=sapien&bibendum=sapien&morbi=non&non=mi&quam=integer&nec=ac",
        className: "Platov International Airport",
      },
      {
        id: 2,
        social: "google.nl",
        name: "Edgeblab",
        url: "http://umich.edu/nunc/commodo/placerat/praesent/blandit/nam.js?congue=libero&etiam=rutrum&justo=ac&etiam=lobortis&pretium=vel",
        className: "Swan River Airport",
      },
      {
        id: 3,
        social: "aol.com",
        name: "Devcast",
        url: "https://tripadvisor.com/nonummy.aspx?morbi=vel&sem=nulla&mauris=eget&laoreet=eros&ut=elementum&rhoncus=pellentesque&aliquet=quisque&pulvinar=porta&sed=volutpat&nisl=erat&nunc=quisque&rhoncus=erat&dui=eros&vel=viverra&sem=eget&sed=congue&sagittis=eget&nam=semper&congue=rutrum&risus=nulla&semper=nunc&porta=purus&volutpat=phasellus&quam=in&pede=felis&lobortis=donec&ligula=semper&sit=sapien&amet=a&eleifend=libero&pede=nam&libero=dui&quis=proin&orci=leo&nullam=odio&molestie=porttitor&nibh=id&in=consequat&lectus=in&pellentesque=consequat&at=ut&nulla=nulla&suspendisse=sed&potenti=accumsan&cras=felis&in=ut&purus=at&eu=dolor&magna=quis&vulputate=odio&luctus=consequat&cum=varius&sociis=integer&natoque=ac&penatibus=leo&et=pellentesque&magnis=ultrices&dis=mattis&parturient=odio&montes=donec&nascetur=vitae&ridiculus=nisi&mus=nam&vivamus=ultrices&vestibulum=libero&sagittis=non&sapien=mattis&cum=pulvinar&sociis=nulla&natoque=pede",
        className: "Northeast Philadelphia Airport",
      },
      {
        id: 4,
        social: "bbb.org",
        name: "Zoomzone",
        url: "https://dailymotion.com/lacus.xml?donec=sociis&posuere=natoque&metus=penatibus&vitae=et&ipsum=magnis&aliquam=dis&non=parturient&mauris=montes&morbi=nascetur&non=ridiculus&lectus=mus&aliquam=vivamus&sit=vestibulum&amet=sagittis&diam=sapien&in=cum&magna=sociis&bibendum=natoque&imperdiet=penatibus&nullam=et&orci=magnis&pede=dis&venenatis=parturient&non=montes&sodales=nascetur&sed=ridiculus&tincidunt=mus&eu=etiam&felis=vel&fusce=augue&posuere=vestibulum&felis=rutrum&sed=rutrum&lacus=neque&morbi=aenean&sem=auctor&mauris=gravida&laoreet=sem&ut=praesent&rhoncus=id&aliquet=massa&pulvinar=id&sed=nisl&nisl=venenatis&nunc=lacinia&rhoncus=aenean&dui=sit&vel=amet&sem=justo&sed=morbi&sagittis=ut&nam=odio&congue=cras&risus=mi&semper=pede&porta=malesuada&volutpat=in&quam=imperdiet&pede=et&lobortis=commodo&ligula=vulputate&sit=justo&amet=in&eleifend=blandit&pede=ultrices&libero=enim&quis=lorem&orci=ipsum&nullam=dolor&molestie=sit&nibh=amet&in=consectetuer&lectus=adipiscing&pellentesque=elit&at=proin&nulla=interdum&suspendisse=mauris&potenti=non&cras=ligula&in=pellentesque&purus=ultrices&eu=phasellus&magna=id&vulputate=sapien&luctus=in&cum=sapien&sociis=iaculis&natoque=congue&penatibus=vivamus&et=metus&magnis=arcu",
        className: "Truscott-Mungalalu Airport",
      },
    ],
    address: {},
    position: "Front-end Developer",
    summery:
      "Strong in Design and development with problem-solving skills, Proficient in React.js, JavaScript, node.js, Html CSS, and SQL. very excited to implement and work with new projects, and always love to learn new technologies and tools. Looking to start my career as an entry-level software engineer or developer in a great working environment",
  },
  others_activity: [
    {
      id: 1,
      activity: "Syracuse",
      color: "#21e2bf",
    },
    {
      id: 2,
      activity: "Puerto Inírida",
      color: "#cf05af",
    },
    {
      id: 3,
      activity: "Kindu",
      color: "#52e137",
    },
    {
      id: 4,
      activity: "Enid",
      color: "#33da1c",
    },
    {
      id: 5,
      activity: "Belle Chasse",
      color: "#4b5e0f",
    },
  ],
};
