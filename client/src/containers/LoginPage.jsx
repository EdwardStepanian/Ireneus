import React from 'react';
import LoginForm from '../components/LoginForm.jsx';

class LoginPage extends React.Component{
    constructor(props){
        super(props);

        this.setState = {
            errors : {},
            user : {
                email : '',
                password : ''
            }
        }
    }

    processForm(event){
        event.preventDefault();

        console.log('email:', this.state.user.email);
        console.log('password:', this.state.user.password);
    }

    changeUser(event){
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        })
    }

    render(){
        return(
            <LoginForm
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
            />
        )
    }

}

LoginPage.PropTypes = {
    errors: React.PropTypes.object.isRequired,
    user : React.PropTypes.object.isRequired
};

export default LoginPage;