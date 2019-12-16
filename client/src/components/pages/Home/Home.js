import React from 'react';
import { Input, FormBtn } from "../../InputForm";
import API from "../../../utils/API";
import pixabay from '../../../utils/Pixabay';
import './style.css';

class Home extends React.Component {
    state = {
        name: '',
        itemOne: '',
        itemTwo: '',
        itemThree: '',
        images: [] 
    }

    searchPix = () => {
        const newArr = []
        const key = '14596935-3acbb254867513fb2cd5badc6'
        pixabay
            .get('/', {
               params: { q: this.state.itemOne, key: key,  image_type: 'photo' } 
            })
            .then(res => {
                console.log(res)
                newArr.push(res.data.hits[0].largeImageURL)
            })
        pixabay
            .get('/', {
                params: { q: this.state.itemTwo, key: key, image_type: 'photo' }
            })
            .then(res => {
                console.log(res)
                newArr.push(res.data.hits[0].largeImageURL)
            })
        pixabay
            .get('/', {
                params: { q: this.state.itemThree, key: key, image_type: 'photo' }
            })
            .then(res => {
                console.log(res)
                newArr.push(res.data.hits[0].largeImageURL)
                console.log(this.state.images)
            })
        console.log(newArr)
        return newArr
    }

    //push images to array one by one three requests, make variables for all photos retrieved//

    handleFormSubmit = (event, arr) => {
        event.preventDefault()

        const data = {
            name: this.state.name,
            itemOne: this.state.itemOne,
            itemTwo: this.state.itemTwo,
            itemThree: this.state.itemThree,
            images: arr
        }

        API.saveList(data)
        .then(res => {
            console.log(res)
            this.setState({
                name: '',
                itemOne: '',
                itemTwo: '',
                itemThree: '',
            })
        })
    }

    render() {
        const search = this.searchPix()
        return (
            <div class='container'>
                <div class='row'>
                    <div class='col-3'>
                    </div>
                    <div class='col-6'>
                        <form class='form' style={{marginTop: 150}}>
                            <h3 class='text-center'>Christmas List Generator</h3>
                            <Input
                                name='name'
                                onChange={(e) => this.setState({ name: e.target.value })}
                                value={this.state.name}
                                label='Full Name'
                                placeholder='Enter Full Name'
                            />
                            <Input
                                name='itemone'
                                label='First Item'
                                onChange={(e) => this.setState({ itemOne: e.target.value })}
                                value={this.state.itemOne}
                                placeholder='Enter First Item you want for christmas'
                            />
                            <Input
                                name='itemtwo'
                                label='Second Item'
                                onChange={(e) => this.setState({ itemTwo: e.target.value })}
                                value={this.state.itemTwo}
                                placeholder='Enter Second Item you want for christmas'
                            />
                            <Input
                                name='itemthree'
                                label='Third Item'
                                onChange={(e) => this.setState({ itemThree: e.target.value })}
                                value={this.state.itemThree}
                                placeholder='Enter Third Item you want for christmas'
                            />
                            <FormBtn
                                onClick={(event) => this.handleFormSubmit(event, search)}
                            >
                                Submit List
                            </FormBtn>
                            
                        </form> 
                    </div>
                    <div class='col-3'>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;