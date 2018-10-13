import React from 'react'
import { connect } from 'react-redux'
import { getAvatar, saveAvatar, deleteAvatar } from '../../actions/avatars'
import Favorites from '../../components/favorites'

const Home = props => (
  <div className="wrapper">
    <h1>Enter your own seed!</h1>
      <small>(Don't use sensitive or personal data as seed!)</small>
      <div className="avatar-container">
          <div className="item">
              <img src={`https://avatars.dicebear.com/v2/male/${props.query}.svg"`} alt=""/>
              <button className="btn" onClick={() => props.saveAvatar(props.query, 'male')} type="button">Add to favorites</button>
          </div>

          <div className="item">
              <img src={`https://avatars.dicebear.com/v2/female/${props.query}.svg"`} alt=""/>
              <button className="btn" type="button" onClick={() => props.saveAvatar(props.query, 'female')}>Add to favorites</button>
          </div>

          <div className="item">
              <img src={`https://avatars.dicebear.com/v2/identicon/${props.query}.svg"`} alt=""/>
              <button className="btn" type="button" onClick={() => props.saveAvatar(props.query, 'identicon')}>Add to favorites</button>
          </div>
      </div>

      <input type="text" onChange={(event) => props.getAvatars(event.target.value)} />

      { props.favoritesArr.length > 0 && <Favorites avatars={props.favoritesArr} deleteAvatar={props.deleteAvatar} />}
  </div>
)

const mapStateToProps = state => {
    return {
        query: state.avatars.avatarQuery,
        favoritesArr: state.avatars.favoritesArr,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAvatars: query => {
            dispatch(getAvatar(query));
        },

        saveAvatar: (query, type) => {
            dispatch(saveAvatar(query, type));
        },

        deleteAvatar: (id) => {
            dispatch(deleteAvatar(id));
        }
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
