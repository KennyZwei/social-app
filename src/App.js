import './App.css';
import Navbar from "./components/navbar/navbar";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/dialogs/dialogsContainer";
import UsersContainer from "./components/users/usersContainer";
import ProfileContainer from "./components/profile/profileContainer";
import HeaderContainer from "./components/header/headerContainer";
import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {initialize} from "./redux/reducers/appReducer";
import Preloader from "./components/common/preloader/preloader";
import LoginContainer from "./components/login/loginContainer";

class App extends Component {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if(!this.props.initialized) return <Preloader />
        return (
            <div className='App'>
                <HeaderContainer/>
                <Navbar/>
                <div className='content'>
                    <Route path='/dialogs' component={DialogsContainer}/>
                    <Route path='/profile/:userId?' component={ProfileContainer}/>
                    <Route path='/users' component={UsersContainer}/>
                    <Route path='/login' component={LoginContainer}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>({
    initialized: state.app.initialized
})
export default compose(
    connect(mapStateToProps, {initialize})
)(App);
