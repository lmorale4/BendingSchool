import React from 'react';
import { connect } from 'react-redux';
import CampusCard from './CampusCard';

const CampusList = props => {
  const { campuses } = props;
  return (
    <div className="row">
      <h2>All Campuses</h2>
      <div className="row">
        {campuses.map(campus => (
          <CampusCard key={campus.id} campus={campus} />
        ))}
      </div>
    </div>
  );
};

const mapState = state => ({
  campuses: state.campuses,
});

export default connect(mapState)(CampusList);
