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
        details: [
          {
            id: 1,
            value: "Killian",
          },
          {
            id: 2,
            value: "Gavrielle",
          },
          {
            id: 3,
            value: "Ninnetta",
          },
          {
            id: 4,
            value: "Kelley",
          },
          {
            id: 5,
            value: "Doralin",
          },
        ],
      },
      {
        id: 2,
        position: "Marketing",
        company: "Oodoo",
        start_time: "2023-01-16 10:59:55",
        end_time: "2022-12-31 08:28:44",
        details: [
          {
            id: 1,
            value: "Killian",
          },
          {
            id: 2,
            value: "Gavrielle",
          },
          {
            id: 3,
            value: "Ninnetta",
          },
          {
            id: 4,
            value: "Kelley",
          },
          {
            id: 5,
            value: "Doralin",
          },
        ],
      },
      {
        id: 3,
        position: "Human Resources",
        company: "Voolia",
        start_time: "2023-05-17 20:24:12",
        end_time: "2022-07-30 17:34:36",
        details: [
          {
            id: 1,
            value: "Killian",
          },
          {
            id: 2,
            value: "Gavrielle",
          },
          {
            id: 3,
            value: "Ninnetta",
          },
          {
            id: 4,
            value: "Kelley",
          },
          {
            id: 5,
            value: "Doralin",
          },
        ],
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
  referance: {
    title: "Referance",
    data: [
      {
        id: 1,
        grade: 5.81,
        name: "New User",
        deg: "Project manager",
        email: "B.E",
      },
      {
        id: 2,
        grade: 5.81,
        name: "New User",
        deg: "Project manager",
        email: "B.E",
      },
    ],
  },
  name: "Thomas Davis",
  label: "Web Developer",
  image:
    "https://avatars.githubusercontent.com/u/43110343?v=4",
  summary:
    "I'm a full stack web developer who can build apps from the ground up. I've worked mostly at startups so I am used to wearing many hats. I am a very product focussed developer who priotizes user feedback first and foremost. I'm generally very flexible when investigating new roles. ",
  website: "https://lordajax.com",
  email: "thomasalwyndavis@gmail.com",
  location: {
    city: "Melbourne",
    countryCode: "AU",
  },
  profiles: [
    {
      username: "ajaxdavis",
      url: "https://twitter.com/ajaxdavis",
      network: "twitter",
    },
    {
      url: "https://github.com/thomasdavis",
      username: "thomasdavis",
      network: "github",
    },
  ],

  // "education": [
  //   {
  //     "endDate": "2009-12-12",
  //     "startDate": "2008-02-12",
  //     "area": "Software Engineering (incomplete)",
  //     "studyType": "Bachelors",
  //     "institution": "The University of Queensland"
  //   }
  // ],
  // "references": [
  //   {
  //     "reference": "Thomas was hired as a lead developer and, upon the leaving of our co-founder took over as CTO of Earbits. Thomas is, hands down, one of those A Players you hear of companies dying to hire. He is incredibly smart, not just at code but about everything from classical music to Chinese language and culture. Thomas is great to work with and, as a well established contributor to open source projects and several successful ventures, commands the respect of engineers at all levels. I would suggest doing anything you can to have him on your team.",
  //     "name": "Joey Flores, Co-founder and CEO of Earbits, Inc."
  //   },
  //   {
  //     "reference": "I've had the great pleasure of working with Thomas for the past three years at Earbits, and on a few side projects. Two years ago our CTO left on a moment's notice, Thomas saved our company by quickly stepping up to fill this role. He has been with our company through thick and thin and made serious personal sacrifices in order to help the company during tough times. He is a phenomenal hacker and a true team player. Highly recommended!",
  //     "name": "Yotam Rosenbaum, SVP of Operations, Earbits, Inc."
  //   },
  //   {
  //     "reference": "Thomas is an extremely talented engineer with a very broad range of skills and experience. From being a thought leader in the front-end community via backbonetutorials.com and cdnjs.com, to designing and implementing the API for cdnjs.com, working with Thomas has been fantastic learning experience. Thomas is truly a full stack develop, and his work output is incredible. If there is any opportunity to work with Thomas, I take it. He is the definition of an A player.",
  //     "name": "Ryan Kirkman, Senior Software Engineer at Nerdwallet"
  //   },
  //   {
  //     "reference": "On Thomas Davis... Hire this guy. Do not be fooled. Incredibly capable and fast. Plays well with others. Unbelievable at front-end work end programming but that is just the start. Visionary. Hire him before I do.",
  //     "name": "Greg Davis"
  //   }
  // ],
  skills: [
    {
      keywords: [
        "HTML / JSX",
        "SCSS / CSS / BEM / Styled Components",
        "Javascript / Typescript",
        "React / Next",
        "Redux / Apollo",
      ],
      level: "Senior",
      name: "Frontend",
    },
    {
      keywords: ["Node", "Ruby", "Python", "Postgres", "Redis", "Serverless"],
      level: "Senior",
      name: "Backend",
    },
    {
      keywords: ["AWS", "G Cloud", "Heroku", "Caching"],
      level: "Senior",
      name: "Devops",
    },
  ],
  awards: [
    {
      title: "Defender of the Internet",
      awarder: "Fight For The Future",
    },
  ],
  work: [
    {
      summary:
        "Tokenized is a Bitcoin wallet for issuing, managing and trading digital tokens. I built out the front end which was packaged as an electron app. It was a difficult frontend to build because we store the users keys locally and used them to sign transactions and contracts.",
      website: "https://tokenized.com/",
      name: "Tokenized",
      location: "Melbourne",
      position: "Senior Javascript Developer",
      startDate: "2020-05-05",
      highlights: ["React", "Redux", "SCSS", "Product"],
    },
    {
      summary:
        "Blockbid is an Australian crypto currency exchange. I started off on the frontend but eventually became lead tech and worked on every moving piece of the exchange. I really enjoyed working with liquidity providers and connecting their platforms to help us achieve liquid markets.",
      website: "https://platform.blockbid.io",
      name: "Blockbid",
      location: "Melbourne",
      position: "Senior Javascript Developer",
      startDate: "2018-03-01",
      endDate: "2020-01-01",
      highlights: [
        "React, Apollo, Styled Components",
        "Node.js / Rails",
        "Docker / Heroku / GCP",
        "Used Figma for design and UX work",
        "Optimizing markets with tens of millions of rows using SQL.",
      ],
    }
    
  ],
  interests: [
    {
      name: "Gardening",
    },
    {
      name: "Music / Jamming",
    },
    {
      name: "Reading / Writing",
    },
    {
      name: "Open Source",
    },
  ],
  languages: [
    {
      language: "English",
      fluency: "Native speaker",
      read: 1,
      write: 1,
      speak: 1
    },
    {
      language: "Hindi",
      fluency: "Native speaker",
      read: 0,
      write: 0,
      speak: 1
    },
    {
      language: "Bengali",
      fluency: "Native speaker",
      read: 1,
      write: 1,
      speak: 1
    },
  ],
};


export const userInfo = {
  name:{
    first:"Kishor",
    last:"Sarkar"
  }, about:"Cuber and Self-Taught Front-end Software Developer, I enjoy building responsive web apps & designs using HTML5, CSS3, JavaScript, Next.js, React.js, Firebase, Restful APIs.., I have been working on the web for around 3 years building freelance/learning projects."
}