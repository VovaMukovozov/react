var React = require('react'),
    ReactRouter = require('react-router'),
    ReactDom = require('react-dom'),
    App = require('./components/app.jsx'),
    Home = require('./components/home.jsx'),
    Login = require('./components/Login/login.jsx'),
    Logout = require('./components/Login/logout.jsx'),
    Dashboard = require('./components/dashboard.jsx'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    browserHistory = ReactRouter.hashHistory,
    IndexRoute = ReactRouter.IndexRoute;

var routes = (
        <Route component={App} path='/'>
            <IndexRoute component={Home} />
            <Route path="login" component={Login}/>
            <Route path="logout" component={Logout}/>
            <Route path="dashboard" component={Dashboard}/>
        </Route>
);

ReactDom.render(<Router history={browserHistory} >{routes}</Router>,   app)



























//var React = require('react');
//var ReactDom = require('react-dom');
//
//console.log('Hello iam JSX file! ');
//
//var GroceryItemList = require('./components/GroceryItem/GroceryItemList.jsx');
//
//var GroceryItemStore = require('./stores/GroceryItemStore.jsx');
//
//var initial = GroceryItemStore.getItems();
//
//
//function render(){
//    ReactDom.render(<GroceryItemList items={initial}/>, app);
//}
//
//GroceryItemStore.onChange(function(items){
//    initial = items;
//    render();
//});
//
//render();