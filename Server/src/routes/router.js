const { Router } = require('express');
const route = Router();
const mailService = require('../service/Sendmail'); 

route.post('/contactus', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const response = await mailService({ name,email,message});

        if (response.success) {
            return res.status(200).json({
                success: true,
                message: "Your message was sent successfully!"
            });
        } else {
            return res.status(500).json({
                success: false,
                error: response.error
            });
        }

    } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = route;
