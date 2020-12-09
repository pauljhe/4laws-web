import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import './Header.css';
import DrawerMenu from './components/DrawerMenu';
import TranslationMenu from './components/TranslationMenu';
import { Language } from '../../interfaces/language.interfaces';

export interface IHeaderProps {
  locale: Language;
  changeLanguage: (language: Language) => void;
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