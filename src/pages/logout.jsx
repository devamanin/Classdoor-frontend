import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
const LogoutPage  = () =>{
    setTimeout(() => {
        <Router>
            <Switch>
            <Redirect to='/' />

            </Switch>

        </Router>
    }, 3000);
    return (
        <>
        <div>This is logout page</div>
        {setTimeout(function(){
            <Redirect to='/' />
        }, 200)}
        {/* <Redirect to='/' /> */}
        </>

    )
}

export default LogoutPage