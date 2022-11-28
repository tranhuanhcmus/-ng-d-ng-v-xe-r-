var express = require("express");
var router = express.Router();
const Blog = require("../models/Blogs/blog.js");

var BlogsController = require("../controllers/Blogs/index.js");
/* GET home page. */
router.get("/", BlogsController.blog_index);
router.get("/create-blog", BlogsController.blog_create);

router.get("/:id", BlogsController.blog_index_detail);

router.delete("/:id", BlogsController.blog_delete);

router.post("/", BlogsController.blog_add);

module.exports = router;