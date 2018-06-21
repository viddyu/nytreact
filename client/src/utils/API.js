import axios from "axios";

export default {
    getArticles: function() {
        return axios.get("/api/articles");
    },
    queryNYT: function(url) {
        return axios.get(url);
    },
    saveArticle: function(savedarticle) {
        return axios.post("/api/articles", savedarticle);
    },
    deleteArticle: function(id) {
        console.log("this is api id: " + id)
        return axios.delete("/api/articles/" + id);
    }
    
};