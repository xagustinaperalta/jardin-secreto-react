import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faAward, faUser } from '@fortawesome/free-solid-svg-icons';

function SmallCard(props) {
  const getIcon = () => {
    switch (props.icon) {
      case 'fa-film':
        return faFilm;
      case 'fa-award':
        return faAward;
      case 'fa-user':
        return faUser;
      default:
        return faFilm; // Cambia esto según tus necesidades
    }
  };

  return (
    <div className="col-md-4 mb-4">
      <div className={`card border-left-${props.color} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}>{props.title}</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">{props.quantity}</div>
            </div>
            <div className="col-auto">
              <FontAwesomeIcon icon={getIcon()} className={`fa-2x text-gray-300`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SmallCard.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'success', 'warning']).isRequired,
  quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  icon: PropTypes.oneOf(['fa-film', 'fa-award', 'fa-user']).isRequired,
};

SmallCard.defaultProps = {
  title: '',
  color: 'success',
  quantity: 0,
  icon: 'fa-film',
};

export default SmallCard;
