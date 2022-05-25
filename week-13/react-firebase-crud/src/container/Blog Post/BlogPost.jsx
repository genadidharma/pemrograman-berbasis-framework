import React, { Component } from "react";
import Post from "../Post";
import API from '../../services'
import './BlogPost.css'

class BlogPost extends Component {

    state = {
        listArtikel: [],
        insertArtikel: {
            userId: 1,
            id: 1,
            title: "",
            body: ""
        }
    }

    ambilDataDariServer = () => {
        API.getNewBlog().then(result => {
            this.setState({
                listArtikel: result
            })
        })
    }

    handleHapusArtikel = (data) => {
        API.deleteNewBlog(data).then(() => {
            this.ambilDataDariServer()
        })
    }

    handleFormArtikel = (event) => {
        let formInsertArtikel = { ...this.state.insertArtikel }
        let timestamp = new Date().getTime()
        formInsertArtikel['id'] = timestamp
        formInsertArtikel[event.target.name] = event.target.value
        this.setState({
            insertArtikel: formInsertArtikel
        })
    }

    handleTambahArtikel = () => {
        API.postNewBlog(this.state.insertArtikel)
        .then(() => {
            this.ambilDataDariServer()
        })
    }

    componentDidMount() {
        this.ambilDataDariServer()
    }

    render() {
        return (
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group-row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="title" id="title" onChange={this.handleFormArtikel} />
                        </div>
                    </div>
                    <div className="form-group-row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea name="body" id="body" rows="3" onChange={this.handleFormArtikel}></textarea>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={this.handleTambahArtikel}>Tambah</button>
                </div>

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