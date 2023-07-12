// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
  lastname: 'Ivanov',
},
position:'Junior Fullstack JS Developer',
salary:'“600$ в місяц”',
address:'м. Миколаїв, вул. Робоча 2-А'
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone:{
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'linkedin',
    },
  },
}


// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page:{ 
      tetle: 'Resume - Summary',
    },
    
    header,

  main: {
    summary:{
      title:'Summary',
      text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
      work on a new project I learn the domain and try to understand the idea of the project. Good team
      player, every colleague is a friend to me.`,
   },
   experience:{
    title: 'Other experience',
    text:`Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
      tournament position, goals etc), analyzing by simple mathematics models and preparing probability
      for such events like: money line - first win / draw / second win, totals etc.`,
   },
  },
   

  footer,
  
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page:{ 
      tetle: 'Resume - Skills',
    },
    
    header,

  main: {
    skills:[
      {
        name: 'HTML',
        point: 9,
        isTop: true,
      },
      {
        name: 'Handlebars',
        point: 8,
        isTop: true,
      },
      {
        name: 'VS Code',
        point: 10,
        isTop: false,
      },
      {
        name: 'Git',
        point: 7,
        isTop: false,
      },
      {
        name: 'Terminal',
        point: 4,
        isTop: false
      },
      {
        name: 'NPM',
        point: 5,
      },
      {
        name: 'Reakt.js',
        point: 0,
      },
      {
        name: 'PHP',
        point: null,
      },
       ],
      hobbies:[
        {
          name: 'моделювання',
          isMain: true,
        },
        {
          name: 'вязання гачком',
          isMain: false,
        },
        {
          name: 'футбол',
          isMain: false,
        },
      ],
  },
   
  footer,
  
  })
})
// ================================================================ ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page:{ 
      tetle: 'Resume - education',
    },
    
    header,

  main: {
    education:[
      {
        name: 'Вінницький національний аграрний університет',
        point: 9,
        isEnd: true,
      }, 
        {
          name: 'Університет імені Альфреда Нобеля',
          point: 10,
          isEnd: true,
        }, 
          {
            name: 'Житомирський державний університет імені Івана Франка',
            point: 8,
            isEnd: true,
          }, 
          {
            name: 'Білоцерківський національний аграрний університет',
            point: 9,
            isEnd: false,
          },
          {
            name: 'Український католицький університет',
            point: 7,
            isEnd: false,
          },
          {
            name: 'Ізмаїльський державний гуманітарний університет',
            point: 9,
            isEnd: false,
          },
        ],
          certificates:[
            {
              name: 'Білоцерківськи національний аграрний університет',
              id: 123,
            },
            {
              name: 'Ізмаїльський державний гуманітарний університет',
              id: 234,
            },
            {
              name: 'Український католицький університет',
              id: 345,
            },
          ],
  },
   

  footer,
  
  })
})
// Підключаємо роутер до бек-енду
module.exports = router
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout:'big',

    page:{ 
      tetle: 'Resume - work',
    },
     header,
  main: {
    works: [
      {position:'Junior Fullstack Developer',
    company: {
      name:'IT Brains',
      url: 'http://it-brains.com.ua/'
    },
duration: {
  from:'22.03.2022',
  to:null,
},
projectAmount: 3,

projects: [
  {
   name:'Resume',
  url:'http://resume.com.ua/',
  about:'Airbnb competitor. High-load aplication for siarching apatmens',
  stacks: [
    {
    name: 'React.js',
        },
{
  name: 'HTML / CSS',
},
{
  name: 'Note.js',
},
],
awards: [
  {
      name:'Baground verification - is a feature that provides users to prove that they are real persons.',
  },
  {
      name:'Preparing SEO optimized pages. The automated process of getting data for tht ap from documents.',
  },
],
stackAmount: 4,
awardAmount: 5,
}],
},
  ],
  },
  footer,
  })
})
// Підключаємо роутер до бек-енду
module.exports = router
