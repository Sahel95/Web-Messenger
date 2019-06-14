import React from 'react'
import addprofilepic from './addprofilepic.svg'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import validate from '../Validation/validateFunction'
import axios from 'axios'
import { withRouter } from 'react-router'

class Completepro extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      number: '',
      bio: '',
      address: '',
      image: '',
      token: window.localStorage.getItem('token'),
      error: {
        name: null,
        number: null,
        bio: null,
        address:null
      }
    }
  }

  handlechange (e) {
    var name = e.target.name
    this.setState({ [name]: e.target.value },
     /* () => console.log('callback:', this.state)  vaghti kar ha kamel anjam shod callback func ejra mishe    
        console.log('state::::',this.state)
     */
    )
  }

  handleClick () {
    var nameError = validate('name', this.state.name)
    var numberError = validate('number', this.state.number)
    var bioError = validate('bio', this.state.bio)
    var addressError = validate('address', this.state.address)
    this.setState({ ...this.state, error: { ...this.state.error, 
        name: nameError,
        number: numberError,
        bio: bioError,
        address: addressError,
    
    } }
    )
    
    if ( nameError || numberError){
      this.setState({error: 'something went wrong'})
    }else {
    let fdata = new FormData()
        fdata.append('token', this.state.token)
        fdata.append('description', this.state.bio)
        fdata.append('name',this.state.name )
        fdata.append('mobile_number',this.state.number )
        fdata.append('address',this.state.address )
        fdata.append('avatar', this.state.image)
        axios.post('https://api.paywith.click/auth/profile/', fdata)
            .then((response) => {
            console.log('response:::', response)
            this.props.history.push('./Messenger')
              })
            .catch(function (error) {
                    console.log('error::::', error)
                })
              }
  }

  handleChangeImage = (image) => {
    var reader = new FileReader()
    var file = image.target.files[0]
    reader.onload = (upload) => {
        this.setState({
            image: upload.target.result.replace(/^data:image\/[a-z]+;base64,/,'')},
            console.log('situuu:::', this.state.image),3000
        // ,
        // () => {let fdata = new FormData()
        // fdata.append('avatar', this.state.image)
        // axios.post('https://api.paywith.click/auth/profile/', fdata)
        //   .then((response) => {
        //     console.log('response:::', response)
        //   })
        //   .catch((error) => {
        //     console.log('error::::', error)
        //   })},
        //   1000
        )
    }
    reader.readAsDataURL(file)
}



  render () {
    return (
      <div className='App'>
        <div className='container' >
          <div className='profilePic'>
              <img src={addprofilepic} onClick={ () => this.fileInput.click() } />
              <input ref="file" type="file" name="file" 
                              className="upload-file" 
                              id="file"
                              ref = { fileInput => this.fileInput = fileInput }
                              onChange={this.handleChangeImage}
                              style={{display: 'none'}}
                              encType="multipart/form-data" 
                              required/>
          </div>

          <div className='forms'>
            <input name='name'
              placeholder='Name'
              onChange={(e) => this.handlechange(e)} />
            { this.state.error.name !== null &&
            <p className='error'>{this.state.error.name}</p>
                }
            <input name='number'
              placeholder='Phone number'
              onChange={(e) => this.handlechange(e)} />
            { this.state.error.number !== null &&
            <p className='error'>{this.state.error.number}</p>
                }
            <input placeholder='Bio'
              name='bio'
              onChange={(e) => this.handlechange(e)} />
            { this.state.error.bio !== null &&
            <p className='error'>{this.state.error.bio}</p>
                }
            <input placeholder='Address'
              name='address'
              onChange={(e) => this.handlechange(e)} />
            { this.state.error.address !== null &&
            <p className='error'>{this.state.error.address}</p>
                }
            <button onClick={() => this.handleClick()}>
              LET'S START
            </button>

          </div>
        </div>

        

      </div>
    )
  }
}

export default withRouter(Completepro)
