import React from 'react'

export default function Loading() {
    return (
        <span data-test={"component_loading"} className="Loading_wrapper">
            <div className="spinner-border" role="status">
                <span data-test={"loading_text"} className="visually-hidden">
                    Loading...
                </span>
            </div>
        </span>
    )
}