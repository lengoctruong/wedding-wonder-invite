import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.get('/api/wishes', async (req, res) => {
    try {
        const response = await fetch('https://formspree.io/api/0/forms/mvgqqwvd/submissions', {
            headers: {
                'Authorization': 'Bearer YOUR_FORMSPREE_API_TOKEN'
            }
        });
        const data = await response.json();
        res.json(data.submissions); // gửi danh sách submissions cho frontend
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch wishes' });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
