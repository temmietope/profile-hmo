import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router"

const ProviderCard = ({
  imageUrl = 'https://via.placeholder.com/400x200',
  name,
  address,
  rating,
  providerType,
  cardType,
  id,
  history,
}) => (
    <div className={`card provider-card ${cardType} `} onClick={() => {
      history.push({
      pathname:`/providers/${id}`, 
      state:{
        name,
        address,
        rating,
        providerType,
        cardType,
        id,
      }})
    }}>
      {/* <div className="btn btn-sm like">
      <i className="fa fa-favorite" />
    </div> */}
      <img src={imageUrl} alt="Provider" />
      <div className="card-details">
        <h3 className="card__title">{name}</h3>
        <p className="card__sub-title">{address}</p>
        <div className={`provider-card__lower ${cardType}`}>
          <p className="card__body-text provider-type">{providerType}</p>
          <p className="card__body-text provider-rating">
            {rating}
            /5
        </p>
        </div>
      </div>
    </div>
  );

ProviderCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  providerType: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired
};

export default withRouter(ProviderCard);
