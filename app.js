const nextBtn = document.querySelector('button');
const quote = document.querySelector('.quote');
const time = document.querySelector('.time');

setInterval( () => {
   let date = new Date();
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();
   let day_night = "PM";
   let hr = hours;
   let mi = "0" + minutes;
   let se = "0" + seconds;

   if(hours > 12) {
     day_night = "PM";
   }
   if(hours > 12){
     hours = hours - 12;
   }
   if(hours < 10){
     hours = hr;
   }
   if(minutes < 10){
     minutes = mi;
   }
   if(seconds < 10){
     seconds = se;
   }
   time.textContent = `${hours} : ${minutes} : ${seconds} ${day_night}`;
} );

  const quotes = [
    {
      quote: "Laughing is good for the heart and can increase blood flow by 20 percent.",
    },
    {
     quote: "Your muscles and joints require water in order to stay energized, lubricated and healthy.",
    },  
    {
      quote: "Water can aid in weight loss because it helps to remove the by-products of fat and if consumed before a meal can make you more satisfied and eat less.",
    },
    {
    quote: "A lack of water can cause a range of problems, such as constipation, asthma, allergy and migraines.",
  },
      
    {
      quote: "Kidneys filter your blood up to 300 times a day and need water to function optimally.",
    },
    {
     quote: "The spinal disc core is comprised of a large volume of water therefore dehydration could lead to back pain.",
    },  
    {
      quote: "Repeatedly using plastic water bottles can release chemicals into your water. Why not try a reusable bottle instead? It’s good for you and the planet.",
    },
    {
    quote: "Consuming water helps the body maintain its natural pH balance.",
  },
      
    {
      quote: "Dehydration can have a negative impact on your mood and energy levels. Drink enough water to ensure you’re always at your best.",
    },
    {
     quote: "Drinking at least five glasses of water a day can reduce your chances of suffering from a heart attack by 40%.",
    },  
    {
      quote: "The average moderately active person walks approximately 7,500 steps a day, which is the lifetime equivalent of walking around the Earth five times.",
    },
    {
    quote: "The average moderately active person walks approximately 7,500 steps a day, which is the lifetime equivalent of walking around the Earth five times.",
  },
      
    {
      quote: "Exercising regularly can increase your lifespan by keeping your DNA healthy and young.",
    },
    {
     quote: "Running is good for you. People who run 12-18 miles a week have a stronger immune system and can increase their bone mineral density.",
    },  
    {
      quote: "Even at rest, muscle is three times more efficient at burning calories than fat.",
    },
    {
    quote: "To lose one pound of fat, you need to burn roughly 3,500 calories.",
  },
      
    {
      quote: "The body has more than 650 muscles.",
    },
    {
     quote: "There are five main components of fitness: the body’s  ability to use oxygen, muscular strength, endurance, flexibility and body composition.",
    },  
    {
      quote: "Vitamin D is as important as calcium in determining bone health, and most people don’t get enough of it.",
    },
    {
    quote: "Extra virgin olive oil is the healthiest fat on the planet."
  },
      
    {
      quote: "Life is too short and sweet to be spent by cribbing and complaining about things.",
    },
    {
     quote: "The amino acid found in eggs can help improve your reflexes.",
    },  
    {
      quote: "An apple a day does keep the doctor away. Apples can reduce levels of bad cholesterol to keep your heart healthy.",
    },
    {
    quote: "Women below the age of 50 need twice the amount of iron per day as men of the same age.",
  },
      
    {
      quote: "Although it only takes you a few minutes to eat a meal, it takes your body hours to completely digest the food.",
    },
    {
     quote: "Eating oatmeal provides a serotonin boost to calm the brain and improve your mood.",
    },  
    {
      quote: "Tea can lower risks of heart attack, certain cancers, type 2 Diabetes and Parkinson’s disease. Just make sure your tea isn’t too sweet!",
    },
    {
    quote: "Almonds, avocados and arugula (the three ‘A’s) can boost your sex drive and improve fertility.",
  },
      
    {
      quote: "Chocolate is good for your skin; its antioxidants improve blood flow and protect against UV damage.",
    },
    {
     quote: "Walking outside – or spending time in green space – can reduce negative thoughts and boost self-esteem.",
    },  
    {
      quote: "Yoga can boost your cognitive function and lowers stress.",
    },
    {
    quote: "Chewing gum makes you more alert, relieves stress and reduces anxiety levels.",
  },
      
    {
      quote: "Writing things out by hand will help you remember them.",
    },
    {
     quote: "Swearing can make you feel better when you’re in pain.",
    },  
    {
      quote: "Smelling rosemary may increase alertness and improve memory so catch a whiff before a test or important meeting.",
    },
    {
    quote: "Drinking coffee can reduce the risk of depression, especially in women.",
  },
      
    {
      quote: "Maintaining good relationships with family and friends is good for your health, memory and longevity.",
    },
    {
     quote: "Feeling stressed? Read. Getting lost in a book can lower levels of cortisol, or other unhealthy stress hormones, by 67 percent.",
    },  
    {
      quote: "Learning a new language or playing a musical instrument gives your brain a boost.",
    },
    {
    quote: "The US spends almost three times more on healthcare than any other country in the world, but ranks last in life expectancy among the 12 wealthiest industrialized countries.",
  },
      
    {
      quote: "Nearly 30% of the world’s population is obese.",
    },
    {
     quote: "Always look on the bright side: being an optimist can help you live longer.",
    },  
    {
      quote: "Exercise will give you more energy, even when you’re tired.",
    },
    {
    quote: "Sitting and sleeping are great in moderation, but too much can increase your chances of an early death.",
  },
      


  ]


  nextBtn.addEventListener('click', () =>
  {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
  })