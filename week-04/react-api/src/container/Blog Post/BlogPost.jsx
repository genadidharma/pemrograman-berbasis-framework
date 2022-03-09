import React, { Component } from "react";
import Post from "../Post";
import './BlogPost.css'

class BlogPost extends Component {

    state = {
        listArtikel: []
    }

    getData = () => {
        fetch('http://localhost:3001/posts')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    listArtikel: result
                })
            })
    }

    handleHapusArtikel = (data) => {
        fetch(`http://localhost:3001/posts/${data}`, { method: 'DELETE' })
            .then(() => {
                this.getData()
            })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel} />
                    })
                }
            </div>
        )
    }
}

export default BlogPost;