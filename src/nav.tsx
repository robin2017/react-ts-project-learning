import React from 'react';
import routes from './router/config'
export default () => {
    return (
        <ul>
            {
                routes.map(item => {
                    return item.label ? <li key={item.path}>
                        <a href={item.path}>{item.label}</a>
                    </li> : null
                })
            }
        </ul>
    )
}


