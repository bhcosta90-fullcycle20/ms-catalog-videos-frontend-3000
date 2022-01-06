import { FunctionComponent, useState } from "react";

import { IconButton, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import routes, { myRouteProps } from './../../routes'
import { Link } from "react-router-dom";

interface MenuProps {

}

const listRoutes = [
    'dashboard',
    'categories.list'
];

const menuRoutes = routes.filter(route => listRoutes.includes(route.name))

const Default: FunctionComponent<MenuProps> = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl)
    const handleOpen = (event: any) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null)

    return (<>
        <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            aria-controls='menu-appbar'
            aria-haspopup="true"
            onClick={handleOpen}
        >
            <MenuIcon />
        </IconButton>

        <Menu open={open} id='menu-appbar' anchorEl={anchorEl} onClose={handleClose}>
            {
                listRoutes.map((routeName, key) => {
                    const route = menuRoutes.find(route => route.name === routeName) as myRouteProps
                    return <MenuItem key={key} component={Link} to={route.path as string}>
                        {route.label}
                    </MenuItem>
                })
            }
        </Menu>
    </>);
}

export default Default;