let feedbackMessages = []; // In-memory storage for feedback messages

const postFeedback = (req, res) => {
    const { feedback } = req.body;
    if (feedback) {
        feedbackMessages.push(feedback);
        console.log('Received feedback:', feedback);
        res.status(200).send('Feedback received');
    } else {
        res.status(400).send('Feedback is missing');
    }
};

const getFeedback = (req, res) => {
    res.json(feedbackMessages);
};

module.exports = {
    postFeedback,
    getFeedback
};
