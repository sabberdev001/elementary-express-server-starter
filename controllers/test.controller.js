const testController = (req, res) => {
  return res
    .status(200)
    .json({ success: true, message: "Hello from API endpoints" });
};

module.exports = testController;
