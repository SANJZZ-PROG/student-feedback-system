const Feedback = require("../models/feedback");

exports.addFeedback = async (req, res) => {
  try {
    const { userId, message } = req.body;
    const feedback = new Feedback({ userId, message });
    await feedback.save();
    res.status(201).json({ message: "✅ Feedback submitted", feedback });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find().populate("userId", "name email");
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};