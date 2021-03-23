import React, { Component } from 'react'
import axios from 'axios'
import './PostModale.css'

class PostModale extends Component {

    componentDidUpdate() {
        // console.log('UPDATED')
        if (this.props.id) {
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(reponse =>{
                console.log(reponse)
            })
        }
    }

    render() {

        return (
            this.props.id ?
                <div className="PostComplet">
                    <h1>Titre</h1>
                    <p>Contenu</p>

                    <button className="btn btn-danger my-3 btnPost">Fermer</button>

                </div>
                : null
        )


    }
}

export default PostModale;
