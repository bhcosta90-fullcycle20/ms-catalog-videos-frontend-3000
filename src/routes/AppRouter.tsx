import {Route, Switch} from 'react-router-dom'

import routes from './index'

interface AppRouterProps {
    
}
 
const AppRouter = () => {
    return (<Switch>
        {
            routes.map((route, key) => <Route 
                key={key} 
                path={route.path} 
                exact={route.exact === true}
                component={route.component}
            />)
        }
    </Switch> );
}
 
export default AppRouter;