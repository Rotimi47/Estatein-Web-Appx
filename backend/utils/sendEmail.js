const nodemailer = require("nodemailer");

const sendPaymentConfirmationEmail = async ({ email, amount, reference }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Estatein" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Payment Confirmation",
      html:`
      <h2>Payment Successful 🎉</h2>
      <p>Your payment was successful.</p>
      <p><strong>Amount:</strong> ₦${(amount / 100).toLocaleString()}</p>
      <p><strong>Reference:</strong> ${reference}</p>
      <p>Thank you for using Estatein.</p>
    `,
    });

    console.log("✅ Payment confirmation email sent");
  } catch (error) {
    console.error("❌ Email sending failed:", error.message);
    throw error; // VERY IMPORTANT
  }
};

module.exports = { sendPaymentConfirmationEmail };

