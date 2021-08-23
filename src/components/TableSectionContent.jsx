import React from 'react'

// renders items in a section
function TableSectionContent({ sectionArray }) {
    return (
        <ul>
        {sectionArray.map((item) => {
            
            return (
                <>
                {item.url && (
                    <li>
                        <a href={item.url}>{item.name}</a>
                    </li>
                )}
                {!item.url && (
                    <li>
                        {item.name}
                    </li>
                )}
                </>
            )
        })}
        </ul>
    )
}

export default TableSectionContent
