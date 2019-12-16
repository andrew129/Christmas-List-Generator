import React from 'react';
import GiftList from '../../GiftList';
import API from '../../../utils/API';
import Wrapper from '../../Wrapper/';
import './style.css';

class WishList extends React.Component {
    state = {
        gifts: [],
    }

    componentDidMount() {
        this.getGifts()
    }

    getGifts = () => {
        API.getLists()
            .then(res => {
                console.log(res)
                this.setState({ gifts: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            
            <div class='container content'>
                    <Wrapper>
                        <GiftList 
                            gifts={this.state.gifts}
                        /> 
                    </Wrapper>
            </div>
        )
    }
}

export default WishList;