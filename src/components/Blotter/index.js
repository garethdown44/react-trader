import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import numeral from 'numeral';
import classnames from 'classnames/bind';
import styles from './styles.module.css';

const cx = classnames.bind(styles);

function renderRows(rows) {
  return rows.map((row, index) => (
    <tr key={index}>
      <td>{moment(row.date).format('HH:MM:SS')}</td>
      <td className={cx({ direction: true, [row.direction]: true })}>{row.direction}</td>
      <td>{row.ccyCpl}</td>
      <td>{numeral(row.notional).format('0,0')}</td>
      <td>{row.rate}</td>
      <td>{row.status}</td>
    </tr>
  ));
}

class Blotter extends React.Component {
  componentDidMount() {
    this.props.subscribePositions();
  }

  render() {
    const { trades } = this.props;

    return (
      <div className={styles.blotterMain}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Direction</th>
              <th>CCY</th>
              <th>Notional</th>
              <th>Rate</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {renderRows(trades)}
          </tbody>
        </table>
      </div>
    );
  }
}

Blotter.propTypes = {
  trades: PropTypes.array,
  subscribePositions: PropTypes.func
};

export default Blotter;