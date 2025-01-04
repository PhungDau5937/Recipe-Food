const Item = require("../model/ItemsModel");

const getAllItems = async (req, res) => {
  try {
    // Tìm kiếm và sắp xếp các mục theo thời gian tạo (mới nhất trước)
    const result = await Item.find().sort({ createAt: -1 });

    // Gửi kết quả về phía client
    res.status(200).json(result);
  } catch (error) {
    // Xử lý lỗi và gửi phản hồi nếu xảy ra lỗi
    res.status(500).json({ message: error.message });
  }
};

const getSearchedItems = async (req, res) => {
  const { q } = req.query;
  try {
    let items;
    if (q) {
      items = await Item.find({ name: { $regex: q, $options: "i" } });
    }
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({message: "No items found!"});
  }
};

const getSingleItem = async(req, res) => {
  const {id} = req.params;
  try{
    const item = await Item.findById(id);
    res.json(item);
  } catch (error) {
    res.status(500).json({message: 'No item found'})
  }
}

module.exports = {
  getAllItems,
  getSearchedItems,
  getSingleItem,
};
