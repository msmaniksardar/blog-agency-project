import {
    commonBlogService,
    createBlogService,
    deleteBlogService,
    getBlogService,
    getBlogsService,
    updateBlogService
} from "../services/blog-service.js";

export const createBlog = async (req, res) => {
    await createBlogService(req,res);
}

export const getBlogs = async (req, res) => {
    await getBlogsService(req,res);
}
export const getBlog = async (req, res) => {
    await getBlogService(req, res);
}

export const deleteBlog = async (req, res) => {
    await deleteBlogService(req, res);
}
export const updateBlog = async (req, res) => {
    await updateBlogService(req, res);
}
export const commonBlog = async (req, res) => {
    await commonBlogService(req, res);
}