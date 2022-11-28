const Blog = require("../../models/Blogs/blog");
var blog_index = (req, res, next) => {
    Blog.find()
        .then((result) => result.map((item) => item.toJSON()))
        .then((result) => {
            res.render("Blogs/Home", {
                blogs: result,
                title: "All blogs",
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
var blog_index_detail = (req, res, next) => {
    Blog.findById(req.params.id)
        .then((result) => [result].map((item) => item.toJSON()))
        .then((result) => {
            res.render("Blogs/Home", {
                blogs: result,
                title: "Detail blog",
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
var blog_delete = (req, res, next) => {
    Blog.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json({ redirect: "/blogs" });
        })
        .catch((err) => {
            console.log(err);
        });
};
const blog_create = (req, res, next) => {
    res.render("Blogs/Create", { title: "Create Blog" });
};
const blog_add = (req, res) => {
    let newBlog = new Blog(req.body);

    newBlog
        .save()
        .then(res.redirect("/"))
        .catch((err) => console.log(err));
};
module.exports = {
    blog_index,
    blog_create,
    blog_add,
    blog_index_detail,
    blog_delete,
};