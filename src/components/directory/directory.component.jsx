import React from 'react';

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

class Directory extends React.Component {
  constructor() {
    super();


    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80',
          id: 1
        },
        {
          title: 'jackets',
          imageUrl: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=343&q=80',
          id: 3
        },
        {
          title: 'womens',
          imageUrl: 'https://images.unsplash.com/photo-1498746607408-1e56960e3bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          size: 'large',
          id: 4
        },
        {
          title: 'mens',
          imageUrl: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          size: 'large',
          id: 5
        },
      ]
     }
    }

    render() {
      return (
        <div className="directory-menu">  
           {
             this.state.sections.map(({title, imageUrl, id, size}) => (
               <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} /> 
             ))
           }
        </div>
      );
    }
  }

export default Directory;