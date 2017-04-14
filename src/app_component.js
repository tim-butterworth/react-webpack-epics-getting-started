import {connect} from 'react-redux';
import React from 'react';

class App extends React.Component {
    render() {
	return <div>
	<div>
	<span>
	{this.props.name}
	</span>
	</div>
	<div>
	<span onClick={
	    () => {
		console.log("Dispatching things");
		this.props.dispatch({type: 'PING'});
	    }
	}>
	Click Me
	</span>
	</div>
	<div>{this.props.display_text}</div>
	</div>;
    }
}

const bindStateToProps = (state) => {
    return {
	name: state.name,
	display_text: state.ping_pong.value
    }
}

const bindDispatchToProps = (dispatch) => ({dispatch})

export const AppContainer = connect(
    bindStateToProps,
    bindDispatchToProps
)(App);

