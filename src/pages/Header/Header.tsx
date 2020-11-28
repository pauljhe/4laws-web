import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
      <AppBar position="fixed" className="Header">
        <Toolbar>
          <div className="logo-placeholder"></div>
          <div className="spacing"></div>
          <TranslationMenu { ...this.props } />
          <DrawerMenu />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;