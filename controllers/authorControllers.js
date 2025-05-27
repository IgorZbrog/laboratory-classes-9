const Author = require('../models/Author');

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const updatedAuthor = await Author.findByIdAndUpdate(
      req.params.id,
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName
      },
      { new: true }
    );
    
    if (!updatedAuthor) {
      return res.status(404).json({ message: 'Author not found' });
    }
    
    res.status(200).json(updatedAuthor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};