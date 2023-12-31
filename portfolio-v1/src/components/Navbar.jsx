import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const pages = ['about', 'projects','contact','Resume'];

function DrawerAppBar(props) {
    
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
};

const drawer = (

    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    <Typography variant="h6" sx={{ my: 2 }}>
        <Link className="nav-link" to={'/'}>
            TIMMY'S WORLD 
        </Link>
    </Typography>
    <Divider />
    <List
    sx={{ 
        display: 'flex',
        flexDirection: 'column'
        }}>
        {pages.map((page) => (
            <ListItem
            key={page} 
            disablePadding
            >
                <ListItemButton 
                sx={{ 
                    textAlign: 'center'
                }}>
                <Link className='nav-link' to={`/${page}`}>
                <ListItemText primary={page}/></Link>
                </ListItemButton>
            </ListItem>
        ))}
        </List>
    </Box>
    );
// END DRAWER(MOBILE VIEW)

const container = window !== undefined ? () => window().document.body : undefined;


return (
    <Box sx={{ display: 'flex' }}>
    <AppBar color="transparent" component="nav" sx={{ background: "#264248", backdropFilter:"blur(20px)" }} elevation={0}>
        <Toolbar> {/* Tool bar give AppBar its spacing  */}
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
        >
            <MenuIcon sx={{color: 'black'}} /> {/* hamburger icon */}
            </IconButton>
            <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: 'black', fontWeight: 'bold',  display: { xs: 'none', sm: 'block' } }}
        >
            <Link className="nav-link" to={'/'}
            >
            TIMMY'S WORLD
            </Link>
        </Typography>
        {/* handles the collapse of the navItems */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {pages.map((page) => (
            <Button 
            key={page} 
            // onClick={() => navigate(item.route)}
            sx={{ color: 'black' }}>
            <Link className="nav-link" to={`/${page}`}>
            {page}
            </Link>
            {/* {item} */}
            </Button>
            ))}
        </Box> {/* END: handles the collapse of the navItems */}
        </Toolbar>
    </AppBar>

    {/*MOBILE VIEW */}
        <Box component="nav">
        <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
            keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
            display:{ xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        >
        {drawer}
        </Drawer>
    </Box>
    </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
    window: PropTypes.func,
};

export default DrawerAppBar;
















