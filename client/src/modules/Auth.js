class Auth{

    //Save authenticated user token
    authenticateUser(token){
        localStorage.setItem('token', token);
        sessionStorage.setItem('sessionToken', token)
    }
    //Check if a user is authenticated
    isUserAuthenticated(){
        return localStorage.getItem('token') !== null;
    }
    //Deauthenticate a user
    deauthenticateUser(){
        localStorage.removeItem('token');
    }

    //Get a token
    getToken(){
        localStorage.getItem('token');
    }
}

export default Auth;