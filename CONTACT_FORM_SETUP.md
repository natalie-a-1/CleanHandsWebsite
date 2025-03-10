# Setting Up the Contact Form with EmailJS

The contact form on the Clean Hands Au Naturel website is currently set up for demonstration purposes only. To make it fully functional and send actual emails to your email address, follow these steps:

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. The free plan includes 200 emails per month, which should be sufficient for most small businesses

## Step 2: Set Up an Email Service

1. In your EmailJS dashboard, go to "Email Services" and click "Add New Service"
2. Choose your email provider (Gmail, Outlook, etc.)
3. Follow the authentication steps to connect your email account
4. Once connected, note down the **Service ID**

## Step 3: Create an Email Template

1. In your EmailJS dashboard, go to "Email Templates" and click "Create New Template"
2. Design your template with the following variables:
   - `{{name}}` - The name of the person contacting you
   - `{{email}}` - The email address of the person contacting you
   - `{{message}}` - The message content
3. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key

1. In your EmailJS dashboard, go to "Account" > "API Keys"
2. Copy your **Public Key**

## Step 5: Update the Contact Form Code

1. Open the file `src/components/ContactSection.tsx` in your code editor
2. Replace the existing `handleSubmit` function with the following code:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setErrorMessage('');
  
  try {
    // Replace these with your actual EmailJS credentials
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';
    
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      publicKey
    );
    
    if (response.status === 200) {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    setErrorMessage('An error occurred while sending your message. Please try again or contact us directly via email.');
    console.error('EmailJS error:', error);
  } finally {
    setIsSubmitting(false);
  }
};
```

3. At the top of the file, add the import for EmailJS:

```typescript
import emailjs from '@emailjs/browser';
```

4. Replace `'YOUR_SERVICE_ID'`, `'YOUR_TEMPLATE_ID'`, and `'YOUR_PUBLIC_KEY'` with the values you noted down earlier

## Step 6: Test the Form

1. After making these changes, deploy your website again
2. Test the contact form by sending a test message
3. Check your email to make sure you received the message

That's it! Your contact form should now be fully functional and sending emails to your inbox.

## Troubleshooting

- If you're not receiving emails, check your spam folder
- Verify that your EmailJS account is properly set up
- Ensure your email service connection is authenticated
- Check the browser console for any JavaScript errors 