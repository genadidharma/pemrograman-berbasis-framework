import React, { Component } from "react";
import Post from "../Post";
import './BlogPost.css'

class BlogPost extends Component {
    render() {
        return (
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi"/>
            </div>
        )
    }
}

export default BlogPost;