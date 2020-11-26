import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import './Header.css';
import { IAppProps } from '../App';
import DrawerMenu from './components/DrawerMenu';
import TranslationMenu from './components/TranslationMenu';

export interface IHeaderProps extends IAppProps {
  title: string;
}

class Header extends React.Component<IHeaderProps> {
  render() {
    return (
      <AppBar position="static" className="Header">
        <Toolbar>
          <DrawerMenu />
          <Typography className="Header-title" variant="h6">
            { this.props.title }
          </Typography>
          <TranslationMenu { ...this.props } />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;