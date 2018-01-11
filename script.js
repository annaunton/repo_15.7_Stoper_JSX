var Counter = React.createClass({

    /*getDefaultProps: function() {
        console.log();
    },

    ComponentWillMount: function() {


    },

    componentWillReceiveProps: function() {

    },

    shouldComponentUpdate: function() {
      
    },

    componentWillUpdate: function() {

    },

    componentDidUpdate: function() {

    },

    componentWillUnmount: function() {

    },
    */
 
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    render: function() {
        return React.createElement('div', {onClick: this.increment, className: 'button increment1'},
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});


var Counter2 = React.createClass({


    getInitialState: function() {
        return {
            counter: 0
        };
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },


    render: function() {
        return React.createElement('div', {onClick: this.decrement, className: 'button decrement'},
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var Counter3 = React.createClass({


    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter +1
        });
    },


    render: function() {
        return React.createElement('div', {onClick: this.increment, className: 'button increment2'},
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});


var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {},
        React.createElement(Counter, {}),
        React.createElement(Counter2, {}),
        React.createElement(Counter3, {}),
      )
    );
  }
});

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));



