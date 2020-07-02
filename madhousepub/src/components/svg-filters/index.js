import React, { Component } from 'react'


export default ({ }) => (
    <svg style={{
        visibility: "hidden",
        height: "0",
        width: "0",
        margin: "0",
        position: "absolute",
        pointerEvents: "none",
    }}>
        <filter id="inset-shadow-gray" x="-50%" y="-50%" width="200%" height="200%">
            <feComponentTransfer in="SourceAlpha">
                <feFuncA type="table" tableValues="1 0" />
            </feComponentTransfer>
            <feGaussianBlur stdDeviation="6" />
            <feOffset dx="5" dy="5" result="offsetblur" />
            <feFlood flood-color="rgb(40, 40, 40)" result="color" />
            <feComposite in2="offsetblur" operator="in" />
            <feComposite in2="SourceAlpha" operator="in" />
            <feMerge>
                <feMergeNode in="SourceGraphic" />
                <feMergeNode />
            </feMerge>
        </filter>
    </svg>
)
