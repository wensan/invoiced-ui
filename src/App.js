import React, { Component } from 'react';
import data from './components/data';
import Contact from './components/Contact';
import "./components/component.css";

class App extends Component {
	componentWillMount() {
		this.setState({
			contacts: data
		});
	}
	
	addContact = (e) => {
		e.preventDefault();
		const contacts = this.state.contacts;
		const newId = contacts[contacts.length - 1].id + 1;
		
		this.setState({
			contacts: contacts.concat({ 
				id: newId, 
				name: this.refs.name.value, 
				email: this.refs.email.value
			}),
		});
		
		this.refs.name.value = null;
		this.refs.email.value = null;
	}
	
	newContact = () =>
		<div className="pure-g">
			<div className="pure-u-12-24">
				<form className="pure-form" onSubmit={this.addContact}>
					<fieldset>
						<legend>New Contact</legend>
						<input ref="email" type="email" placeholder="example@example.com" />
						<input ref="name" type="text" placeholder="Name" />
						<button type="submit" className="pure-button pure-button-primary">Add</button>
					</fieldset>
				</form>
			</div>
		</div>
				
  render() {
    return (
			<div id="layout">
			{ this.newContact() }			
				<div className="pure-g">				
					{this.state.contacts.map(info =>
						<Contact key={info.id} {...info} />
					)}
				</div>
			</div>
    );
  }
}

export default App;
