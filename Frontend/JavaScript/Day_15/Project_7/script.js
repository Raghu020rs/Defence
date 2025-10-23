const zodicSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",    
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
];

const compliments = [
    "You have a great sense of humor!",
    "Your creativity is contagious.",
    "You are a fantastic problem solver.",
    "You have a kind heart.",
    "Your positivity is infectious.",
    "You are a natural leader.",  
    "You have an amazing work ethic.",
    "You are incredibly thoughtful.",
    "Your enthusiasm is inspiring.",    
    "You have a unique perspective on things.",
    "You are a great listener.",
    "You have a wonderful smile.",
    "You are very dependable.",
    "You have a great sense of style.",
    "You are incredibly talented.",
    "You have a brilliant mind.",
    "You are very compassionate.",
    "You have a great sense of adventure.",
    "You are a true friend.",
    "You have an amazing ability to connect with others.",
    "You are very resourceful.",
    "You have a great sense of timing.",
    "You are incredibly patient.",
    "You have a great sense of humor.",
    "You are very generous,",
    "You have a great sense of curiosity.",
    "You are incredibly resilient.",
    "You have a great sense of empathy.",
    "You are very optimistic.",
    "You have a great sense of determination.",
    "You are incredibly talented."
];

const recommendations = [
    "Try a new hobby that challenges you.",
    "Take a walk in nature to clear your mind.",  
    "Read a book that inspires you.",
    "Practice mindfulness or meditation.",
    "Connect with a friend you haven't spoken to in a while.",
    "Set a small, achievable goal for the week.",
    "Explore a new cuisine or recipe.",
    "Take some time for self-care and relaxation.",
    "Volunteer for a cause you care about.",
    "Learn something new, like a language or skill.",
    "Spend time journaling your thoughts and feelings.",
    "Try a new workout or physical activity.",
    "Visit a museum or art gallery.",
    "Attend a local event or workshop.",
    "Watch a documentary on a topic you're curious about.",
    "Practice gratitude by listing things you're thankful for.",
    "Declutter a space in your home for a fresh start.",
    "Listen to a podcast that interests you.",
    "Take a day trip to explore a nearby, new place.",
    "Spend time outdoors and soak up some sunshine.",
    "Try a digital detox for a day or weekend.",
    "Cook a meal from a different culture.",
    "Start a small garden or care for a plant.",
    "Create a vision board for your goals and dreams.",
    "Practice deep breathing exercises to reduce stress.",
    "Watch a comedy to lift your spirits.",
    "Write a letter to your future self.",
    "Explore local hiking trails.",
    "Attend a live music performance.",
    "Try your hand at painting or drawing.",
    "Join a club or group that shares your interests.",
    "Take a class to learn something new.",
    "Spend time with loved ones and cherish those moments.",
    "Go stargazing on a clear night.",
    "Try yoga or stretching exercises.",
    "Visit a farmer's market and try fresh produce.",
    "Listen to your favorite music and dance like no one's watching.",
    "Plan a weekend getaway to recharge.",
];

const predictions = [
  "Today is a great day to embrace new opportunities and challenges.",
  "You may find unexpected joy in the little things around you.",
  "A positive change is on the horizon; stay open to new experiences.",
  "Trust your instincts; they will guide you to success.",
  "You will find strength in your relationships; cherish those connections.",
  "Your creativity will lead you to exciting new ventures.",
  "Take time to reflect on your goals; clarity will come.",
  "You will discover a hidden talent that will bring you joy.",
  "A surprise encounter will lead to a meaningful connection.",
  "Your hard work will soon pay off in ways you hadn't imagined.",
  "Embrace change; it will bring growth and new perspectives.",
  "You will find balance in your life by prioritizing self-care.",
  "An opportunity for adventure is coming your way; be ready to seize it.",
  "Embrace your uniqueness; it is your greatest strength.",
  "You will find success in unexpected places; keep an open mind.",
  "Your intuition will lead you to the right path.",
  "A moment of kindness will brighten your day and someone else's.",
  "You will find inspiration in the world around you; stay curious.",
  "Your positive attitude will attract good things into your life.",
  "Take a leap of faith; it will lead to exciting new experiences."
];


const form = document.getElementById('astroForm');
 
form.addEventListener('submit',(e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const day = parseInt(document.getElementById('date').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const text = `Hi ${name} ${surname} Your Zodiac Sign is ${zodicSigns[month - 1]}.
    ${compliments[day-1]}. ${recommendations[year % 20]}, ${predictions[day*month % 30]}, prediction for today: ${predictions[(name.length * surname.length) % 20]}`;

    document.getElementById('result').innerText = text;

    
})
