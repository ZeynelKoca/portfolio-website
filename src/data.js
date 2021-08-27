import meIcon from "./images/me.webp"

// Projects Icons
import keukenhofIcon from "./images/projects/keukenhof.webp"
import pathfindingIcon from "./images/projects/pathfinding.webp"
import fullhouseIcon from "./images/projects/fullhouse.webp"
import modmenuIcon from "./images/projects/mod-menu.webp"
import dierendorpIcon from "./images/projects/dierendorp.webp"
import obfuskeerIcon from "./images/projects/obfuskeer.webp"
import intListIcon from "./images/projects/int-list.webp"
import twitterbotIcon from "./images/projects/twitter-bot.webp"
import portfolioWebsiteIcon from "./images/projects/portfolio.webp"

// Projects showcases
import dierendorpGif from "./images/projects/dierendorp-showcase.gif"
import fullhouseGif from "./images/projects/fullhouse-showcase.gif"
import pathfindingGif from "./images/projects/pathfinding-showcase.gif"
import obfuskeerGif from "./images/projects/obfuskeer-usage.gif"
import twitterbotGif from "./images/projects/twitterbot-showcase.gif"

// Social Icons
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

export default {
  // Header Details ---------------------
  name: "Zeynel",
  headerTagline: [
    //Line 1 For Header
    "Software Engineering",
    //Line 2 For Header
    "student with a",
    //Line 3 For Header
    "passion for tech",
  ],
  headerParagraph: "Great to see you here! Feel free to browse my page to get to know more about me.",

  contactEmail: "Zeynel.koca@outlook.com",

  // End Header Details -----------------------

  // About Section --------------
  aboutParaOne: "Based in the Netherlands and growing up in the age of the technological boom, I've always been fascinated by the technologies surrounding me. Naturally, I would play around with computers and other hardware (such as gaming consoles) as I made my way to adulthood.",
  aboutParaTwo: `Currently, at ${getAge("10-26-1999")} years young, I'm a software engineer student at the Hague University of Applied Sciences. During my education I have learned to use a variety of programming languages and technologies, but most importantly: I've learned to learn.`,
  aboutParaThree: "Thanks to this I was able to further my knowledge in the field by doing my own research and personal projects, aside from university tasks. My toolbox includes programming languages such as C#, Java, Python and more, as well as other tech stacks. Think of web technologies such as the ASP.NET framework, which goes hand in hand with the MVC design pattern and the obvious HTML/CSS and Javascript languages.",
  aboutParaFour: "Some other skills/hobbies of mine, when I'm not cruising around on my motorcycle or playing video games, include reverse engineering and creating games with the Unity game engine.",
  aboutImage: meIcon,

  // End About Section ---------------------
  
  // Projects Section ------------------------
  projects: [{
    title: "Keukenhof Website",
    paragraphs: [
                "During my second year of university, we were approached by a software company that was working on creating a brand-new website for Keukenhof at the time. In just a few months, our group of three students managed to create this same website by using the Figma designs from this software company.", 
                "The website was created in a Scrum environment with ASP.NET following the MVC design pattern and surrounding technologies (C#, HTML/CSS, Javascript/JQuery). Besides the general front-end development, we were also tasked with creating a Content Management System which would be accessable through an admin-panel.", 
                "Almost the entire website would be customizable through this panel (text, images, position etc.) and the front-end also ended up looking almost exactly as the end-product of this software company."
                ], 
    tags: ["C#", "ASP.NET", "Entity Framework"],
    imageSrc: keukenhofIcon,
    showcase: keukenhofIcon,
    source: undefined,
  },
  {
    title: "Game Mod Menu", 
    paragraphs: [
                "During one of my summer breaks I had a lot of free time on my hands and somehow ended up getting very involved with software security and namely reverse engineering of software applications. I spent two thirds of this summer researching this topic and the last few weeks I ended up creating a project using my newly found knowledge.",
                "By reverse engineering a particular game I managed to get access to some of the game code and, by using Function Hooks, was able to add my own external code to the dlls at runtime. For some functionality I even went out of my way to directly change the Intermediate Language code of some dlls.",
                "In the end I created an entire GUI surrounding these mods. I currently sell licenses for this application and, by using more externally written applications (which includes the usage of an online database), this project is now quite a reliable source of passive income for me."
                ], 
    tags: ["C#", "CIL"],
    imageSrc: modmenuIcon,
    showcase: modmenuIcon,
    source: undefined,
  },
  {
    title: "Dierendorp Game", 
    paragraphs: [
                "For this project I was tasked with creating a game for the disabled children at a particular daycare centre in The Hague. By using the Unity game engine I ended up creating a simple to follow 3D game with an easy to understand storyline for these disabled children.",
                ],
    tags: ["C#", "HLSL", "Unity3D"],
    imageSrc: dierendorpIcon,
    showcase: dierendorpGif,
    source: "https://github.com/ZeynelKoca/Game-Development-Project",
  },
  {
    title: "FullHouse Content Management System", 
    paragraphs: [
                "One of my earlier projects, after learning Java and MySQL for about half a year. The application was made for an imaginary poker company which was in need of a content management system to keep track of its players.",
                "Looking at it from an outside perspective, it is simply a CRUD application which is linked to a database. No database framework was used for this project, so all MySQL queries were written by hand."
                ],
    tags: ["Java", "Swing", "MySQL"],
    imageSrc: fullhouseIcon,
    showcase: fullhouseGif,
    source: "https://github.com/ZeynelKoca/FullHouse-GUI",
  },
  {
    title: "Pathfinding Visualizer", 
    paragraphs: [
                "This project signified the topics of algorithms and data structures. Most notably, pathfinding algorithms.",
                "I did research on multiple algorithms and ended up implementing the A* algorithm for finding the shortest path between nodes (or in this case: cities) and implemented the 2-opt algorithm to solve the traveling salesman problem."  
                ],
    tags: ["Java", "Swing"],
    imageSrc: pathfindingIcon,
    showcase: pathfindingGif,
    source: undefined,
  },
  {
    title: "Obfuskeer", 
    paragraphs: [
                "During the same summer where I was heavily invested in software security, I ended up getting creating this console application for obfuscation purposes. At the time, (free) obfuscation tools were quite hard to come by and when they weren't, worked horrendously.",
                "So I ended up creating my own obfuscation tool, specifically for Unity games (as I was also playing around with this game engine at the time). Due to time constraints and loss of interest later on, I didn't end up creating a commercially-ready tool so I just threw it up on GitHub instead.",
                "Not to say that the tool doesn't work well though, as I still get messages from time to time from users who thank me for releasing a free Unity obfuscator."
                ],
    tags: ["C#", "Mono.Cecil"],
    imageSrc: obfuskeerIcon,
    showcase: obfuskeerGif,
    source: "https://github.com/ZeynelKoca/Obfuskeer",
  },
  {
    title: "League of Legends int list",
    paragraphs: [
                "This application is made to be used for the popular game League Of Legends. By using the game's official API endpoints, the application dynamically scans the game state and notifies the user when they have been put in a lobby with a target.",
                "Targets are stored locally on the user's system. This was initially realised by using the Entity Framework, but after some time I changed this to where the targets are now simply stored in an XML file. This way, distribution of the application would be a lot easier."
                ],
    tags: ["C#", "WinForms"],
    imageSrc: intListIcon,
    showcase: intListIcon,
    source: "https://github.com/ZeynelKoca/LeagueOfLegends-int-list",
  },
  {
    title: "Twitter Bot", 
    paragraphs: [
                "This was my first project where I got myself involved with different APIs. By using the Twitter Developer API I created a bot for sending people updates about new show/episode updates on a particular video-streaming website.",
                "This website has its own API which I leveraged as well. I ended up putting the code on a Heroku server, which means that the code is running 24/7 and users get updated almost instantly whenever a new show has been uploaded to the website.",
                ],
    tags: ["Java", "Heroku"],
    imageSrc: twitterbotIcon,
    showcase: twitterbotGif,
    source: "https://github.com/ZeynelKoca/Twitter-Bot-Twist",
  },
  {
    title: "Portfolio Website", 
    paragraphs: [
                "Obviously, it's the website you're seeing right now. This project was made during my last summer break of university, where I decided it would be a good time to finally create my personal portfolio website after accumulating enough knowledge and projects to showcase.",
                "I already had some experience with HTML/CSS, but the React environment was completely alien to me. This is one of the reasons why it took quite some time to get something presentable, but in the end I was able to get a responsive website running which is also easily extendable.",
                "My knowledge on Javascript and JS frameworks/libraries has also increased immensely after finishing this project, which is sure to be of use later on in my career."
                ],
    tags: ["React", "Gatsby", "SCSS"],
    imageSrc: portfolioWebsiteIcon,
    showcase: portfolioWebsiteIcon,
    source: undefined,
  },

  ],
  
  // End Projects Section -----------------------

  // Contact Section --------------

  social: [
    {
      img: githubIcon,
      url: "https://github.com/ZeynelKoca"
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/zeynel-koca/"
    },
  ],

  // End Contact Section ---------------
}