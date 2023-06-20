const Item = require("../models/itemModel");

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getItemById = async (req, res) => {
  const itemId = req.params.id;

  try {
    const item = await Item.findById(itemId);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createItem = async (req, res) => {
  const { name, description } = req.body;

  try {
    const newItem = new Item({ name, description });
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateItem = async (req, res) => {
  const itemId = req.params.id;
  const { name, description } = req.body;

  try {
    const updatedItem = await Item.findByIdAndUpdate(
      itemId,
      { name, description },
      { new: true }
    );
    if (updatedItem) {
      res.json(updatedItem);
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteItem = async (req, res) => {
  const itemId = req.params.id;

  try {
    const deletedItem = await Item.findByIdAndDelete(itemId);
    if (deletedItem) {
      res.json({ message: "Item deleted successfully" });
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
