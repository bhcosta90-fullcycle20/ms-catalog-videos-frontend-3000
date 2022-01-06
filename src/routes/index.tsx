import { RouteProps } from 'react-router-dom'
import Dashboard from './../pages/Dashboard'
import CategoryList from './../pages/Category'

export interface myRouteProps extends RouteProps {
    label: string;
    name: string;
}

const routes: myRouteProps[] = [
    {
        label: 'Dashboard',
        name: 'dashboard',
        path: '/',
        component: Dashboard,
        exact: true
    },
    {
        label: 'Categorias',
        name: 'categories.list',
        path: '/categories',
        component: CategoryList,
        exact: true
    }
]

export default routes