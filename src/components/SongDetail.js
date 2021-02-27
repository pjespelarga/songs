import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) return <div>Select a song</div>;
  return (
    <div>
      <div>
        <h3>Details:</h3>
        <p>
          Title: {selectedSong.title}
          <br />
          Duration:{selectedSong.duration}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
