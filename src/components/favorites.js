import React from 'react'
import SavedItem from './savedItem'

const Favorites = (props) => {
    return (
        <React.Fragment>
            <h2>Favorites:</h2>
            <div className="favorites-container">
                { props.avatars.map(function (item, index) {
                    return (
                        <SavedItem deleteAvatar={props.deleteAvatar} key={item.id} item={item}/>
                    )
                })
                }
            </div>
        </React.Fragment>
    )
}

export default Favorites