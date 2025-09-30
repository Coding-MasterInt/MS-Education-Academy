# Email Integration Setup Instructions for MS School Academy

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account using your school email: `Kuldeepyadav900322@gmail.com`
3. Verify your email address

## Step 2: Create Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended for your Gmail account)
4. Connect your Gmail account: `Kuldeepyadav900322@gmail.com`
5. Note down your **Service ID** (e.g., `service_msschool`)

## Step 3: Create Email Template

1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template:

**Template Name:** Contact Form - MS School Academy

**Subject:** New {{subject}} from {{from_name}} - MS School Academy

**Content:**
\`\`\`
Dear Principal Kuldeep Yadav,

You have received a new message through the MS School Academy website.

CONTACT DETAILS:
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

MESSAGE:
{{message}}

---
This message was sent from the MS School Academy website contact form.
Please reply directly to: {{from_email}}

Best regards,
MS School Academy Website System
\`\`\`

4. Note down your **Template ID** (e.g., `template_contact`)

## Step 4: Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `your_public_key_here`)

## Step 5: Update Website Code

Replace these values in the contact form:

\`\`\`typescript
const serviceId = "your_service_id_here"     // From Step 2
const templateId = "your_template_id_here"   // From Step 3  
const publicKey = "your_public_key_here"     // From Step 4
\`\`\`

## Step 6: Test the Integration

1. Fill out the contact form on your website
2. Check your Gmail inbox: `Kuldeepyadav900322@gmail.com`
3. You should receive the form submission as an email

## Email Management Tips

### Organizing Admission Emails:
1. Create Gmail labels:
   - "School - Admissions"
   - "School - General Inquiries"
   - "School - Academic Queries"

2. Set up Gmail filters to automatically sort emails by subject

### Auto-Reply Setup:
1. In Gmail, go to Settings → General
2. Set up "Vacation responder" with:
   \`\`\`
   Thank you for contacting MS School Academy. 
   We have received your message and will respond within 24 hours.
   
   For urgent matters, please call: +91 8737900322
   
   Best regards,
   MS School Academy
   \`\`\`

## Security Notes

- EmailJS free plan allows 200 emails/month
- Your email credentials are secure with EmailJS
- All form data is sent directly to your Gmail
- No sensitive data is stored on the website

## Troubleshooting

**If emails aren't being received:**
1. Check Gmail spam folder
2. Verify EmailJS service is connected
3. Check EmailJS dashboard for error logs
4. Ensure template variables match form field names

**For technical support:**
- EmailJS Documentation: https://www.emailjs.com/docs/
- Contact EmailJS support if needed

---

**Important:** Keep your EmailJS credentials secure and don't share them publicly.
