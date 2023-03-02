import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as Styled from './styled';
import Link from '@mui/material/Link';
import { LIGHT_GREEN } from '../../colorPalette';
interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export const MyAppBar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h1" sx={{ fontFamily: 'SpoqaHanSans', my: 2 }}>
        FE개발자 박현우
      </Typography>
      <Divider />
      <List>
        <Styled.MyLink
          color={LIGHT_GREEN}
          href="https://github.com/dailybetter"
          target="_blank"
          sx={{
            '&:hover': {
              color: `${LIGHT_GREEN}`,
            },
          }}
        >
          GitHub
        </Styled.MyLink>
      </List>
      <Styled.MyLink
        color={LIGHT_GREEN}
        href="https://dailybetter.github.io/"
        target="_blank"
        sx={{
          '&:hover': {
            color: `${LIGHT_GREEN}`,
          },
        }}
      >
        Blog
      </Styled.MyLink>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ zIndex: 'tooltip', backgroundColor: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: 'SpoqaHanSans',
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            FE개발자 박현우
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Styled.MyLink
              color="#FFFFFF"
              href="https://github.com/dailybetter"
              target="_blank"
              sx={{
                '&:hover': {
                  color: `${LIGHT_GREEN}`,
                },
              }}
            >
              GitHub
            </Styled.MyLink>
            <Styled.MyLink
              color="#FFFFFF"
              href="https://dailybetter.github.io/"
              target="_blank"
              sx={{
                '&:hover': {
                  color: `${LIGHT_GREEN}`,
                },
              }}
            >
              Blog
            </Styled.MyLink>
          </Box>
        </Toolbar>
      </AppBar>
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};
