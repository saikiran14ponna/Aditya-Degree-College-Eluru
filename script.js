document.getElementById('enquiryForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Collect form data
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value || 'Not provided';
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const group = document.getElementById('group').value;
  const referredBy = document.getElementById('referredBy').value || 'Not provided';
  const message = document.getElementById('message').value || 'No query';
  
  // Format WhatsApp message
  const whatsappMsg = `*🎓Aditya Degree College - New Enquiry* %0A%0A` +
    `*👤 Student Name:* ${name} %0A` +
    `*🏠 Address:* ${address} %0A` +
    `*📧 Email:* ${email} %0A` +
    `*📱 Mobile:* ${phone} %0A` +
    `*🎯 Course:* ${group} %0A` +
    `*📝 Referred By:* ${referredBy} %0A` +
    `*💬 Query:* ${message}`;
  
  // Replace with college WhatsApp number (include country code)
  const whatsappNumber = '919032117939'; // Example: +91 99123 45678
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;
  
  // Open WhatsApp
  window.open(whatsappURL, '_blank');
  
  // Show success message
  document.getElementById('successMsg').style.display = 'block';
  this.reset(); // Clear form
});
