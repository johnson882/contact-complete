import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import serializeForm from 'form-serialize'

import ImageInput from './ImageInput.js'
class CreateContact extends Component{
  handleSubmit = (e) => {
  e.preventDefault()
  const values = serializeForm(e.target, {hash: true})
  console.log(values)
  if(this.props.onCreateContact)
  this.props.onCreateContact(values)
  }

  render(){
    return(
      <div>
      <Link className="close-create-contact" to="" >close </Link>
      <form onSubmit={this.handleSubmit} className="create-contact-form">
      <ImageInput className="create-contact-avatar-input"
      name="cavatar-input" maxHeight={64}
       />
       <div className="create-contact-details">
       <input type="text" name="name" placeholder="Name"/>
       <input type="text" name="email" placeholder="email"/>

       <button> add Conatcts </button>
       </div>
      </form>
      </div>
    )
  }

}

export default CreateContact
