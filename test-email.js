const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmail() {
  console.log('Testing email configuration...');
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Set' : 'Not set');

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('❌ Environment variables not set properly!');
    console.log('Please update your .env.local file with:');
    console.log('EMAIL_USER=heshamelgammal404@gmail.com');
    console.log('EMAIL_PASS=your-gmail-app-password');
    return;
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify connection
    console.log('Verifying Gmail connection...');
    await transporter.verify();
    console.log('✅ Gmail connection verified successfully!');

    // Send test email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'heshamelgammal404@gmail.com',
      subject: 'Test Email from Portfolio',
      html: `
        <h2>Test Email</h2>
        <p>This is a test email from your portfolio contact form setup.</p>
        <p>If you receive this, your email configuration is working correctly!</p>
        <p>Time: ${new Date().toLocaleString()}</p>
      `,
    };

    console.log('Sending test email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Check your Gmail inbox for the test email.');

  } catch (error) {
    console.error('❌ Error:', error.message);
    
    if (error.message.includes('Invalid login')) {
      console.log('\n🔧 Troubleshooting:');
      console.log('1. Make sure you\'re using an App Password, not your regular Gmail password');
      console.log('2. Enable 2-Factor Authentication on your Google account');
      console.log('3. Generate a new App Password at: https://myaccount.google.com/apppasswords');
    } else if (error.message.includes('Less secure app access')) {
      console.log('\n🔧 Troubleshooting:');
      console.log('Use App Passwords instead of enabling less secure apps');
    }
  }
}

testEmail();
