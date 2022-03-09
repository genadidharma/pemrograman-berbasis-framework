import React, { Component } from "react";
import Post from "../Post";
import './BlogPost.css'

class BlogPost extends Component {

    state = {
        listArtikel: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    listArtikel: result
                })
            })
    }

    render() {
        return (
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body}/>
                    })
                }
            </div>
        )
    }
}

export default BlogPost;