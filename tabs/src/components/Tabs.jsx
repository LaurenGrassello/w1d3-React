import React from 'react'

const Tabs = (props) => {
    const [tab, setTab] = useState(false)

    

    return (
        <div>
        <button>Tab 1</button>

        <button>Tab 2</button>

        <button>Tab 3</button>
        </div>
    )
}



export default Tabs