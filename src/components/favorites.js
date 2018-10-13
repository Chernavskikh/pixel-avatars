import React from 'react'
import SavedItem from './savedItem'

const Favorites = (props) => {
    return (
        <div className="favorites-container">
            { props.avatars.map(function (item, index) {
                return (
                    <SavedItem deleteAvatar={props.deleteAvatar} key={item.id} item={item}/>
                )
            })
            }
        </div>
    )
}

export default Favorites