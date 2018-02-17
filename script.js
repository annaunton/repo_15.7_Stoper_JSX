var Counter = React.createClass({

    getDefaultProps: function() {
        console.log(Ustawia domyślne wartości propsów, które nie zostały przekazane do komponentu. Może np. przy formularzach, jeżeli jakies pole nie zostanie wypełnione);
    },

    ComponentWillMount: function() {
        console.log(Wykonywana zaraz przed wykonaniem metody render);

    },

    ComponentDidMount: function() {
        console.log(Jak tylko metoda render zostanie wywołana, od razu wywoływana jest metoda componentDidMount. W chwili wykonywania tej metody, nasz komponent widnieje już na stronie (jest zamontowany w drzewie DOM). Możemy wykonywać na nim różne operacje manipulacji, używać jQuery albo też pobrać dane. );

    },

    componentWillReceiveProps: function() {
        consolelog(Metoda zostanie wywołana tylko wtedy, gdy komponent otrzyma nowe właściwości, pozwala aktualizować stan na podstawie nadchodzących właściwości. Może np. przy updatowaniu formularza);
    },

    shouldComponentUpdate: function() {
        console.log(Metoda ta jest wywoływana tuż przed wywołaniem metody render i pozwala sprawdzić czy faktycznie trzeba jeszcze raz przerysować komponent. Zwracana jest tutaj wartość true/false, czyli typ boolean. Metodę tę można zastosować, kiedy zależy nam na optymalizacji działania komponentu. Albo np. do sprawdzenia czy dysponujemy aktualnymi danymi);
    },

    componentWillUpdate: function() {
        console.log(Metoda shouldComponentUpdate zwróci wartość true, to natychmiast zostanie wywołana kolejna metoda - componentWillUpdate. Powinna zostać wywoływana tylko do przygotowania na nadchodzące zmiany);
    },

    componentDidUpdate: function() {
        console.log(Jako ostatnia zaraz po przerysowaniu komponentu wywołuje się metoda componentDidUpdate - w niej możemy wykonać np. jakieś manipulacje DOM (analogicznie do metody componentDidMount).);

    },

    componentWillUnmount: function() {
        console.log(Zanim pozbędziemy się komponentu może się zdarzyć, że będziemy musieli załatwić jeszcze pewne sprawy, posprzątać. Do tego celu służy metoda componentWillUnmount, w której możemy wykonywać wszystkie rzeczy związane z odpinaniem timerów czy nasłuchiwania zdarzeń na elementach DOM.);

    },
    
 
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



