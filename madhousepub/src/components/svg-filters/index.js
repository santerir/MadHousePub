import React, { Component } from 'react'


export default ({ }) => (
    <svg style={{ display: "none" }}>
        <filter id="inset-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feComponentTransfer in="SourceAlpha">
                <feFuncA type="table" tableValues="1 0" />
            </feComponentTransfer>
            <feGaussianBlur stdDeviation="3" />
            <feOffset dx="5" dy="5" result="offsetblur" />
            <feFlood flood-color="rgb(20, 0, 0)" result="color" />
            <feComposite in2="offsetblur" operator="in" />
            <feComposite in2="SourceAlpha" operator="in" />
            <feMerge>
                <feMergeNode in="SourceGraphic" />
                <feMergeNode />
            </feMerge>
        </filter>
    </svg>
)
