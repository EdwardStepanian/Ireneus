import Base from './components/Base.jsx'
import HomePage from './components/HomePage.jsx'
import LoginPage from './containers/LoginPage.jsx'
import SignUpPage from './containers/SignUpPage.jsx'
import DashboardPage from './containers/DashboardPage.jsx'
import Auth from './modules/Auth'

const routes = {
    // base component (wrapper for the whole application).
    component: Base,
    childRoutes: [
        {
            path: '/',
            component: (location, callback) => {
                if(Auth.isUserAuthenticated()){
                    callback(null, DashboardPage)
                }else{
                    callback(null, HomePage)
                }
            }
        },

        {
            path: '/login',
            component: LoginPage
        },

        {
            path: '/signup',
            component: SignUpPage
        },

        {
            path: '/logout',
            onEnter: (nextState, replace) => {
                Auth.deauthenticateUser()

                //Change url to /
                replace('/')
            }
        }
    ]
}

export default routes