import React, {Component} from 'react'
import PropTypes from 'prop-types'



    //console.log('Props', this.props)



  class ListContacts extends Component{

    static propTypes = {
      contacts: PropTypes.array.isRequired,
      onDeleteContact: PropTypes.func.isRequired
      }
      state = {
        query:''
      }

    updateQuery = (query) => {
      this.setState({query: query.trim() })
    }
      render(){
      return(
        <div className='list-contacts'>
        {JSON.stringify(this.state)}
          <div className='list-contacts-top'>
            <input
             className='search-contacts'
             type='text'
             placeholder='search contacts'
             value={this.state.query}
             onChange={(event) => this.updateQuery(event.target.value)}

            />


          </div>
          <ol className='contact-list'>
            {this.props.contacts.map((contact) =>(
              <li key={contact.id} className = 'contact-list-item'>
                <div className='contact-avatar' style= {{
                  backgroundImage: `url(${contact.avatarURL})`
                }}/>
                <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
                </div>
                <button onClick={() => this.props.onDeleteContact(contact)} className='contact-remove'>
                remove
                </button>
              </li>

            )) }
          </ol>
          </div>

      )

  }
}




export default ListContacts
