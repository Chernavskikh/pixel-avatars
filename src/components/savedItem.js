import React from 'react'

const savedItem = ({ item, deleteAvatar }) => {
    return (
        <div className="favorite-item">
            <button className="btn-delete" onClick={() => deleteAvatar(item.id)}>X</button>
            <img src={`https://avatars.dicebear.com/v2/${item.type}/${item.query}.svg"`} alt="avatar"/>
        </div>
    )
}

export default savedItem