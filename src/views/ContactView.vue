<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});

const formSubmitted = ref(false);
const formError = ref(false);

const submitForm = () => {
  // In a real implementation, this would send the form data to a server
  // For now, we'll just simulate a successful submission
  if (formData.value.name && formData.value.email && formData.value.subject) {
    formSubmitted.value = true;
    formError.value = false;
    
    // Reset form after submission
    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  } else {
    formError.value = true;
  }
};

const locations = ref([
  {
    id: 1,
    name: 'Main Office',
    address: '123 Main Street, San Francisco, CA 94101',
    phone: '(555) 123-4567',
    email: 'info@aceplumbing.com',
    hours: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed'
  }
]);

const faqs = ref([
  {
    question: 'Do you offer emergency plumbing services?',
    answer: 'Yes, we provide 24/7 emergency plumbing services throughout San Francisco and surrounding areas. Our technicians are always ready to respond to urgent plumbing issues.'
  },
  {
    question: 'Are your plumbers licensed and insured?',
    answer: 'Absolutely. All our plumbers are fully licensed, insured, and have undergone thorough background checks. We only employ skilled professionals who meet our high standards of expertise and customer service.'
  },
  {
 question: 'How do you charge for your services?',
  answer: "We provide upfront, transparent pricing before any work begins. After diagnosing the issue, we'll present you with options and clear pricing so you can make an informed decision. We don't believe in hidden fees or surprise charges.",
},
  {
    question: 'Do you offer warranties on your work?',
  answer: `Yes, we stand behind our work with our "Happy Today or You Don't Pay" guarantee. If you're not satisfied with our service, we'll make it right or you don't pay. We also offer warranties on parts and labor, depending on the service provided.`
},
  {
    question: 'What areas do you service?',
  answer: `We proudly serve all of San Francisco and surrounding areas, including Noe Valley, Parkside, Castro, Mission District, Richmond District, and Sunset District. If you're unsure if we service your area, please contact us.`
}
]);
</script>

<template>
  <main>
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="hero-container">
        <div class="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for all your plumbing needs</p>
        </div>
      </div>
    </section>

    <!-- Contact Information Section -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-1-2">
            <h2 class="section-title">Get In Touch</h2>
            <p class="mb-4">Have a plumbing issue or question? We're here to help! Fill out the form below, and one of our team members will get back to you as soon as possible.</p>
            
            <div class="contact-info">
              <div class="contact-item">
                <div class="icon">📞</div>
                <div class="content">
                  <h4>Phone</h4>
                  <p>(555) 123-4567</p>
                  <p class="small">Available 24/7 for emergencies</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="icon">✉️</div>
                <div class="content">
                  <h4>Email</h4>
                  <p>info@aceplumbing.com</p>
                  <p class="small">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="icon">📍</div>
                <div class="content">
                  <h4>Address</h4>
                  <p>123 Main Street</p>
                  <p>San Francisco, CA 94101</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="icon">🕒</div>
                <div class="content">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p class="small">24/7 Emergency Service Available</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-1-2">
            <div class="contact-form-container">
              <h3>Send Us a Message</h3>
              
              <div v-if="formSubmitted" class="form-success">
                <p>Thank you for contacting us! We'll get back to you shortly.</p>
              </div>
              
              <div v-else>
                <div v-if="formError" class="form-error">
                  <p>Please fill out all required fields.</p>
                </div>
                
                <form @submit.prevent="submitForm" class="contact-form">
                  <div class="form-group">
                    <label for="name">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      v-model="formData.name" 
                      required
                      placeholder="John Doe"
                    >
                  </div>
                  
                  <div class="form-group">
                    <label for="email">Your Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      v-model="formData.email" 
                      required
                      placeholder="john@example.com"
                    >
                  </div>
                  
                  <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      v-model="formData.phone"
                      placeholder="(555) 123-4567"
                    >
                  </div>
                  
                  <div class="form-group">
                    <label for="subject">Subject *</label>
                    <input 
                      type="text" 
                      id="subject" 
                      v-model="formData.subject" 
                      required
                      placeholder="Plumbing Service Request"
                    >
                  </div>
                  
                  <div class="form-group">
                    <label for="message">Your Message</label>
                    <textarea 
                      id="message" 
                      v-model="formData.message"
                      rows="5"
                      placeholder="Please describe your plumbing issue or question..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="section map-section">
      <div class="container">
        <h2 class="section-title text-center">Our Location</h2>
        <div class="map-container">
          <!-- In a real implementation, this would be an embedded Google Map -->
          <div class="map-placeholder">
            <p>Map of Ace Plumbing San Francisco</p>
            <p>123 Main Street, San Francisco, CA 94101</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section faq-section">
      <div class="container">
        <h2 class="section-title text-center">Frequently Asked Questions</h2>
        <p class="section-subtitle text-center mb-4">Find answers to common questions about our services</p>
        
        <div class="faq-container">
          <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
            <h3 class="faq-question">{{ faq.question }}</h3>
            <p class="faq-answer">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Emergency Call Section -->
    <section class="emergency-call">
      <div class="container">
        <h3>Need Emergency Plumbing Service?</h3>
        <span class="phone">(555) 123-4567</span>
        <p>Our plumbers are available 24/7 for all your emergency plumbing needs. Don't wait until it's too late!</p>
        <a href="tel:5551234567" class="btn btn-accent">Call Now</a>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, 
    rgba(37, 99, 235, 0.9) 0%,
    rgba(124, 58, 237, 0.8) 50%,
    rgba(236, 72, 153, 0.7) 100%
  ), url('/contact-hero.jpg') no-repeat center center;
  background-size: cover;
  overflow: hidden;
}

.hero-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
}

.contact-hero-content {
  text-align: center;
  z-index: 2;
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fadeInUp 1s ease-out;
}

.contact-hero h1 {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  background: linear-gradient(135deg, 
    #ffffff 0%,
    #f0f9ff 50%,
    #e0f2fe 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1.1;
  text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);
  width: 100%;
}

.contact-hero p {
  font-size: 1.8rem;
  color: white;
  opacity: 0.95;
  margin-bottom: 3rem;
  text-align: center;
  line-height: 1.5;
  font-weight: 300;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 800px;
}

.section {
  position: relative;
  padding: 120px 0;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  overflow: hidden;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(135deg, #60a5fa, #a78bfa, #34d399);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: -2px;
}

.section-subtitle {
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 300;
}

.row {
  display: flex;
  gap: 4rem;
  align-items: flex-start;
  justify-content: space-between;
}

.col-1-2 {
  flex: 1;
  width: 50%;
}

.contact-info {
  display: grid;
  gap: 2rem;
  margin-top: 3rem;
  padding-right: 2rem;
}

.contact-item {
  background: linear-gradient(135deg, rgba(30,30,30,0.9), rgba(50,50,50,0.8));
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid rgba(255,255,255,0.1);
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-5px);
  border-color: rgba(96,165,250,0.5);
  box-shadow: 0 15px 35px rgba(0,0,0,0.3);
}

.contact-item .icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.contact-item .content h4 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 0.5rem;
}

.contact-item .content p {
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 0.25rem;
}

.contact-item .content p.small {
  font-size: 0.9rem;
  color: #94a3b8;
}

.contact-form-container {
  background: linear-gradient(135deg, rgba(30,30,30,0.9), rgba(50,50,50,0.8));
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid rgba(255,255,255,0.1);
}

.contact-form-container h3 {
  font-size: 2rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #f8fafc;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 1rem;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
  background: rgba(255,255,255,0.1);
  box-shadow: 0 0 0 3px rgba(59,130,246,0.3);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #94a3b8;
}

.btn-primary {
  display: inline-block;
  padding: 1.25rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(59,130,246,0.3);
  width: 100%;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(59,130,246,0.4);
}

.form-success {
  background: rgba(34,197,94,0.1);
  border: 1px solid rgba(34,197,94,0.3);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
}

.form-success p {
  color: #4ade80;
  font-weight: 500;
}

.form-error {
  background: rgba(239,68,68,0.1);
  border: 1px solid rgba(239,68,68,0.3);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 1.5rem;
}

.form-error p {
  color: #f87171;
  font-weight: 500;
}

.map-section {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}

.map-container {
  background: linear-gradient(135deg, rgba(30,30,30,0.9), rgba(50,50,50,0.8));
  backdrop-filter: blur(20px);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.1);
  margin-top: 3rem;
}

.map-placeholder {
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #cbd5e1;
  background: linear-gradient(135deg, rgba(30,30,30,0.9), rgba(50,50,50,0.8));
}

.faq-section {
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
}

.faq-container {
  max-width: 800px;
  margin: 4rem auto 0;
  display: grid;
  gap: 2rem;
}

.faq-item {
  background: linear-gradient(135deg, rgba(30,30,30,0.9), rgba(50,50,50,0.8));
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.3s ease;
}

.faq-item:hover {
  transform: translateY(-5px);
  border-color: rgba(96,165,250,0.5);
  box-shadow: 0 15px 35px rgba(0,0,0,0.3);
}

.faq-question {
  font-size: 1.3rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.faq-answer {
  color: #cbd5e1;
  line-height: 1.6;
  font-size: 1.1rem;
}

.emergency-call {
  position: relative;
  padding: 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  text-align: center;
  overflow: hidden;
}

.emergency-call::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%);
  pointer-events: none;
}

.emergency-call h3 {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
}

.emergency-call .phone {
  font-size: 3.5rem;
  font-weight: 900;
  color: white;
  margin: 1.5rem 0;
  display: block;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.emergency-call p {
  font-size: 1.2rem;
  color: rgba(255,255,255,0.9);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.btn-accent {
  display: inline-block;
  padding: 1.25rem 3rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  background: rgba(255,255,255,0.2);
  border: 2px solid rgba(255,255,255,0.4);
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-accent:hover {
  background: rgba(255,255,255,0.3);
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .contact-hero {
    height: auto;
    padding: 6rem 0;
  }

  .contact-hero h1 {
    font-size: 2.5rem;
  }

  .contact-hero p {
    font-size: 1.2rem;
  }

  .section {
    padding: 60px 0;
  }

  .contact-form-container {
    padding: 2rem;
  }

  .contact-item {
    padding: 1.5rem;
  }

  .emergency-call .phone {
    font-size: 2.5rem;
  }

  .row {
    flex-direction: column;
  }

  .col-1-2 {
    width: 100%;
    margin-bottom: 2rem;
  }

  .map-placeholder {
    height: 300px;
  }
}
</style>
