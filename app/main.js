const quotes = [
    "You know, men and women are a lot alike in certain situations. Like when they're both on fire - they're exactly alike.",
    "Eggnog, who thought that one up? “I wanna get a little drunk, but I also want some pancakes.” You know what eggnog really is. You’re not gonna want to hear it, but I’ll tell ya. It’s elf cum. You might as well pour it down your back and slap your self on the ass.",
    "Yeah, I know, some people are against drunk driving, and I call those people 'the cops.' But you know, sometimes, you've just got no choice; those kids gotta get to school!",
    "Every eight minutes, someone has sex with an animal...and you wonder why the attack you. Because of that man, and its up to me and a half mexican to stop him!",
    "Everything you do, burns calories. Getting up in the morning, 100 calories; kicking the hooker out of your bed, another 100; diapering your monkey, 35 calories; laughing at a midget, fun and 10 calories; catching your girlfriend with another guy, 2000-3000 calories, depending on backswings.",
    "I went to a sex store, and i was drunk. Never do that. I took one of those strap-on dildos, I put it on my head and started chasing people like a rhino. Oh, God. Oh my God! Everyone was laughing, except for the guy in the kilt. I don’t know what happened, but i’m sorry.",
    "So, I travel a lot. I hate traveling, mostly cause my dad used to beat me with a globe."
]

const daveImages = [ 
    "../img/dave1.jpg",
    "../img/dave2.jpg",
    "../img/dave3.jpg",
    "../img/dave4.jpg",
    "../img/dave5.jpg",
    "../img/dave6.jpg",
    "../img/dave7.jpeg"
];

const button = document.getElementById('button');

//Grab the quotes and images in both arrays and insert it in the site
button.addEventListener('click', function() {
    const randomImages = getRandomImages();
// Make sure to wrap IMG ELEMENT in quotes with Images array Randomized
    document.querySelector('.img-container').innerHTML ='<img width="100%" height="100%" src="' +daveImages[randomImages] + '\">';    


    const randomQuotes = getRandomQuotes();
    document.querySelector('.dave-quotes').innerHTML = '<h3>' +quotes[randomQuotes]+'</h3>';
    
});

//Functions that target Quote and images arrays. Randomizes the round to the nearest integer. Target all items in array using length property.
function getRandomQuotes() {
    return Math.floor(Math.random() * quotes.length);
}

function getRandomImages() {
    return Math.floor(Math.random() * daveImages.length);
}

