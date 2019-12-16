import React from 'react';
import './style.css';

const GiftList = props => {
    const Gifts = props.gifts.map(gift => {
        const linkOne = 'https://www.amazon.com/s?k=' + gift.itemOne + '&ref=nb_sb_noss_2'
        const linkTwo = 'https://www.amazon.com/s?k=' + gift.itemTwo + '&ref=nb_sb_noss_2'
        const linkThree = 'https://www.amazon.com/s?k=' + gift.itemThree + '&ref=nb_sb_noss_2'
        return (
            <div class='gifts'>
                <h1 style={{borderBottom: 'solid 2px black'}}>{gift.name}</h1>
                <div class='giftwrap'>
                    <div style={{fontSize: 20, position: 'absolute', left: 255, top: 188, backgroundColor: 'rgb(36, 100, 36)', opacity: 0.9, width: 150, height: 25 }}>
                        <a rel="noopener noreferrer" style={{color: 'rgb(218, 34, 34)', position: 'absolute', left: 42, bottom: -3, fontWeight: 'bold'}} target='_blank' href={linkOne}>Purchase></a>
                    </div>
                    <p class='gift'>{gift.itemOne}</p>
                    <img class='image' src={gift.images[0]} alt='empty'></img>
                </div>
                <div class='giftwrap'>
                    <div style={{fontSize: 20, position: 'absolute', left: 255, top: 350, backgroundColor: 'rgb(36, 100, 36)', opacity: 0.9, width: 150, height: 25 }}>
                        <a rel="noopener noreferrer" style={{color: 'rgb(218, 34, 34)', position: 'absolute', left: 42, bottom: -3, fontWeight: 'bold'}} target='_blank' href={linkTwo}>Purchase></a>
                    </div>
                    <p class='gift'>{gift.itemTwo}</p>
                    <img class='image' src={gift.images[1]} alt='empty'></img>
                </div>
                <div class='giftwrap'>
                    <div style={{fontSize: 20, position: 'absolute', left: 260, top: 510, backgroundColor: 'rgb(36, 100, 36)', opacity: 0.9, width: 150, height: 25, fontWeight: 'bold' }}>
                        <a rel="noopener noreferrer" target='blank' style={{fontSize: 20, color: 'rgb(218, 34, 34)', position: 'absolute', left: 42, bottom: -3}} href={linkThree}>Purchase></a> 
                    </div>
                    <p class='gift'>{gift.itemThree}</p>
                    <img class='image' src={gift.images[2]} alt='empty'></img>
                </div>
            </div>
        )
    })
    return Gifts
}

export default GiftList;