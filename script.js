//var element = React.createElement('div', {}, 'Hello world!');


/*var element =
	React.createElement('div', {}, 
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {},
			React.createElement('li', {},
				React.createElement('h1', {}, 'Harry Poter'),
				React.createElement('p', {}, 'Film o czarodzieju'),
			),
			React.createElement('li', {}, 
				React.createElement('h1', {}, 'Król Lew'),
				React.createElement('p', {}, 'Film o królu sawanny'),
				React.createElement('img', {src: 'cat.jpg'},)

			),

		)
	);


ReactDOM.render(element, document.getElementById('app'));
*/



var movies = [
{
	id: 1,
	title : 'Harry Potter',
	desc : 'film o czarodzieju',
	img : 'src/harry.jpg'
},
{
	id: 2,
	title : 'Król Lew',
	desc : 'film o królu sawanny',
	img : 'src/cat.jpg'
},
{
	id : 3,
	title : 'Pożegnanie z Afryką',
	desc : 'film o Afryce',
	img : 'src/africa.jpg'
},
{
	id : 4,
	title : 'Dunkierka',
	desc : 'film o ewakuacji Dunkierki',
	img : 'src/dunkierka.jpg'
},
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src:movie.img, width:'400px'},)

	);

});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements),


);

ReactDOM.render(element, document.getElementById('app'));

