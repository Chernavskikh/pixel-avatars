import React from 'react'
import { API_URL } from '../constants/api'

const search = props => {
    return (
        <React.Fragment>
            <h1>Enter your own seed!</h1>
            <small>(Don't use sensitive or personal data as seed!)</small>
            <div className="avatar-container">
                <div className="item">
                    <img src={`${API_URL}/male/${props.query}.svg`} alt=""/>
                    <button className="btn" onClick={() => props.saveAvatar(props.query, 'male')} type="button">Add to favorites</button>
                </div>

                <div className="item">
                    <img src={`${API_URL}/female/${props.query}.svg`} alt=""/>
                    <button className="btn" type="button" onClick={() => props.saveAvatar(props.query, 'female')}>Add to favorites</button>
                </div>

                 <div className="item">
                    <img src={`${API_URL}/identicon/${props.query}.svg`} alt=""/>
                    <button className="btn" type="button" onClick={() => props.saveAvatar(props.query, 'identicon')}>Add to favorites</button>
                </div>
            </div>

            <input type="text" onChange={(event) => props.getAvatars(event.target.value)} />
        </React.Fragment>
    )
}

export default search
