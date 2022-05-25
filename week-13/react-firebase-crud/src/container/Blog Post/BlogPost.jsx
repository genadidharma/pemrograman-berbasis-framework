import { initializeApp } from "firebase/app";
import React, { Component } from "react";
import Post from "../Post";
import './BlogPost.css'
import firebaseConfig from "../../firebase/config";
import { getDatabase, onValue, ref, set } from "firebase/database";


class BlogPost extends Component {

    constructor(props){
        super(props)
        initializeApp(firebaseConfig);

        this.state = {
            listArtikel: []
        }
    }

    ambilDataDariServer = () => {
        const db = getDatabase()
        const blogRef = ref(db, '/')

        onValue(blogRef, (snapshot) => {
            const state = snapshot.val()
            this.setState(state)
        })
    }

    handleHapusArtikel = (idArtikel) => {
        const {listArtikel} = this.state
        const newState = listArtikel.filter(data => {
            return data.uid !== idArtikel
        })

        this.setState({listArtikel: newState})
    }

    simpanDataKeServer = () => {
        const db = getDatabase()
        set(ref(db, '/'), this.state)
    }

    handleTambahArtikel = () => {
        let title = this.refs.judulArtikel.value
        let body = this.refs.isiArtikel.value
        let uid = this.refs.uid.value

        if(uid && title && body){
            const {listArtikel} = this.state
            const indeksArtikel = listArtikel.findIndex(data => {
                return data.uid === uid
            })
            listArtikel[indeksArtikel].title = title
            listArtikel[indeksArtikel].body = body
            this.setState({listArtikel})
        }else if(title && body){
            const uid = new Date().getTime().toString()
            const {listArtikel} = this.state
            listArtikel.push({uid, title, body})
            this.setState({listArtikel})
        }

        this.refs.judulArtikel.value = ""
        this.refs.isiArtikel.value = ""
        this.refs.uid.value = ""
    }

    componentDidMount() {
        this.ambilDataDariServer()
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState !== this.state){
            this.simpanDataKeServer()
        }
    }

    render() {
        return (
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group-row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="title" id="title" ref={'judulArtikel'}/>
                        </div>
                    </div>
                    <div className="form-group-row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea name="body" id="body" rows="3" ref={'isiArtikel'}></textarea>
                        </div>
                    </div>
                    <input type="hidden" name="uid" ref={'uid'} />
                    <button type="submit" className="btn btn-primary" onClick={this.handleTambahArtikel}>Tambah</button>
                </div>

                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.uid} judul={artikel.title} isi={artikel.body} idArtikel={artikel.uid} hapusArtikel={this.handleHapusArtikel} />
                    })
                }
            </div>
        )
    }
}

export default BlogPost;