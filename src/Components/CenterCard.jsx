import React from 'react'

function CenterCard({ children }) {
    return (
        <div className="flex gap-4 content-center justify-center ">
            {children}
        </div>
    )
}

export default CenterCard