import React, {useContext } from "react";
import Product from '../Container/Products';
import Preview from '../Container/Preview';
import FavList from '../Container/FavList'
import Error from '../Container/Error';
import SellButton from '../Container/SellButton';
import Ads from '../Container/Ads';
import SignIn from '../Container/SignIn'
import { UserContext } from "../../provider/Userprovider";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  browserHistory
} from "react-router-dom";
import DashBoard from "../Container/DashBoard";
import Signup from "../Container/Signup";
function AppRoute(){
        const user = useContext(UserContext);
        return(
            user ?
            <Router>
                <Switch>
                <Route exact path="/" component={DashBoard}></Route>
                <Route path='/Preview/:id' component={Preview}></Route>
                <Route path='/SellButton' component={SellButton}></Route>
                <Route path='/Ads' component={Ads}></Route>
                <Route path="/FavList" component={FavList}></Route>
                <Route path="*"><Error/></Route>
                </Switch>
            </Router>            
           :
            <Router>
            <Switch>
                <Route exact path='/' component={Product}></Route>
                <Route path='/Preview/:id' component={Preview}></Route>
                <Route path="/SignUp" component={Signup}></Route>
                <Route path="/SignIn" component={SignIn}></Route>
                <Route path="*"><Error/></Route>
            </Switch>
            </Router>
        )
}
export default AppRoute