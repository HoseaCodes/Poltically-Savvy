const Category = require("../models/categoryModel")

const categoryCtrl = {
    getCategories,
    createCategory,
    deleteCategory,
    updateCategory
}

async function getCategories(req, res) {
    try {
        const categories = await Category.find()
        res.json(categories)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

async function createCategory(req, res) {
    try {
        //Admin CRUD functions
        //Role 1 = Admin
        const { name } = req.body;
        const category = await Category.findOne({ name })
        if (category) return res.status(400).json({ msg: "This category already exists." })

        const newCategory = new Category({ name })

        await newCategory.save()

        res.json({ msg: 'Created a category' })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

async function deleteCategory(req, res) {
    try {
        await Category.findByIdAndDelete(req.params.id)
        res.json({ msg: "Deleted a category" })

    } catch (err) {
        return res.status(500).json({ msg: err.message })

    }
}

async function updateCategory(req, res) {
    try {
        const { name } = req.body;
        await Category.findOneAndUpdate({ _id: req.params.id }, { name })

        res.json({ msg: "Updated a category" })

    } catch (err) {
        return res.status(500).json({ msg: err.message })

    }
}


module.exports = categoryCtrl;