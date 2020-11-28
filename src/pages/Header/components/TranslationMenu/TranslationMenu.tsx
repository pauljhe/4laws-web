import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/Language';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './TranslationMenu.css';
import { IAppProps } from '../../../App';
import { Language, LanguageList } from '../../../../interfaces/language.interfaces';

export interface ITranslationMenuProps extends IAppProps {}

export interface ITranslationMenuState {
  anchorEl: HTMLElement | null;
}

const locales: LanguageList[] = [
  { type: 'en', label: 'English' },
  { type: 'ko', label: '한국어' }
];

class TranslationMenu extends React.Component<ITranslationMenuProps, ITranslationMenuState> {
  constructor(props: ITranslationMenuProps) {
    super(props);
    this.state = { anchorEl: null };
  }

  changeLanguage = (language: Language) => {
    this.props.changeLanguage(language);
  };

  onMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    this.setState(state => ({ ...state, anchorEl: target }));
  };

  onMenuClose = () => {
    this.setState((state) => ({ ...state, anchorEl: null }));
  };

  render() {
    return (
      <React.Fragment>
        <IconButton
          className="TranslationMenu-IconButton"
          aria-label="i18n"
          aria-controls="i18n-menu"
          aria-haspopup="true"
          onClick={this.onMenuClick}
        >
          <LanguageIcon />
        </IconButton>
        <Menu
          id="i18n-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.onMenuClose}
          keepMounted
        >
          {
            locales.map(locale => (
              <MenuItem 
                key={locale.type} 
                selected={locale.type === this.props.locale}
                onClick={() => this.changeLanguage(locale.type)}
              >
                { locale.label }
              </MenuItem>
            ))
          }
        </Menu>
      </React.Fragment>
    );
  }
}

export default TranslationMenu;
