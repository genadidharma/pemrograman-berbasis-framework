import DeleteAPI from "./Delete";
import GetAPI from "./Get";
import PostAPI from "./Post";

const getNewBlog = () => GetAPI('posts?_sort=id&_order=desc')
const postNewBlog = (dataYgDiKirim) => PostAPI('posts', dataYgDiKirim)
const deleteNewBlog = (dataYgDiHapus) => DeleteAPI('posts', dataYgDiHapus)

const API = {
    getNewBlog,
    postNewBlog,
    deleteNewBlog,
}

export default API