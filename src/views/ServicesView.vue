<script setup>
import { ref } from 'vue'

const services = ref([
  {
    id: 1,
    title: "Emergency Plumbing",
    description: "24/7 emergency plumbing services for when you need help fast. Our expert technicians are always ready to respond to your plumbing emergencies.",
    icon: "🚨",
    features: [
      "Available 24/7",
      "Rapid response time",
      "Expert emergency repairs",
      "No overtime charges",
      "Full-service solutions"
    ]
  },
  {
    id: 2,
    title: "Bathroom & Kitchen Plumbing",
    description: "Professional installation and repair services for all your bathroom and kitchen plumbing needs, from faucets to fixtures.",
    icon: "🚿",
    features: [
      "Fixture installation",
      "Pipe repair and replacement",
      "Sink and faucet services",
      "Toilet repair and installation",
      "Water pressure solutions"
    ]
  },
  {
    id: 3,
    title: "Water Heater Services",
    description: "Installation, repair, and maintenance services for all types of water heaters to ensure you always have hot water when you need it.",
    icon: "🔥",
    features: [
      "Water heater installation",
      "Repair and maintenance",
      "Tankless water heaters",
      "Energy efficiency upgrades",
      "Annual inspections"
    ]
  },
  {
    id: 4,
    title: "Drain Cleaning",
    description: "Professional drain cleaning services to clear clogs and keep your plumbing system flowing smoothly.",
    icon: "🧹",
    features: [
      "Hydro jetting",
      "Drain snaking",
      "Camera inspections",
      "Preventive maintenance",
      "Root removal"
    ]
  },
  {
    id: 5,
    title: "Sump Pump Services",
    description: "Expert installation and repair of sump pumps to protect your home from flooding and water damage.",
    icon: "💧",
    features: [
      "Sump pump installation",
      "Repair services",
      "Backup systems",
      "Maintenance plans",
      "Flood protection"
    ]
  },
  {
    id: 6,
    title: "Gas Line Services",
    description: "Safe and professional gas line installation, repair, and maintenance by certified gas fitters.",
    icon: "🔧",
    features: [
      "Gas line installation",
      "Leak detection",
      "Repairs and maintenance",
      "Safety inspections",
      "Emergency services"
    ]
  }
])
</script>

<template>
  <main class="services-page">
    <div class="animated-bg"></div>
    
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Our Services</h1>
        <p>Revolutionary plumbing solutions that exceed expectations</p>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-container">
      <h2 class="section-title">Premium Services</h2>
      
      <div class="services-grid">
        <div v-for="service in services" :key="service.id" class="service-card">
          <div class="service-header">
            <div class="service-icon">{{ service.icon }}</div>
            <h3 class="service-title">{{ service.title }}</h3>
          </div>
          <p class="service-description">{{ service.description }}</p>
          <div class="service-features">
            <h4 class="features-title">What We Offer:</h4>
            <ul class="features-list">
              <li v-for="feature in service.features" :key="feature" class="feature-item">
                <span class="check-icon">✓</span>
                {{ feature }}
              </li>
            </ul>
          </div>
          <a href="/contact-us" class="cta-button">Schedule Service</a>
        </div>
      </div>
    </section>

    <!-- Emergency Section -->
    <section class="emergency-section">
      <h3 class="emergency-title">Need Emergency Plumbing Service?</h3>
      <span class="phone-number">(555) 123-4567</span>
      <p>Our plumbers are available 24/7 for all your emergency plumbing needs. Don't wait until it's too late!</p>
      <a href="tel:5551234567" class="cta-button">Call Now</a>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <h2 class="section-title">Why Choose Us</h2>
      
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🏆</div>
          <h3 class="feature-title">Licensed & Insured</h3>
          <p class="feature-description">All our technicians are fully licensed, insured, and background-checked for your peace of mind.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3 class="feature-title">Fast Response</h3>
          <p class="feature-description">We respond quickly to all service calls and arrive on time, every time.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💰</div>
          <h3 class="feature-title">Fair Pricing</h3>
          <p class="feature-description">Get upfront pricing with no hidden fees or surprise charges.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🛠️</div>
          <h3 class="feature-title">Quality Work</h3>
          <p class="feature-description">We stand behind our work with our satisfaction guarantee.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.services-page {
  background: #0a0a0a;
  color: #ffffff;
  line-height: 1.6;
  overflow-x: hidden;
}

.animated-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: radial-gradient(circle at 20% 80%, #1e3a8a 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, #7c3aed 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, #059669 0%, transparent 50%);
}

/* Hero Section */
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(30,58,138,0.3));
  overflow: hidden;
}

.hero-content {
  text-align: center;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
}

.hero h1 {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  background: linear-gradient(135deg, #60a5fa, #a78bfa, #34d399);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 3rem;
}

/* Services Section */
.services-container {
  padding: 5rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #f59e0b, #ef4444, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.service-card {
  background: linear-gradient(135deg, rgba(30,30,30,0.9), rgba(50,50,50,0.8));
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2.5rem;
  border: 1px solid rgba(255,255,255,0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.5);
  border-color: rgba(96,165,250,0.5);
}

.service-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.service-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #f8fafc;
  margin: 0;
}

.service-description {
  color: #cbd5e1;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.service-features {
  background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1));
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(59,130,246,0.2);
}

.features-title {
  color: #60a5fa;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.features-list {
  list-style: none;
  display: grid;
  gap: 0.75rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #e2e8f0;
  transition: color 0.3s ease;
}

.feature-item:hover {
  color: #60a5fa;
}

.check-icon {
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #10b981, #06b6d4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  flex-shrink: 0;
}

.cta-button {
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(245,158,11,0.4);
}

/* Emergency Section */
.emergency-section {
  background: linear-gradient(135deg, rgba(220,38,38,0.1), rgba(239,68,68,0.05));
  margin: 5rem 2rem;
  padding: 3rem;
  border-radius: 24px;
  text-align: center;
  border: 1px solid rgba(220,38,38,0.3);
  position: relative;
  overflow: hidden;
}

.emergency-title {
  font-size: 2rem;
  font-weight: 700;
  color: #fca5a5;
  margin-bottom: 1rem;
}

.phone-number {
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 1rem 0;
  display: block;
}

/* Features Section */
.features-section {
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background: linear-gradient(135deg, rgba(20,20,20,0.8), rgba(40,40,40,0.6));
  backdrop-filter: blur(15px);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: rgba(96,165,250,0.5);
  box-shadow: 0 15px 35px rgba(0,0,0,0.3);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: inline-block;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 0.75rem;
}

.feature-description {
  color: #cbd5e1;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .hero h1 {
    font-size: 3rem;
  }
  
  .hero p {
    font-size: 1.2rem;
  }
  
  .service-card {
    padding: 2rem;
  }
  
  .emergency-section {
    margin: 2rem 1rem;
    padding: 2rem;
  }
  
  .phone-number {
    font-size: 2rem;
  }
}
</style> 