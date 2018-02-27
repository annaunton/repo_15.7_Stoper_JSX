var Stopwatch = React.createClass({
    getInitialState: function() {
        return {miliseconds: 0}

    },

     getMiliseconds: function() {
        return ('0' + this.state.miliseconds % 100).slice(-2);

    },

    getSeconds: function() {
        if(this.state.miliseconds < 6000) {
            return ('0' + Math.floor(this.state.miliseconds/100)).slice(-2);
        } else { 
            var length = this.state.miliseconds % 6000;
            console.log(length);
            if (length < 100 ) {
                return ('00');
            } else if (length >= 100 && length < 1000 ) {
                return (('0' + length).slice(-4,-2));
            } else {
                return (('' + length).slice(-4,-2));
            }

        }

    },

    getMinutes: function() {
        return Math.floor(this.state.miliseconds/6000);
    },

    handleStartClick: function() {
        var self = this;
        this.watch = setInterval(function() {
            self.setState({
                miliseconds: (self.state.miliseconds +1),
            });
        }, 10)
    },

    handleStopClick: function() {
        clearInterval(this.watch);
    },


    render: function() {

        var stylesControls = {
            margin: '10px auto', 
            width: '215px', 
            textAlign: 'center',
            height: '35px',
            lineHeight: '35px',
            background: 'black',
            color: '#fff',
            fontSize: '26px', 

        };

        var stylesStopwatch = {
            margin: '10px auto', 
            width: '215px', 
            textAlign: 'center',
            height: '35px',
            lineHeight: '35px',
            background: 'red',
            color: '#fff',
            fontSize: '26px', 

        };

        return (<div>
                <div style={stylesStopwatch}>{this.getMinutes()} : {this.getSeconds()} : {this.getMiliseconds()}</div>
                <div onClick={this.handleStartClick} style={stylesControls}>Start</div>
                <div onClick={this.handleStopClick} style={stylesControls}>Stop</div>
        </div>);
        
    }

});

ReactDOM.render(<Stopwatch/>, document.getElementById('app'));


