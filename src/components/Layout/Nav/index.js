import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import Logo from './Logo';
import styles from './styles.module.scss';

const debug = require('debug')('sap:Nav');

const cx = classnames.bind(styles);

export default function Nav({ menuClick, menuExpanded, location, menuItems }) {
  debug('render()');

  return (
    <nav className={styles.main}>
      <div className={styles.topBar}>
        <div className={styles.helpAndLogin}>
          <div className={styles.help}>
            Help <i className="glyphicon glyphicon-question-sign" />
          </div>
          <div className={styles.operatorName}>H E Pennypacker <i className="glyphicon glyphicon-menu-down" /></div>
        </div>
      </div>

      <div className={styles.logoWrapper}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <div className={styles.navContainer}>
          <div className={styles.icons}>
            <div className={styles.iconContainer}>
              <div className={cx('magnifying', 'icon')} />
            </div>

            <div className={styles.iconContainer}>
              <div className={cx('bell', 'icon')} />
            </div>

            <div className={cx({ iconContainer: true, iconContainerExpanded: menuExpanded })} onClick={() => menuClick()}>
              <div className={cx('calendar', 'icon', { expanded: menuExpanded })} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  menuClick: PropTypes.func,
  menuExpanded: PropTypes.bool,
  location: PropTypes.object,
  menuItems: PropTypes.array
};
