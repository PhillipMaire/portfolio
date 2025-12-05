/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Phillip Maire",
  title: "Hi everyone, I'm Phil",
  subTitle: emoji(
    ["Your go-to data expert for transforming complex data into simple solutions: Data Science / MLOps / Data Engineering. PhD in Systems Neuroscience, USC, hireslab.org. I am passionate about all things related to data, information processing, and intelligent systems!"]
  ),
  resumeLink:
    "https://www.dropbox.com/scl/fi/9ktqgbd0kt10jaefzivrp/Phillip_Maire_resume.pdf?rlkey=ixav5llahglz31twdfikbfx6f&st=poi5tcsc&dl=0", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/phillipmaire/",
  linkedin: "https://www.linkedin.com/in/phillipmaire/",
  gmail: "deep.data.phil@gmail.com",
  // gitlab: "____________",
  // facebook: "____________",
  medium: "https://medium.com/@phillip.maire",
  stackoverflow: "https://stackoverflow.com/users/13944456/phillip-maire",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Everything data! Modeling, MLOps, smart model selection, data engineering, visualization and more",
  skills: [
    emoji(
      "⚡ Project scoping and pipeline design"
    ),
    emoji(
      "⚡ Clean and optimize data for model based solutions"
    ),
    emoji(
      "⚡ Train and deploy models for production"
      ),
    emoji(
      "⚡ Maintain models through data/concept drift to ensure their long term utility"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "MLOps",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-robot"
    },
    { 
      skillName: "Data Visualization",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
  skillName: "AWS",
  fontAwesomeClassname: "fab fa-aws"
    },
    {
  skillName: "Google Cloud",
  fontAwesomeClassname: "fab fa-google"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Southern California",
      logo: require("./assets/job_images/uscLogoWhiteBackground.png"),
      subHeader: "Doctor of Philosophy, Neuroscience",
      duration: "July 2015 - June 2023",
      desc: "Developed a python package to save thousands of hours using a 2-stage deep learning model. Modeled neural time-series and animal behavior ",
      descBullets: [
        "WhACC: Whisker Automatic Contact Classifier with Expert Human-Level Performance. (in review, 2023) https://github.com/hireslab/whacc",
        "Independent representations of self-motion and object location in barrel cortex output. (PLoS Biology 2020)",
        "The Sensorimotor Basis of Whisker-Guided Anteroposterior Object Localization in Head-Fixed Mice. (Current Biology 2019)",
        "NIH T32 grant recipient, Institutional National Research Service Award"
      ]
    },
    {
      schoolName: "University of Louisville",
      logo: require("./assets/job_images/University_of_Louisville_seal_white_backbround.png"),
      subHeader: "Bachelor of Science with Honors, Psychology",
      duration: "July 2009 - December 2013",
      desc: "Graduated with honors and completed a thesis on animal vision and neural response properties in the primary visual cortex",
      descBullets: ["Awarded a position in the Kentucky Biomedical Research Infrastructure Network (KBRIN) summer research program"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section


const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Doctoral Researcher",
      company: "University of Southern California, Dr. Andrew Hires Laboratory",
      companylogo: require("./assets/job_images/uscLogoBackground.png"),
      date: "July 2015 - June 2023",
      desc: "completed my dissertation \"Tactile Object Localization: Behavioral Correlates, Neural Representations, and a Deep Learning Hybrid Model to Classify Touch\". Published 3 Journal articles.",
     descBullets: [
      "Developed an open-source Python package to classify video frames (WhACC)",
      "Developed data pipelines to massively improve data processing efficiency",
      "Modeled behavioral and neural time-series data"
      ]
    },
    {
      role: "Assistant Research Scientist",
      company: "University of Louisville, Dr. Marth Bickford's Laboratory",
      companylogo: require("./assets/job_images/University_of_Louisville_seal_white_backbround.png"),
      date: "May 2014 – June 2015",
      desc: "Gathered and analyzed data | crafted visual representations",
      descBullets: [
      "Analyze and visualize neurophysiology data from whole cell recordings",
      "Communicate scientific findings and contribute valuable data to publish a paper (Zhou, Maire et al. 2017)",
      "Contributed to help secure a grant worth nearly $2 million"
      ]
    },
    {
      role: "Research Assistant",
      company: "University of Louisville, Dr. Heywood Petry's Laboratory",
      companylogo: require("./assets/job_images/University_of_Louisville_seal_white_backbround.png"),
      date: "Febuary 2010 – December 2015",
      desc: "Gathered and analyzed data | developed tools",
      descBullets: [
      "Developed tools and performed statistical analysis to answer questions about vision and the brain",
      "Collected and analyzed single unit electrophysiology and behavioral data",
      "Programmed a reverse correlation stimulus program to map spatiotemporal visual receptive fields in the visual cortex",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  
  title: "Projects",
  subtitle: "",
  projects: [
    {
      projectName: "WhACC: Whisker Automatic Contact Classifier with Expert Human-Level Performance",
      projectDesc:
        "A python package/pipeline to classify touch in video using a custom ResNetV2-Light GBM hybrid model",
      image: require("./assets/images/ResNetV2_2048_features_clustered.gif"),
      imageAlt: "ResNetV2_2048_features_clustered",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/hireslab/whacc"
        },
        {
          name: "Paper",
          url: "https://www.biorxiv.org/content/10.1101/2023.05.19.541544v1.full.pdf"
        },
      ]
    },

    {
      projectName: "The Sensorimotor Basis of Whisker-Guided Anteroposterior Object Localization in Head-Fixed Mice",
      projectDesc:
        "",
      image: require("./assets/images/Location_paper_behavior_2019.png"),
      imageAlt: "Location_paper_behavior_2019",
      footerLink: [
        {
          name: "Paper",
          url: "https://www.cell.com/current-biology/fulltext/S0960-9822(19)30948-0"
        },
      ]
    },

    {
      projectName: "Independent representations of self-motion and object location in barrel cortex output",
      projectDesc:
        "",
      image: require("./assets/images/trial_animation_2020_location_paper_neuro.gif"),
      imageAlt: "trial_animation_2020_location_paper_neuro.gif",
      footerLink: [
        {
          name: "Paper",
          url: "https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3000882"
        },
      ]
    },

    {
      projectName: "Scraping & Visualizing LinkedIn data and using GPT4 API to clean text data",
      projectDesc:
        "",
      image: require("./assets/images/company map location project for website.gif"),
      imageAlt: "company map location project for website.gif",
      footerLink: [
        {
          name: "medium article",
          url: "https://medium.com/@phillip.maire/scraping-visualizing-and-cleaning-data-from-linkedin-using-chatgpt4-for-educational-purposes-713c1ea20cb"
        },
        {
          name: "Github",
          url: "https://github.com/PhillipMaire/scrapifurs"
        },
      ]
    },

    {
      projectName: "Real-time audio playback for behavior and audio frequency response balancing for realistic audio playback",
      projectDesc:
        "",
      image: require("./assets/images/Audio balancing.png"),
      imageAlt: "Audio balancing.png",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/PhillipMaire/audio_behavior_realtime_playback"
        },
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "TITLE",
      subtitle:
        "subtitle",
      image: require("./assets/images/ResNetV2_2048_features_clustered.gif"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@phillip.maire/scraping-visualizing-and-cleaning-data-from-linkedin-using-chatgpt4-for-educational-purposes-713c1ea20cb",
      title: "Scraping, Visualizing and cleaning data from LinkedIn using chat GPT4 API",
      description:
        "I talk about how I can clean data using GPT API which I collected to explore my 2nd degree connections on LinkedIn "
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open.",
  number: "(502) 310-9622",
  email_address: "deep.data.phil@gmail.com"
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
