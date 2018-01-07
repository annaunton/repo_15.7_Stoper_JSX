var Movie = React.createClass({
  
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('li', {key: this.props.movie.id},
        React.createElement('h2', {}, this.props.movie.title),
        React.createElement('p', {}, this.props.movie.desc),
        React.createElement('img', {src:this.props.movie.img})
      )
    )
  },
});

var movie1 = {
  id: 1,
  title : 'Harry Potter',
  desc : 'film o czarodzieju',
  img : 'src/harry.jpg'
};
var movie2 = {
  id: 2,
  title : 'Harry Potter',
  desc : 'film o czarodzieju',
  img : 'src/harry.jpg'
};


var element = React.createElement(Movie, {movie: movie1, movie: movie2});
ReactDOM.render(element, document.getElementById('app'));

/*
var GalleryItem = React.createClass({
  
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.image.name),
        React.createElement('img', {src: this.props.image.src})
      )
    )
  },
});

var image1 = {
  name: 'Kotek',
  src: 'http://imgur.com/n8OYCzR.png'
};


var element = React.createElement(GalleryItem, {image: image1});
ReactDOM.render(element, document.getElementById('app'));
*/