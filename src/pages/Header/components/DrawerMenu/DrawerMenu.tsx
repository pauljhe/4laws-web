import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import './DrawerMenu.css';

export interface IDrawerMenuState {
  open: boolean;
}

const exampleLists: any[] = [
  1,2,3,4
];

class DrawerMenu extends React.Component<{}, IDrawerMenuState> {
  
  constructor(props: {}) {
    super(props);
    this.state = { open: false };
  }

  toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
      (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    this.setState((state) => ({ ...state, open: open }));
  };
  
  render() {
    return (
      <React.Fragment>
        <IconButton 
          className="DrawerMenu-IconButton"
          edge="start" 
          aria-label="menu"
          onClick={this.toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer 
          anchor="right"
          open={this.state.open}
          onClose={this.toggleDrawer(false)}
        >
          <div
            role="presentation"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <List>
              <ListSubheader>
                <FormattedMessage 
                  id="drawerMenu.subheader"
                  defaultMessage="Four Spritual Laws"
                  description="Drawer Menu Subheader"
                />
              </ListSubheader>
              {
                exampleLists.map(list => (
                  <ListItem button key={list} component={Link} to="/">
                    <ListItemText>
                      <FormattedMessage
                        id="drawerMenu.laws"
                        defaultMessage="Law {n}"
                        description="Drawer Menu Link"
                        values={{ n: list }}
                      />
                    </ListItemText>
                  </ListItem>
                ))
              }
              
            </List>
          </div>
        </Drawer>
      </React.Fragment>
    );
  }
}

export default DrawerMenu;