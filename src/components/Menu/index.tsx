import { FunctionComponent, useState } from "react";

import { IconButton, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

interface MenuProps {

}

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
            <MenuItem>Categorias</MenuItem>
        </Menu>
    </>);
}

export default Default;