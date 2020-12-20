import React, {useState} from 'react';
import Window from './Window'

const Item = ({ item, moveItem, setDragElement }) => {
    
    const [showModal, setShowModal] = useState(false);

    const onModalClose = () => setShowModal(false);
    const onModalOpen = () => setShowModal(true);
    

    const onDragStart = ({ dataTransfer, target }) => {
        
        dataTransfer.setData('item', JSON.stringify(item));
        
        setDragElement(item);

        setTimeout(() => {
            target.style.visibility = 'hidden';
        }, 1)

    };

    const onDragOver = e => {
        moveItem(e.target.innerText)
        e.preventDefault();
    }

    const onDragEnd = e => e.target.style.visibility = 'visible';



    return (
        <>
            <div
                className={`item`}
                onClick={onModalOpen}
                draggable="true"
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDragEnd={onDragEnd}
            >
                <p>{item.content}</p>
                <div className={`item-icons`}>
                    <i className={item.issueType}/>        
                    <i className={item.priority}/>
                    <span className={'est-tag'}>{item.estimate}</span>
                </div>
            </div>
            <Window
                item={item}
                onClose={onModalClose}
                show={showModal}
            />
        </>
    )
}

export default Item;