import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PriceTile from './PriceTile';
import * as actions from './PriceTileList/redux';

const { func, string, number } = PropTypes;

class ConnectedPriceTile extends React.Component {

  componentDidMount() {
    const { subscribePrices, ccyCpl } = this.props;
    subscribePrices(ccyCpl, this);
  }

  componentWillUnmount() {
    const { unsubscribePrices } = this.props;
    unsubscribePrices(this);
  }

  render() {
    return (
      <PriceTile
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  price: state.tiles.prices[ownProps.ccyCpl],
  ...state.tiles.tiles[ownProps.tileId]
});

export default connect(mapStateToProps, actions)(ConnectedPriceTile);

ConnectedPriceTile.propTypes = {
  tileId: number.isRequired,
  ccyCpl: string.isRequired,
  subscribePrices: func.isRequired,
  unsubscribePrices: func.isRequired
};