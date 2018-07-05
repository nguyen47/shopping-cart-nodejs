var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping',{ useNewUrlParser: true });

var products = [
    new Product({
        image: 'https://images-na.ssl-images-amazon.com/images/I/71OyXDZ%2B6iL._SL1035_.jpg',
        title: 'Pacific Rim',
        description: "When legions of monstrous creatures, known as Kaiju, started rising from the sea, a war began that would take millions of lives and consume humanity's resources for years on end. To combat the giant Kaiju, a special type of weapon was devised: massive robots, called Jaegers, which are controlled simultaneously by two pilots whose minds are locked in a neural bridge",
        price: 20
    }),
    new Product({
        image: 'https://images-na.ssl-images-amazon.com/images/I/91IQ5P8RyWL._SL1500_.jpg',
        title: 'Battleship',
        description: "The battle for Earth begins at sea in the epic action-adventure, Battleship, starring Taylor Kitsch, Rihanna, Alexander Skarsgård, Brooklyn Decker and Liam Neeson. An international naval coalition becomes the world's last hope for survival as they engage a hostile alien force of unimaginable strength. Ripping across sea, sky and land, Battleship is 'a big, bold blast' (MSN Movies), packed with spectacular visual effects and explosive action. ",
        price: 19
    }),
    new Product({
        image: 'https://images-na.ssl-images-amazon.com/images/I/71cCtBHw1iL._SL1500_.jpg',
        title: 'Godzilla',
        description: "In this gritty, realistic sci-fi action epic, Godzilla returns to its roots as one of the world's most recognized monsters. Directed by Gareth Edwards and featuring an all-star international cast, this spectacular adventure pits Godzilla against malevolent creatures that, bolstered by humanity's scientific arrogance, threaten our very existence. ",
        price: 14
    }),
    new Product({
        image: 'https://images-na.ssl-images-amazon.com/images/I/61oKP3kpJQL.jpg',
        title: 'Gods Of Egypt',
        description: "Gods of Egypt Blu-ray Nikolaj Coster-Waldau, Brenton Thwaites",
        price: 5
    }),
    new Product({
        image: 'https://images-na.ssl-images-amazon.com/images/I/91mgEp9-U-L._SL1500_.jpg',
        title: 'Star Trek Into Darkness',
        description: "J.J. Abrams' STAR TREK INTO DARKNESS is the best-reviewed blockbuster of the year. When a ruthless mastermind known as Khan (Benedict Cumberbatch) declares a one-man war on the Federation, Captain Kirk (Chris Pine), Spock (Zachary Quinto), and the daring crew of the U.S.S. Enterprise will embark on the greatest manhunt in history. It will take all of their skills and teamwork to defend Earth and eliminate Khan's threat in this 'sleek, thrilling epic.'",
        price: 11
    }),
    new Product({
        image: 'https://images-na.ssl-images-amazon.com/images/I/5180Jb6iREL.jpg',
        title: 'John Wick',
        description: "Quick Shipping !!! New And Sealed !!! This Disc WILL NOT play on standard US DVD player. A multi-region PAL/NTSC DVD player is request to view it in USA/Canada. Please Review Description.",
        price: 13
    }),
    new Product({
        image: 'https://images-na.ssl-images-amazon.com/images/I/91pm2D5LyNL._SL1500_.jpg',
        title: 'Pixels',
        description: "When aliens misinterpret video-feeds of classic arcade games as a declaration of war against them, they attack the Earth, using the games like PAC-MAN, Donkey Kong, Galaga, Centipede and Space Invaders as models for their various assaults. President Will Cooper (Kevin James) has to call on his childhood best friend, 80s video game champion Sam Brenner (Adam Sandler) to lead a team of old-school arcaders (Peter Dinklage and Josh Gad) to defeat the aliens and save the planet.",
        price: 10
    }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
	console.log(i);
	// Save products into database
	products[i].save(function(err, result){
		done ++;
		if (done === products.length) {
			mongoose.disconnect();
		}
	});
}