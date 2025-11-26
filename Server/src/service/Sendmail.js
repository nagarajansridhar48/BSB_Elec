require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
    }
});

const mailService = async ({ name,email,message }) => {
    try {
        const mailOptions = {
            from: email, 
            to: 'nagarajansridhar48@gmail.com',
            subject: `New Contact Message from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:20px;">
                    <div style="max-width:600px; margin:auto; background:#ffffff; padding:20px; border-radius:8px;">
                        <h2 style="margin:0; color:#333;">New Contact Submission</h2>
                        <p style="color:#555;">You received a new message from your website.</p>

                        <p style="font-size:16px; margin-top:20px;">
                            <strong>Name:</strong> ${name}
                        </p>

                        <p style="font-size:16px; margin-top:10px; white-space:pre-wrap;">
                            <strong>Message:</strong><br>${message}
                        </p>

                        <p style="margin-top:30px; font-size:12px; color:#777;">
                            — Sent from your contact form
                        </p>
                    </div>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        return { success: true, message: "Mail sent successfully" };

    } catch (error) {
        return { success: false, error: error.message };
    }
};

module.exports = mailService;
