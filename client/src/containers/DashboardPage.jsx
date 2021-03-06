import React , { Component }from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';

class DashboardPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            secretData : ''
        }
    }

    //This method will be executed after initial rendering

    static componentDidMount(){
        const xhr = new XMLHttpRequest()
        xhr.open('get', 'api/dashboard')
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`)
        xhr.responseType('json')
        xhr.addEventListener('load', () => {
            this.setState({
                secretData : xhr.response.message
            })
        })
        xhr.send()
    }

    render(){
        return(
            <Dashboard secretData = {this.state.secretData}/>
        )
    }
}

export default DashboardPage