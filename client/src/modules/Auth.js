class Auth{

    //Save authenticated user token
    static authenticateUser(token){
        localStorage.setItem('token', token);
        sessionStorage.setItem('sessionToken', token)
    }
    //Check if a user is authenticated
    static isUserAuthenticated(){
        return localStorage.getItem('token') !== null;
    }
    //Deauthenticate a user
    static deauthenticateUser(){
        localStorage.removeItem('token');
    }

    //Get a token
    static getToken(){
        localStorage.getItem('token');
    }
}

export default Auth;