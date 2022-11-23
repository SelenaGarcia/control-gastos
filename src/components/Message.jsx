import React, { Component } from 'react'

const Message = ({ children, type }) => {
    return (
        <div className={`alerta ${tipo}`}>
            {children}
        </div>
    )
}
export default Message