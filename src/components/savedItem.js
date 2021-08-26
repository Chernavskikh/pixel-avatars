import React from 'react'
import { API_URL } from '../constants/api'

const savedItem = ({ item, deleteAvatar }) => {
    return (
        <div className="favorite-item">
            <button className="btn-delete" onClick={() => deleteAvatar(item.id)}>X</button>
            <img src={`${API_URL}/${item.type}/${item.query}.svg`} alt="avatar"/>
        </div>
    )
}

export default savedItem
