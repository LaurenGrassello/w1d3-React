import React, {useState} from 'react'

const Tabs = (props) => {
    const [displayContent, setDisplayContent] = useState(false)
    const onClick = () => setDisplayContent(true)

    let content
    if (displayContent){
        content = <div className='tabContent'>display content from tab 1</div>
    }

    const [displayContentTwo, setDisplayContentTwo] = useState(false)
    const onClickTwo = () => setDisplayContentTwo(true)

    let contentTwo
    if (displayContentTwo){
        content = <div className='tabContent'>display content from tab 2</div>
    }

    const [displayContentThree, setDisplayContentThree] = useState(false)
    const onClickThree = () => setDisplayContentThree(true)

    let contentThree
    if (displayContentThree){
        content = <div className='tabContent'>display content from tab 3</div>
    }
    return (
        <div>
        <button onClick={onClick}>Tab 1</button>
        <button onClick={onClickTwo}>Tab 2</button>
        <button onClick={onClickThree}>Tab 3</button>
        <div >{content}</div>
        <div >{contentTwo}</div>
        <div >{contentThree}</div>
    
        </div>
    )
}



export default Tabs