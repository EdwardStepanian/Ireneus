import React from 'react';
import LoginForm from '../components/LoginForm.jsx';

class LoginPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            errors : {},
            user : {
                email : '',
                password : ''
            }
        }
    }

    processForm(event){
        event.preventDefault();

        // create a string for an HTTP body message
        const email = encodeURIComponent(this.state.user.email);
        const password = encodeURIComponent(this.state.user.password);
        const formData = `email=${email}&password=${password}`;

        // create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('post', '/auth/login');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                // success

                // change the component-container state
                this.setState({
                    errors: {}
                });

                console.log('The form is valid');
            } else {
                // failure

                // change the component state
                const errors = xhr.response.errors ? xhr.response.errors : {};
                errors.summary = xhr.response.message;

                this.setState({
                    errors
                });
            }
        });
        xhr.send(formData);


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