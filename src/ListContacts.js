import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'



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

    clearQuery = () => {
      this.setState({query: ''})
    }
      render(){
        const {contacts, onDeleteContact} = this.props
        const {query} = this.state
        let showingContacts
        if(query){
          const match = new RegExp(escapeRegExp(query), 'i')// a new instance of regular expression
          showingContacts = contacts.filter((contact) => match.test(contact.name))
          match.test('Tyler')
        } else {
          showingContacts = contacts
        }


        showingContacts.sort(sortBy('name'))
      return(
        <div className='list-contacts'>
        {JSON.stringify(query)}
          <div className='list-contacts-top'>
            <input
             className='search-contacts'
             type='text'
             placeholder='search contacts'
             value={query}
             onChange={(event) => this.updateQuery(event.target.value)}

            />
            <Link
            to ="/create" className="add-contact" >
            add contacts
            </Link>
            {showingContacts.length !== contacts.length && (
              <div className='showing-contacts'>
              <span> now showing {showingContacts.length} of {contacts.length} total</span>
              <button onClick={this.clearQuery}>Show All</button>
              </div>

            )}

          </div>
          <ol className='contact-list'>
            {showingContacts.map((contact) =>(
              <li key={contact.id} className = 'contact-list-item'>
                <div className='contact-avatar' style= {{
                  backgroundImage: `url(${contact.avatarURL})`
                }}/>
                <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
                </div>
                <button onClick={() => onDeleteContact(contact)} className='contact-remove'>
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
