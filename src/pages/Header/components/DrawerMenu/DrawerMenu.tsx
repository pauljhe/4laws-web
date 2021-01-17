import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import './DrawerMenu.css';
import { FourLawsPaths } from '../../../paths';

interface MenuList {
  key: string;
  label: JSX.Element | string;
  to: string;
}

const menuLabels: JSX.Element[] = [
  <FormattedMessage
    id="drawerMenu.law1"
    defaultMessage="Law 1"
  />,
  <FormattedMessage
    id="drawerMenu.law2"
    defaultMessage="Law 2"
  />,
  <FormattedMessage
    id="drawerMenu.law3"
    defaultMessage="Law 3"
  />,
  <FormattedMessage
    id="drawerMenu.law4"
    defaultMessage="Law 4"
  />,
  <FormattedMessage
    id="drawerMenu.prayer"
    defaultMessage="Prayer"
  />,
  <FormattedMessage
    id="drawerMenu.confirm"
    defaultMessage="How to Know That Christ Is in Your Life"
  />,
  <FormattedMessage
    id="drawerMenu.feelings"
    defaultMessage="DO NOT DEPEND ON FEELINGS"
  />,
  <FormattedMessage
    id="drawerMenu.grace"
    defaultMessage="NOW THAT YOU HAVE RECEIVED CHRIST"
  />,
  <FormattedMessage
    id="drawerMenu.suggest"
    defaultMessage="SUGGESTIONS FOR CHRISTIAN GROWTH"
  />,
  <FormattedMessage
    id="drawerMenu.wrapup"
    defaultMessage="FELLOWSHIP IN A GOOD CHURCH"
  />
];

const menuLists: MenuList[] = [
  { key: "law1", label: menuLabels[0], to: FourLawsPaths.LAW_ONE },
  { key: "law2", label: menuLabels[1], to: FourLawsPaths.LAW_TWO },
  { key: "law3", label: menuLabels[2], to: FourLawsPaths.LAW_THREE },
  { key: "law4", label: menuLabels[3], to: FourLawsPaths.LAW_FOUR },
  { key: "prayer", label: menuLabels[4], to: FourLawsPaths.PRAYER },
  { key: "confirm", label: menuLabels[5], to: FourLawsPaths.CONFIRM },
  { key: "feelings", label: menuLabels[6], to: FourLawsPaths.FEELINGS },
  { key: "grace", label: menuLabels[7], to: FourLawsPaths.GRACE },
  { key: "suggest", label: menuLabels[8], to: FourLawsPaths.SUGGEST },
  { key: "wrapup", label: menuLabels[9], to: FourLawsPaths.WRAPUP },
];

const DrawerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const intl = useIntl();

  const toggleDrawer = (openState: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
      (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpen(openState);
  };

  return (
    <React.Fragment>
      <IconButton 
        className="DrawerMenu-IconButton"
        edge="start" 
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer 
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <div role="presentation">
          <List className="DrawerMenu-List">
            <ListSubheader disableSticky={true}>
              <Link 
                to={`/${intl.locale}${FourLawsPaths.MAIN}`}
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <FormattedMessage 
                  id="drawerMenu.subheader"
                  defaultMessage="Four Spritual Laws"
                />
              </Link>
            </ListSubheader>
            {
              menuLists.map((list, i) => (
                <ListItem button 
                  key={list.key} 
                  component={Link} 
                  to={`/${intl.locale}${list.to}`}
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <ListItemText>
                    { list.label }
                  </ListItemText>
                </ListItem>
              ))
            }
          </List>
        </div>
        <div className="copyright">&copy; Content Owned by KCCC</div>
      </Drawer>
    </React.Fragment>
  );
};

export default DrawerMenu;