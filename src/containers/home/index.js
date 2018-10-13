import React from 'react'
import { connect } from 'react-redux'
import { getAvatar } from '../../actions/avatars'

const Home = props => (
  <div className="wrapper">
    <h1>Enter your own seed!</h1>
      <div className="avatar-container">
          <img style={{width: 150}} src={`https://avatars.dicebear.com/v2/male/${props.query}.svg"`} alt=""/>
          <img style={{width: 150}} src={`https://avatars.dicebear.com/v2/female/${props.query}.svg"`} alt=""/>
          <img style={{width: 150}} src={`https://avatars.dicebear.com/v2/identicon/${props.query}.svg"`} alt=""/>
      </div>

      <input type="text" onChange={(event) => props.getAvatars(event.target.value)} />
  </div>
)

const mapStateToProps = state => {
    return {
        query: state.avatars.avatarQuery,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAvatars: query => {
            dispatch(getAvatar(query));
        }
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
