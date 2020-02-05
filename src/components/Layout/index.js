import React from 'react';
import PropTypes from 'prop-types';
import 'sanitize.css/sanitize.css';
import Nav from './Nav';
import Menu from './Menu';
import menuItems from './menuItems';
import styles from './styles.module.css';

export default class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = { menuExpanded: false };
    this.menuClick = this.menuClick.bind(this);
  }

  menuClick() {
    this.setState({ ...this.state, menuExpanded: !this.state.menuExpanded, });
  }

  render() {
    return (
      <div className={styles.main}>
        <Nav
          menuClick={this.menuClick}
          menuExpanded={this.state.menuExpanded}
          location={this.props.location}
          menuItems={menuItems}
        />
        <div className={styles.pageContainer}>
          {/* <Menu /> */}
          <div className={styles.content}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object
};