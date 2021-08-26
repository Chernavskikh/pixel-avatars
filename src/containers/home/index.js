import React from 'react'
import { connect } from 'react-redux'
import { getAvatar, saveAvatar, deleteAvatar } from '../../actions/avatars'
import Favorites from '../../components/favorites'
import Search from '../../components/search'

const Home = props => (
        <div className="wrapper">
            <Search query={props.query} saveAvatar={props.saveAvatar} getAvatars={props.getAvatars} />
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
