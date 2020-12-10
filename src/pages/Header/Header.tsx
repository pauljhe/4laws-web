import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import './Header.css';
import DrawerMenu from './components/DrawerMenu';
import TranslationMenu from './components/TranslationMenu';
import { Language } from '../../interfaces/language.interfaces';
import Logo from '../../icons/Logo';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';

export interface IHeaderProps {
  locale: Language;
  changeLanguage: (language: Language) => void;
}

const Header: React.FC<IHeaderProps> = (props) => {
  const intl = useIntl();
  return (
    <AppBar position="fixed" className="Header">
      <Toolbar>
        <Link to={`/${intl.locale}`}>
          <Logo className="Header-Logo" />
        </Link>
        <div className="spacing"></div>
        <TranslationMenu { ...props } />
        <DrawerMenu />
      </Toolbar>
    </AppBar>
  );
}

export default Header;