import React from 'react';

import './ItemStatusFilter.css';

const ItemStatusFilter =() => {
        return(
            <div className = 'Btn-group ItemStatusFilter'>
                <button className = 'btn btn-success'>All</button>
                <button className = 'btn btn-outline-secondary'>Active</button>
                <button className = 'btn btn-outline-secondary'>Done</button>
            </div>
        )
}

export default ItemStatusFilter;