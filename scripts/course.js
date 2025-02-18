const courses = [
  {
    img: "./asset/images/All category courses/Course Images-0.svg",
    category: "IT & Software",
    price: "$35",
    title: "Learn Python Programming with Masterclass",
    line: "",
    rating: "4.0",
    numberOfStd: "211,434",
    id: "it-software",
  },
  {
    img: "./asset/images/All category courses/Course Images-1.svg",
    category: "Design",
    price: "$9",
    title: "Ultimate Google Ads Training 2020: Profit with Pay Per Click",
    line: "",
    rating: "4.1",
    numberOfStd: "154,817",
    id: "design",
  },
  {
    img: "./asset/images/All category courses/Course Images-2.svg",
    category: "Design",
    price: "$13",
    title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    line: "",
    rating: "4.6",
    numberOfStd: "181,811",
    id: "design",
  },
  {
    img: "./asset/images/All category courses/Course Images-3.svg",
    category: "Design",
    price: "$24",
    title: "Data Structures & Algorithms Essentials (2021)",
    line: "",
    rating: "4.7",
    numberOfStd: "451,444",
    id: "design",
  },
  {
    img: "./asset/images/All category courses/Course Images-4.svg",
    category: "Design",
    price: "$16",
    title: "Instagram Marketing 2021: Complete Guide To Instagram Growth",
    line: "",
    rating: "4.5",
    numberOfStd: "854",
    id: "design",
  },
  {
    img: "./asset/images/All category courses/Course Images-5.svg",
    category: "Design",
    price: "$89",
    title: "Mega Digital Marketing Course A-Z: 12 Courses in 1 + Updates",
    line: "",
    rating: "4.2",
    numberOfStd: "2,711",
    id: "design",
  },
  {
    img: "./asset/images/All category courses/Course Images-6.svg",
    category: "Design",
    price: "$49",
    title: "Complete Blender Creator: Learn 3D Modelling for Beginners",
    line: "",
    rating: "4.9",
    numberOfStd: "197,637",
    id: "design",
  },
  {
    img: "./asset/images/All category courses/Course Images-7.svg",
    category: "IT & Software",
    price: "$35",
    title: "Learn Ethical Hacking From Scratch 2021",
    line: "",
    rating: "4.8",
    numberOfStd: "451,444",
    id: "it-software",
  },
  {
    img: "./asset/images/All category courses/Course Images-8.svg",
    category: "IT & Software",
    price: "$32",
    title: "SQL for NEWBS: Weekender Crash Course",
    line: "",
    rating: "5.0",
    numberOfStd: "451,444",
    id: "it-software",
  },
  {
    img: "./asset/images/All category courses/Course Images-9.svg",
    category: "IT & Software",
    price: "$89",
    title: "Complete Adobe Lightroom Megacourse: Beginner to Expert",
    line: "",
    rating: "4.9",
    numberOfStd: "511,123",
    id: "it-software",
  },
  {
    img: "./asset/images/All category courses/Course Images-10.svg",
    category: "IT & Software",
    price: "$9",
    title: "Automate the Boring Stuff with Python Programming",
    line: "",
    rating: "4.5",
    numberOfStd: "982,941",
    id: "it-software",
  },
  {
    img: "./asset/images/All category courses/Course Images-11.svg",
    category: "IT & Software",
    price: "$24",
    title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    line: "",
    rating: "4.7",
    numberOfStd: "451,444",
    id: "it-software",
  },
  {
    img: "./asset/images/All category courses/Course Images-12.svg",
    category: "Developments",
    price: "$32",
    title: "Adobe Premiere Pro CC – Advanced Training Course",
    line: "",
    rating: "4.6",
    numberOfStd: "236,568",
    id: "developments",
  },
  {
    img: "./asset/images/All category courses/Course Images-13.svg",
    category: "Developments",
    price: "$16",
    title: "Angular - The Complete Guide (2021 Edition)",
    line: "",
    rating: "4.3",
    numberOfStd: "197,637",
    id: "developments",
  },
  {
    img: "./asset/images/All category courses/Course Images-14.svg",
    category: "Developments",
    price: "$24",
    title: "SEO 2021: Complete SEO Training + SEO for WordPress Websites",
    line: "",
    rating: "5.0",
    numberOfStd: "197,637",
    id: "developments",
  },
  {
    img: "./asset/images/All category courses/Course Images-15.svg",
    category: "Developments",
    price: "$32",
    title: "Digital Marketing Masterclass - 23 Courses in 1",
    line: "",
    rating: "5.0",
    numberOfStd: "211,434",
    id: "developments",
  },
  {
    img: "./asset/images/All category courses/Course Images-16.svg",
    category: "Developments",
    price: "$9",
    title: "Selenium WebDriver with Java - Basics to Advanced + Frameworks",
    line: "",
    rating: "4.4",
    numberOfStd: "154,817",
    id: "developments",
  },
  {
    img: "./asset/images/All category courses/Course Images-17.svg",
    category: "Developments",
    price: "$35",
    title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
    line: "",
    rating: "3.5",
    numberOfStd: "982,941",
    id: "developments",
  },
  {
    img: "./asset/images/All category courses/Course Images-18.svg",
    category: "Marketing",
    price: "$13",
    title: "Ultimate AWS Certified Solutions Architect Associate 2021",
    line: "",
    rating: "4.1",
    numberOfStd: "511,123",
    id: "marketing",
  },
  {
    img: "./asset/images/All category courses/Course Images-19.svg",
    category: "Marketing",
    price: "$23",
    title: "How to get Diamond in soloQ | League of Legends | Season 11",
    line: "",
    rating: "4.7",
    numberOfStd: "435,671",
    id: "marketing",
  },
  {
    img: "./asset/images/All category courses/Course Images-20.svg",
    category: "Marketing",
    price: "$9",
    title: "[NEW] Ultimate AWS Certified Cloud Practitioner - 2021",
    line: "",
    rating: "5.0",
    numberOfStd: "1,356,236",
    id: "marketing",
  },
  {
    img: "./asset/images/All category courses/Course Images-21.svg",
    category: "Marketing",
    price: "$49",
    title: "The Ultimate Drawing Course - Beginner to Advanced",
    line: "",
    rating: "4.9",
    numberOfStd: "197,637",
    id: "marketing",
  },
  {
    img: "./asset/images/All category courses/Course Images-22.svg",
    category: "Marketing",
    price: "$24",
    title: "iPhone Photography | Take Professional Photos On Your iPhone",
    line: "",
    rating: "4.8",
    numberOfStd: "211,434",
    id: "marketing",
  },
  {
    img: "./asset/images/All category courses/Course Images-23.svg",
    category: "Marketing",
    price: "$24",
    title: "Premiere Pro CC for Beginners: Video Editing in Premiere",
    line: "",
    rating: "4.8",
    numberOfStd: "854",
    id: "marketing",
  },
];
