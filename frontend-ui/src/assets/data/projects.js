export const projectArray = [
  {
    intro:
      "DJs and Live producers need the interface to their music software to be as fluid as possible. Standardized controllers, such as what is currently availble on the market, cause this interface to fall short. Basilar was started to allow artists to choose what they need in their controller to best interact with their media. Using our simple drag and drop interface users can create their own controller layout. After picking a design the user would be able to share their designs or order the controller direclty from Basilar.",
    importance: 3,
    name: "Basilar",
    role: "Lead Engineer Lead Developer",
    inspiration:
      "Electronic music producers and DJ's artistic expression is limited due to the standardization of hardware interfaces to music software (often referred to as controllers). Currently controller designs are meant to give the best general usage for as many users as possible, but as all artists express the art differently, they should be able choose their hardware interface to improve",
    dates: {
      start: 1435348689413,
      current: true,
    },
    tags: ["engineering", "modeling", "programming", "parametric"],
    team: [
      {
        name: "Mel van Londen",
        url: "https://github.com/mvanlonden",
        icon: {
          url: "https://avatars2.githubusercontent.com/u/1718791?v=3&s=400",
        },
      },
    ],
    technologies: {
        frontendTechnologies: [
          {
            category: "Programming Languages",
            technologies: [
              {
                name: "JavaScript",
                description:
                  "A versatile scripting language used for building interactive web applications.",
                icon: "FaJsSquare", // React Icons component name for the JavaScript icon
              },
              {
                name: "HTML",
                description:
                  "HyperText Markup Language used for structuring web content.",
                icon: "FaHtml5", // React Icons component name for the HTML icon
              },
              {
                name: "CSS",
                description: "Cascading Style Sheets used for styling web content.",
                icon: "FaCss3", // React Icons component name for the CSS icon
              },
              {
                name: "TypeScript",
                icon: "FaTsSquare",
                description:
                  "A statically typed superset of JavaScript that helps catch errors at compile-time and provides better tooling for large-scale applications.",
              },
              {
                name: "SASS",
                extensions: ["scss", "sass"],
                icon: "FaSass",
                description:
                  "An extension of CSS that adds features like variables, nesting, and mixins.",
              },
            ],
          },
          {
            category: "JavaScript Libraries and Frameworks",
            technologies: [
              {
                name: "React",
                description:
                  "A popular JavaScript library for building user interfaces.",
                icon: "FaReact", // React Icons component name for the React icon
              },
              {
                name: "Angular",
                description:
                  "A TypeScript-based open-source web application framework.",
                icon: "FaAngular", // React Icons component name for the Angular icon
              },
              {
                name: "Vue.js",
                description:
                  "A progressive JavaScript framework for building user interfaces.",
                icon: "FaVuejs", // React Icons component name for the Vue.js icon
              },
            ],
          },
          {
            category: "CSS Frameworks",
            technologies: [
              {
                name: "Bootstrap",
                description:
                  "A front-end framework for designing responsive and attractive web pages.",
                icon: "FaBootstrap", // React Icons component name for the Bootstrap icon
              },
              {
                name: "Tailwind CSS",
                description:
                  "A utility-first CSS framework for rapidly building custom designs.",
                icon: "FaTailwind", // React Icons component name for the Tailwind CSS icon
              },
              {
                name: "Bulma",
                description: "A modern CSS framework based on Flexbox.",
                icon: "FaBullhorn", // React Icons component name for the Bulma icon
              },
            ],
          },
        ],
        backendTechnologies: [
          {
            category: "Programming Languages",
            technologies: [
              {
                name: "Node.js",
                description:
                  "A runtime environment that allows you to run JavaScript on the server-side.",
                icon: "FaNodeJs",
              },
              {
                name: "Python",
                description:
                  "A versatile and widely-used programming language for server-side development.",
                icon: "FaPython",
              },
              {
                name: "Ruby",
                description:
                  "A dynamic, object-oriented programming language for web development.",
                icon: "FaGem",
              },
            ],
          },
          {
            category: "Backend Frameworks",
            technologies: [
              {
                name: "Express.js",
                description:
                  "A minimal and flexible Node.js web application framework.",
                icon: "FaNodeJs",
              },
              {
                name: "Django",
                description:
                  "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
                icon: "FaPython",
              },
              {
                name: "Ruby on Rails",
                description:
                  "A web application framework for Ruby that follows the Model-View-Controller (MVC) pattern.",
                icon: "FaGem",
              },
            ],
          },
          {
            category: "Databases",
            technologies: [
              {
                name: "MongoDB",
                description:
                  "A NoSQL database that stores data in JSON-like documents with dynamic schemas.",
                icon: "FaDatabase",
              },
              {
                name: "MySQL",
                description:
                  "An open-source relational database management system.",
                icon: "FaDatabase",
              },
              {
                name: "PostgreSQL",
                description:
                  "A powerful, open-source object-relational database system.",
                icon: "FaDatabase",
              },
            ],
          },
        ],
      },
    pictures: [
      {
        caption:
          "DJs and Live producers need the interface to their music software to be as fluid as possible. Standardized controllers, such as what is currently availble on the market, cause this interface to fall short. Basilar was started to allow artists to choose what they need in their controller to best interact with their media. Using our simple drag and drop interface users can create their own controller layout. After picking a design the user would be able to share their designs or order the controller direclty from Basilar.",
        image: {
          style: "width:500px; border-style:none; background-color:white;",
          url: "https://dev-portfolio-mayankagarwal09.vercel.app/images/projects/portfolio-poster.png",
        },
      },
      {
        caption:
          "This is a 4 deck mixer that mirrors the layout of one of the most popular live DJ software packages (Native Instruments Traktor). Buttons replace the jog wheels that are often seen on this size controller.",
        image: {
          style: "width:500px; border-style:none; background-color:white;",
          url: "https://s3.amazonaws.com/prue-cdn/portfolio/Basilar/First-Lighting.png",
        },
      },
      {
        image: {
          url: "https://s3.amazonaws.com/prue-cdn/portfolio/Basilar/Exposed-Controller.png",
        },
        caption:
          "Spacing of circuitry components is automatically accounted for and wireing is routed to avoid being pinched/cut when being serviced. Modularized design of these components allows users to easy order and replace parts themselves instead of waiting weeks for a factory repair.",
      },
    ],
    mainImage:"",
    takeaways: ["Hardware manufacturing requires imense capital to scale"],
  },
  {
    dates: {
      end: "3/15/14",
      start: "3/14/14",
    },
    description:
      "Dynamic Medications List, or DYML for short, was designed and built during the March 16, 2014 MITHackingMedicine Grand Hackathon for GE/Intel. I functioned as the lead cross platform developer within my team for this hackathon, and after winning the GE/Intel prize we received large interest from a few hospitals and clinicians for a pilot program. DYML creates accurate, real-time, reconciled medication lists from multiple sources to empower patients. The goal of DYML is to use patient records to improve the way that personal prescriptions are tracked. The application program interface (API) has the ability to save countless lives, while remaining open source to provide a foundation for other software developers to do the same.",
    importance: 7,
    intro:
      "Dyml was designed and built during the March 16, 2014 MITHackingMedicine Grand Hackathon for GE/Intel. I functioned as the lead cross platform developer within my team for this hackathon, and after winning the GE/Intel prize we received large interest from a few hospitals and clinicians for a pilot program.",
    links: [
      {
        name: "Dyml Homepage",
        path: "http://dyml.io",
      },
      {
        name: "Twitter",
        path: "https://twitter.com/dymlio",
      },
    ],
    name: "DYML",
    team: [
      {
        name: "Anurag Gupta",
        url: "https://www.linkedin.com/in/anuragmdmba",
        icon: {
          url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/000/227/0eb/0d44f3d.jpg",
        },
      },
      {
        name: "Mel van Londen",
        url: "https://github.com/mvanlonden",
        icon: {
          url: "https://avatars2.githubusercontent.com/u/1718791?v=3&s=400",
        },
      },
      {
        name: "Juhee Kim",
        url: "https://www.linkedin.com/in/kimjuhee",
        icon: {
          url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAAsAAAAJDU1OWJhNzM2LTZiYTYtNDU0OC04Y2M5LWEwNTdjMDNiZjUyYQ.jpg",
        },
      },
      {
        name: "Hok-Hei Tam",
        url: "https://www.linkedin.com/pub/hok-hei-tam/52/801/878",
        icon: {
          url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/005/07d/1c1/05bc32a.jpg",
        },
      },
      {
        name: "Adarsha Bajracharya",
        url: "https://www.linkedin.com/pub/adarsha-bajracharya/69/49/688",
      },
    ],
    pictures: [
      {
        caption:
          "The medications list shows when there is a conflict between different medicines. It is common for patients to not remember or be able to provide their prescriptions when entering the emergency room. ",
        image: {
          caption:
            "The medications list shows when there is a conflict between different medicines. It is common for patients to not remember or be able to provide their prescriptions when entering the emergency room. ",
          url: "https://s3.amazonaws.com/prue-cdn/portfolio/Dyml/app-home.png",
        },
      },
      {
        image: {
          style: "max-height:250px; max-width:444px;",
          url: "https://s3.amazonaws.com/prue-cdn/portfolio/Dyml/AfterWinning.png",
        },
      },
    ],
    role: "Cross Platform Developer",
    tags: ["hackathon", "healthcare", "prize", "GE", "Intel"],
    inspiration:
      "Thousands of patients die a year in the emergency room when they are given something that negativley interacts with a medecine they are already taking.",
    technologies: [
      {
        name: "jQuery Mobile",
        link: "https://jquerymobile.com/",
      },
    ],
    takeaways: [
      "Lack of data organization leads to mistakes that cause thousands of deaths a year",
      "Electronic patient records can often be an inaccurate source of patient data",
    ],
  },
  {
    inspiration:
      "After interviewing small buisnesses it became apparent that it is near impossible for a small buisness to leverage its own data without a dedicated data scientest of some kind.",
    intro:
      'Escollate is a cross-platform mobile application that allows small business owners to solve complex financial problems by combining the power of real-time data with the wisdom of a collaborative community. This project aims to provide an open source and simple method for businesses to track, understand, and learn from their data. By marrying a simple, yet powerful user experience with a social network of informed supporters, Escollate gives small business owners "Strength in Numbers."',
    name: "Escollate",
    importance: 2,
    role: "Full Stack Developer",
    dates: {
      end: "7/20/14",
      start: "7/19/14",
    },
    tags: [
      "engineering",
      "programming",
      "nodejs",
      "angularjs",
      "javascript",
      "smallbizdev",
      "hackathon",
    ],
    links: [
      {
        name: "Challenge Post",
        path: "http://challengepost.com/software/escollate",
      },
      {
        name: "Git Hub",
        path: "https://github.com/prescottprue/escollate",
      },
      {
        name: "Demo Video",
        path: "https://www.dropbox.com/s/6kxxl8ujre71bei/EscollateDemo.mov?dl=0",
      },
    ],
    team: [
      {
        name: "Mel van Londen",
        url: "http://github.com/mvanlonden",
        role: "Front End Developer",
        icon: {
          url: "https://avatars2.githubusercontent.com/u/1718791?v=3&s=400",
        },
      },
      {
        name: "Sinan Bolel",
        url: "https://www.linkedin.com/in/sinanbolel",
        role: "Front End Developer",
        icon: {
          url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/005/067/092/366d0ce.jpg",
        },
      },
      {
        name: "Dylan Santoriello",
        url: "https://www.linkedin.com/pub/dylan-santoriello/83/49a/999",
        role: "Logo Design/Branding",
        icon: {
          url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAITAAAAJDQxM2EyN2NjLTY3MDktNGI3Ny04YTM2LTgzZjhlNjU4MjRkMA.jpg",
        },
      },
      {
        name: "Bogdan Ivan",
        url: "https://www.linkedin.com/pub/bogdan-ivan/10/184/6b6",
        icon: {
          url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/005/09c/141/23ccb9b.jpg",
        },
      },
    ],
    technologies: [
      {
        name: "AngularJS",
        link: "https://angularjs.org/",
        icon: {
          url: "https://secure.gravatar.com/avatar/6e1b5ab3ef1593413f1bee4e5a6e6ae7?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        },
      },
      {
        name: "Ionic Framework",
        link: "http://ionicframework.com",
        icon: {
          url: "http://ionicframework.com/img/ionic-logo-blog.png",
        },
      },
    ],
    pictures: [
      {
        caption:
          'Escollate is a cross-platform mobile application that allows small business owners to solve complex financial problems by combining the power of real-time data with the wisdom of a collaborative community. By connecting Escollate with their Quickbooks accounts, our customers can view, track, and visualize the financial performance and financial health of their small businesses through an elegant Dashboard. For each of these metrics (such as revenue growth, gross profit growth, EBIDTA growth, net income growth, gross margin, and EBIDTA margin), small business owners see how their company compares to the rest of the market. Unlike existing financial summary solutions, Escollate also provides an anonymous social platform where users can ask questions about their finances, the state of their business, or anything else that may need clarification by like-minded small business owners. By tapping the "Ask a Question" link for a Dashboard item, the user can publish a question about a specific metric with just a few clicks. By marrying a simple, yet powerful user experience for tracking and understanding financial data with social network of informed supporters, Escollate gives small business owners "Strength in Numbers".',
        image: {
          url: "https://s3.amazonaws.com/prue-cdn/portfolio/Escollate/Dash.png",
        },
      },
      {
        caption:
          "This is a screenshot of the dashboard that the user is shown when they enter the app. The numbers on this dashboard allow the buisness to compare their numbers directly with other buisnesses like them.",
        image: {
          url: "https://s3.amazonaws.com/prue-cdn/portfolio/Escollate/HoldingCheck.png",
        },
      },
      {
        caption:
          "Graphs provide a visual explination of company data, but if the user still has a question, they can click to create a new question. The new question automatically includes the graph and other relevant data when being created to help questions to get answered more effectivley.",
        image: {
          url: "https://s3.amazonaws.com/prue-cdn/portfolio/Escollate/Dash-Graphs.png",
        },
      },
      {
        caption:
          "This is a screenshot of a specific question after the user has opened it.",
        image: {
          url: "https://s3.amazonaws.com/prue-cdn/portfolio/Escollate/Question-Detail.png",
        },
      },
    ],
  },
  {
    intro:
      "I was hired by <a href='http://wacoproducts.com'>WACO Products</a> to transition their engineering systems from 2D drafting to 3D modeling. Though 2D CAD is a major improvement of hand drafting and has already saved WACO countless hours, it does not allow for easy stress analysis and design automation.",
    inspiration:
      "Designing a customzied liquid control gate, one of WACO Product's top sellers, required between 6-8 hours of engineering time. Large orders easily stall the workflow because WACO had only a few engineers and even fewer software license seats.",
    solution:
      "My experience with 3D modeling lead me to design a system that would incorporate parametric design to allow for model parameters/dimensions to be modified programatically.",
    dates: {
      start: 1435348689413,
      current: false,
    },
    technologies: [
      {
        name: "Autodesk Inventor",
        link: "http://autodesk.com",
        icon: {
          url: "http://fileinfo.com/images/icons/apps/128/autodesk_inventor.png",
        },
      },
    ],
    learned:
      "Networked parametric modeling can bring scalability to engineering systems.",
    description:
      "While working at Waco Products I created a system that automates the engineering process of their liquid control gate product line. The system, which is still in place, uses information entered into a graphical interface to solve for the placement of all hardware, material, and supports.  Waco Products was my first professional interaction with the combination of software and hardware aspects of engineering. Before this system was implemented, engineering for each liquid control gate would take 6-9 hours. This improvement in efficiency continues to save WACO thousands on engineering costs for each project. The customization is controlled by a user interface where dimensions as well as options for the operator, bolt type, and seal type can be entered. The system then outputs 3D models which are used to automatically generate stress test information as well as engineering drawings for the completely customized product. ",
    importance: 4,
    intro2:
      "While working at Waco Products I created a system that automates the engineering process of their liquid control gate product line. The system, which is still in place, uses information entered into a graphical interface to solve for the placement of all hardware, material, and supports. ",
    links: [
      {
        name: "WacoProducts.com",
        path: "http://wacoproducts.com",
      },
    ],
    name: "Waco Gate Designer",
    pictures: [
      {
        caption:
          "The graphical user interface (on the left) allows users to create a new gate design by entering options/dimensions. The Gate Designer automatically creates a rendering (on the right) of the 3D modeled gate after creation.",
        image: {
          url: "https://s3.amazonaws.com/prue-cdn/portfolio/GateDesigner/GateGUI.png",
        },
      },
      {
        caption:
          "The design of liquid control gates requires a large amount of engineering calculation that had to be automated through relationship algorithms which my team and I crafted from scratch based on the calumniation of our whole engineering department's experience with gate engineering.",
        image: {
          url: "https://s3.amazonaws.com/prue-cdn/portfolio/GateDesigner/GateGUI.png",
        },
      },
    ],
    role: "CAD Engineer/Automated 3D Modeling Software Engineer",
    tags: ["engineering", "modeling", "waco", "parametric"],
  },
  {
    name: "Heart Hub",
    role: "Idea inspiration/Lead Developer",
    dates: {
      end: "4/11/14",
      start: "4/10/14",
    },
    intro:
      "HeartHub provides a standardized platform for wireless devices within hospitals so that medical device companies can easily communicate their data to the hospital.",
    description:
      "The HeartHub application was designed and built during the April 10, 2014 MIT Hacking Medicine hackathon. The goal of HeartHub is to provide medical device developers with an easy method for sharing their device's data directly with hospitals. I functioned as the lead cross platform developer for this project, and along with my team presented HeartHub to a panel of judges.",
    importance: 5,
    links: [
      {
        name: "Hackathon Presentation",
        path: "https://s3-us-west-2.amazonaws.com/hearthub-presentation/index.html#/",
      },
      {
        name: "HeartHub Demo App",
        path: "https://s3.amazonaws.com/hearthub-home/index.html",
      },
    ],
    pictures: [
      {
        caption:
          "Hearthub is a project that started and presented with a team formed at MIT Hacking Medcine Grandhack event. It is a standardized platform/API for medical devices within hospitals. The HeartHub API is being designed to provide medical device developers an easy method for sharing their device's data directly with the hospital. The data provided by these developers is organized and provided to the hospital by our platform.",
        image: {
          url: "https://s3.amazonaws.com/prue-cdn/portfolio/HeartHub/HeartHubLogo.png",
        },
      },
      {
        caption:
          "The HeartHub Dashboard gives hospitals an overview of their data with important metrics from all plugins/devices. Clicking on a metric brings you to the detailed breakdown on the devices/module which produced that data. For example we can click on the hand washing sanatizing statistics to view details on the devices that produced this data.",
        image: {
          url: "https://s3.amazonaws.com/prue-cdn/portfolio/HeartHub/HeartHubDemo.png",
        },
      },
      {
        caption:
          "Easily visualization of data for the hospitals in which these devices are installed are imperative. Realtime analytics was included in HeartHub from the start to provide important data as it is updated such as radiation warings and wireless medical devices.",
        image: {
          url: "https://s3.amazonaws.com/prue-cdn/portfolio/HeartHub/HeartHubAnalytics.png",
        },
      },
    ],
    tags: [
      "engineering",
      "programming",
      "nodejs",
      "angularjs",
      "javascript",
      "api",
      "healthcare",
      "hackathon",
    ],
    inspiration:
      "Sensors are becoming ever more popular, especially when it comes to healthcare. Startups and Major companies are building new devices faster than hospital staff can even make use of them, mostly due to the lack of standardization. As a developer of a hospital device/sensor you must build your own home base and handle complicated data formatting and communications, which makes providing insights to healthcare staff very difficult.",
    solution:
      "Hearthub consists of both Hardware, which is optional, and an API, which can either run on a hearthub home base or a seperate server. This system provides data collected by devices within the hospital in a unified fashion for quick decision making by hospital staff. Hardware/Sensor developers can use the hearthub client API within their device to simplifiy interacting with and storing data related to healthcare.",
    team: [
      {
        name: "Mel van Londen",
        url: "https://github.com/mvanlonden",
        icon: {
          url: "https://avatars2.githubusercontent.com/u/1718791?v=3&s=400",
        },
      },
      {
        name: "Damien Choizit",
        url: "https://www.linkedin.com/in/damienchoizit",
        icon: {
          url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/005/025/3db/2544d8d.jpg",
        },
      },
    ],
    technologies: [
      {
        name: "NodeJS",
        link: "http://joyent.com",
        icon: {
          url: "http://amartam.com/images/nodejs2.png",
        },
      },
    ],
    learned:
      "Another barrier between healthcare and data analytics is extremely stringent regulation related to healthcare data. Hospitals like storing everything within their own internal system, which means allowing Hearthub Server to be installed on hospital servers is imperative.",
  },
  {
    dates: {
      current: true,
      start: "11/11/14",
    },
    description:
      "The Pyro Platform is a cloud platform for building beautiful apps powered by realtime data and analytics that allows users of Firebase to quickly add powerful features to their Firebase apps by significantly reducing the design and development required for enabling (a) user management, (b) analytics, (c) push  notifications, (d) logging, (e) data administration, and (f) background jobs. I was inspired to build The Pyro Platform by my experience working with the Severna Park High School computer science club. The goal of Pyro is to lower the barrier of entry for building cross platform applications, thus making programming skills available to every person- regardless of previous experience, education, computer platform, or operating system. 48 Students in the Severna Park High School computer science club were among the first to begin testing the platform. The Pyro Platform consists of two components: (1) a client javascript library (See FireAdmin) that can be dropped in to any app using Firebase, and (2) a frontend that allows developers to manage the operation of those features. Because The Pyro Platform is all on the cloud, the user does not need to install any programs, or operating system in order to use the platform. This along with the inclusion of industry standard/ bleeding edge tools from the start (including ionic, firebase etc.) removes any prep work. The Pyro platform is accessible to developers of all skill levels. Users that are new to programming can get started with the platform by completing hands on tutorials that start at the basics. Advanced users are also comfortable in editor as it adheres to standards put into place by the creators of the advanced frameworks we use within the platform.",
    importance: 1,
    intro:
      "The Pyro Platform is a cloud platform for building beautiful apps powered by realtime data and analytics that allows users of Firebase to quickly add powerful features to their Firebase apps by significantly reducing the design and development required for enabling (a) user management, (b) analytics, (c) push  notifications, (d) logging, (e) data administration, and (f) background jobs. I was inspired to build The Pyro Platform by my experience working with the Severna Park High School computer science club. The goal of Pyro is to lower the barrier of entry for building cross platform applications, thus making programming skills available to every person- regardless of previous experience, education, computer platform, or operating system. 48 Students in the Severna Park High School computer science club were among the first to begin testing the platform.",
    links: [
      {
        name: "pyroplatform.com",
        path: "https://pyroplatform.com",
      },
      {
        name: "Pyro Library",
        path: "https://github.com/pyrolabs/PyroLibrary",
      },
    ],
    name: "Pyro",
    pictures: [
      {
        caption:
          "Pyro Labs was started to teach programming through hands on projects. The Pyro platform is our first iteration of this idea that teaches through walking a user through creating their first app. After the click of a button you have a live app with the capability to have users sign up as well as sign in. All of the data generated by these users is availble in realtime from the start.",
        image: {
          url: "https://s3.amazonaws.com/prue-cdn/portfolio/Pyro/Pyro-Home.png",
        },
      },
      {
        caption:
          "The Pyro editor panel allows users to program with every key stroke saved directly to the realtime cloud which means no saving required! We allow our users to go as in depth as they would like by providing hands on tutorials that start at the basics. Even the most advanced users are also comfortable in editor as it adheres to standards put into place by the  creaters of the advanced frameworks we use within the platform.",
        image: {
          url: "https://s3.amazonaws.com/prue-cdn/portfolio/Pyro/Pyro-Editor.png",
        },
      },
      {
        caption:
          "After programming in the Editor tab you can view your changes to your app right away by going to the tester panel. You can see how your changes look before clicking the cloud button to push it to all of your users.",
        image: {
          url: "https://s3.amazonaws.com/prue-cdn/portfolio/Pyro/Pyro-Tester.png",
        },
      },
    ],
    role: "System Engineer/Developer",
    tags: ["engineering", "programming", "nodejs", "angularjs", "javascript"],
    inspiration:
      "Setting up a development environment should not require advanced computer knowledge.",
    solution: "Cloud based development platform",
    team: [
      {
        name: "Sinan Bolel",
        url: "https://www.linkedin.com/in/sinanbolel",
        role: "Co-Founder/Front End Developer",
        icon: {
          url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/005/067/092/366d0ce.jpg",
        },
      },
    ],
    technologies: [
      {
        name: "AngularJS",
        link: "https://angularjs.org/",
        icon: {
          url: "https://secure.gravatar.com/avatar/6e1b5ab3ef1593413f1bee4e5a6e6ae7?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        },
      },
      {
        name: "Ionic Framework",
        link: "http://ionicframework.com",
        icon: {
          url: "http://ionicframework.com/img/ionic-logo-blog.png",
        },
      },
      {
        name: "NodeJS",
        link: "http://joyent.com",
        icon: {
          url: "http://amartam.com/images/nodejs2.png",
        },
      },
    ],
    learned:
      "Another barrier between healthcare and data analytics is extremely stringent regulation related to healthcare data. Hospitals like storing everything within their own internal system, which means allowing Hearthub Server to be installed on hospital servers is imperative.",
  },
];

export const tech = {
  technologies: {
    frontendTechnologies: [
      {
        category: "Programming Languages",
        technologies: [
          {
            name: "JavaScript",
            description:
              "A versatile scripting language used for building interactive web applications.",
            icon: "FaJsSquare", // React Icons component name for the JavaScript icon
          },
          {
            name: "HTML",
            description:
              "HyperText Markup Language used for structuring web content.",
            icon: "FaHtml5", // React Icons component name for the HTML icon
          },
          {
            name: "CSS",
            description: "Cascading Style Sheets used for styling web content.",
            icon: "FaCss3", // React Icons component name for the CSS icon
          },
          {
            name: "TypeScript",
            icon: "FaTsSquare",
            description:
              "A statically typed superset of JavaScript that helps catch errors at compile-time and provides better tooling for large-scale applications.",
          },
          {
            name: "SASS",
            extensions: ["scss", "sass"],
            icon: "FaSass",
            description:
              "An extension of CSS that adds features like variables, nesting, and mixins.",
          },
        ],
      },
      {
        category: "JavaScript Libraries and Frameworks",
        technologies: [
          {
            name: "React",
            description:
              "A popular JavaScript library for building user interfaces.",
            icon: "FaReact", // React Icons component name for the React icon
          },
          {
            name: "Angular",
            description:
              "A TypeScript-based open-source web application framework.",
            icon: "FaAngular", // React Icons component name for the Angular icon
          },
          {
            name: "Vue.js",
            description:
              "A progressive JavaScript framework for building user interfaces.",
            icon: "FaVuejs", // React Icons component name for the Vue.js icon
          },
        ],
      },
      {
        category: "CSS Frameworks",
        technologies: [
          {
            name: "Bootstrap",
            description:
              "A front-end framework for designing responsive and attractive web pages.",
            icon: "FaBootstrap", // React Icons component name for the Bootstrap icon
          },
          {
            name: "Tailwind CSS",
            description:
              "A utility-first CSS framework for rapidly building custom designs.",
            icon: "FaTailwind", // React Icons component name for the Tailwind CSS icon
          },
          {
            name: "Bulma",
            description: "A modern CSS framework based on Flexbox.",
            icon: "FaBullhorn", // React Icons component name for the Bulma icon
          },
        ],
      },
    ],
    backendTechnologies: [
      {
        category: "Programming Languages",
        technologies: [
          {
            name: "Node.js",
            description:
              "A runtime environment that allows you to run JavaScript on the server-side.",
            icon: "FaNodeJs",
          },
          {
            name: "Python",
            description:
              "A versatile and widely-used programming language for server-side development.",
            icon: "FaPython",
          },
          {
            name: "Ruby",
            description:
              "A dynamic, object-oriented programming language for web development.",
            icon: "FaGem",
          },
        ],
      },
      {
        category: "Backend Frameworks",
        technologies: [
          {
            name: "Express.js",
            description:
              "A minimal and flexible Node.js web application framework.",
            icon: "FaNodeJs",
          },
          {
            name: "Django",
            description:
              "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
            icon: "FaPython",
          },
          {
            name: "Ruby on Rails",
            description:
              "A web application framework for Ruby that follows the Model-View-Controller (MVC) pattern.",
            icon: "FaGem",
          },
        ],
      },
      {
        category: "Databases",
        technologies: [
          {
            name: "MongoDB",
            description:
              "A NoSQL database that stores data in JSON-like documents with dynamic schemas.",
            icon: "FaDatabase",
          },
          {
            name: "MySQL",
            description:
              "An open-source relational database management system.",
            icon: "FaDatabase",
          },
          {
            name: "PostgreSQL",
            description:
              "A powerful, open-source object-relational database system.",
            icon: "FaDatabase",
          },
        ],
      },
    ],
  },
};
