<script setup>
import { ref, onMounted } from 'vue';
// Removed Featured import as it wasn't used in the previous version sent and might cause confusion
// import Featured from '../components/Featured.vue'; 
import { formatDate } from '@/utils/formatDate.js'; // Added from Blog
import { useRouter } from 'vue-router'; // Added from Blog
import { supabase } from '@/client/supabase'; // Added from Blog

// Original Home data
const testimonials = ref([
  {
    id: 1,
    quote: "Ace Plumbing saved us during a major water leak emergency. Their team arrived within 30 minutes and fixed the issue professionally. Highly recommended!",
    author: "Michael Johnson",
    location: "Noe Valley, San Francisco",
    avatar: "/testimonial-1.jpg"
  },
  {
    id: 2,
    quote: "We've been using Ace Plumbing for all our plumbing needs for over 5 years. Their technicians are always professional, on time, and provide excellent service.",
    author: "Sarah Williams",
    location: "Parkside, San Francisco",
    avatar: "/testimonial-2.jpg"
  },
  {
    id: 3,
    quote: "The team at Ace Plumbing installed our new water heater quickly and efficiently. Fair pricing and great workmanship!",
    author: "David Chen",
    location: "Castro, San Francisco",
    avatar: "/testimonial-3.jpg"
  }
]);

const services = ref([
  {
    id: 1,
    title: "Emergency Plumbing",
    description: "24/7 emergency plumbing services for when you need help fast. Our expert technicians are always ready to respond to your plumbing emergencies.",
    icon: "🚨"
  },
  {
    id: 2,
    title: "Bathroom & Kitchen Plumbing",
    description: "Professional installation and repair services for all your bathroom and kitchen plumbing needs, from faucets to fixtures.",
    icon: "🚿"
  },
  {
    id: 3,
    title: "Water Heater Services",
    description: "Installation, repair, and maintenance services for all types of water heaters to ensure you always have hot water when you need it.",
    icon: "🔥"
  },
  {
    id: 4,
    title: "Drain Cleaning",
    description: "Professional drain cleaning services to clear clogs and keep your plumbing system flowing smoothly.",
    icon: "🧹"
  },
  {
    id: 5,
    title: "Sump Pump Services",
    description: "Expert installation and repair of sump pumps to protect your home from flooding and water damage.",
    icon: "💧"
  },
  {
    id: 6,
    title: "Gas Line Services",
    description: "Safe and professional gas line installation, repair, and maintenance by certified gas fitters.",
    icon: "🔧"
  }
]);

// Logic from Blog component (Updated to match Blog exactly)
const articles = ref([])
const router = useRouter()
const isLoading = ref(true) // Keep loading state

const fetchArticles = async () => {
  isLoading.value = true
  try {
    const { data, error } = await supabase
      .from('ashley_articles')
      .select('*')
      .order('published_date', { ascending: false })
      .limit(7) // Changed back to 7 to match Blog component exactly
    if (error) throw error
    articles.value = data
  } catch (error) {
    console.error('Error fetching articles:', error)
    // Optionally show an error message to the user
  } finally {
      isLoading.value = false
  }
}

const navigateToArticle = (article) => {
  // Title to slug
  const titleSlug = article.title.toLowerCase().replace(/\s+/g, '-')
  router.push(`/article/${titleSlug}`)
}

const routeToLatest = () => {
  router.push('/latest')
}

onMounted(() => {
  fetchArticles() // Fetch articles when component mounts
})

</script>

<template>
  <main>
    <!-- Hero Section -->
    <section class="hero">
      <!-- Animated Particles -->
      <div class="particles">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>

      <!-- Geometric Background -->
      <div class="geometric-bg">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>

      <!-- Glowing Orbs -->
      <div class="glow-orb"></div>
      <div class="glow-orb-2"></div>

      <div class="container">
        <div class="hero-content">
          <h1>Professional Plumbing Services in San Francisco</h1>
          <p>Ace Plumbing offers a full range of professional plumbing, heating and cooling, drain, and electric services in San Francisco and surrounding areas.</p>
          <div class="hero-buttons">
            <a href="/contact-us" class="btn btn-primary">Get a Quote</a>
            <a href="/latest" class="btn btn-outline">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section services-section">
      <div class="container">
        <h2 class="section-title text-center">Our Services</h2>
        <p class="section-subtitle text-center mb-4">We provide a wide range of plumbing services to meet all your needs</p>
        
        <div class="services-grid">
          <div v-for="service in services" :key="service.id" class="service-card">
            <div class="service-icon">
              <span>{{ service.icon }}</span>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <a href="/contact-us" class="service-link">Learn More →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="section why-choose-section">
      <div class="container">
        <div class="row">
          <div class="col-1-2">
            <h2 class="section-title">Why Choose Ace Plumbing?</h2>
            <p class="mb-3">At Ace Plumbing, we pride ourselves on delivering exceptional service and quality workmanship on every job. Here's why customers throughout San Francisco trust us for all their plumbing needs:</p>
            
            <div class="service-feature">
              <div class="icon">✓</div>
              <div class="content">
                <h4>Licensed & Insured Professionals</h4>
                <p>Our technicians are fully licensed, insured, and background-checked for your peace of mind.</p>
              </div>
            </div>
            
            <div class="service-feature">
              <div class="icon">✓</div>
              <div class="content">
                <h4>Upfront, Transparent Pricing</h4>
                <p>You get straightforward pricing with options before any work begins so you can make an informed decision.</p>
              </div>
            </div>
            
            <div class="service-feature">
              <div class="icon">✓</div>
              <div class="content">
                <h4>24/7 Emergency Services</h4>
                <p>Plumbing emergencies don't wait for business hours, and neither do we.</p>
              </div>
            </div>
            
            <div class="service-feature">
              <div class="icon">✓</div>
              <div class="content">
                <h4>Satisfaction Guaranteed</h4>
                <p>"Happy Today or You Don't Pay" means if you're not happy with our work, you don't pay.</p>
              </div>
            </div>
          </div>
          <div class="col-1-2">
            <div class="image-container">
              <img src="/images/hero-plumbing.jpg" alt="Professional plumber working" class="rounded-image">
            </div>
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
        <a href="/contact-us" class="btn btn-accent">Contact Us Now</a>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Our Customers Say</h2>
          <p class="section-subtitle">Don't just take our word for it - hear from our satisfied customers</p>
        </div>
        
        <div class="testimonials-grid">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial">
            <div class="stars">
              <span class="star" v-for="n in 5" :key="n">★</span>
            </div>
            <p class="quote">{{ testimonial.quote }}</p>
            <div class="author">
              <img :src="testimonial.avatar" :alt="testimonial.author" class="avatar">
              <div class="info">
                <div class="name">{{ testimonial.author }}</div>
                <div class="location">{{ testimonial.location }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Articles Section (Copied from Blog) -->
    <section class="section latest-posts">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-badge">Latest</span>
            <h3 class="section-title">Recent Articles</h3>
            <p class="section-subtitle">
              Discover our newest insights and updates
            </p>
          </div>
        </div>

        <!-- Added loading and error handling exactly like Blog -->
        <div v-if="isLoading" class="loading-indicator text-center">Loading articles...</div>
        <div v-else-if="articles.length > 0" class="articles-grid">
          <article
            v-for="(article, index) in articles"
            :key="article.id"
            class="article-card"
            :class="{ 'featured': index === 0 }" 
            @click="navigateToArticle(article)"
          >
            <div class="card-inner">
              <div class="article-header">
                <div class="meta-info">
                  <span class="author-badge">{{ article.author }}</span>
                  <span class="date-text">{{ formatDate(article.published_date) }}</span>
                </div>
                <div class="article-number">{{ String(index + 1).padStart(2, '0') }}</div>
              </div>

              <div class="article-content">
                <h4 class="article-title">{{ article.title }}</h4>
                <p class="article-summary">{{ article.summary }}</p>
              </div>

              <div class="article-footer">
                <div class="read-indicator">
                  <span class="read-text">Read article</span>
                  <div class="arrow-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div v-else class="no-articles text-center">No articles found.</div> <!-- This message will show if fetch returns empty or fails -->

        <div class="view-all-section">
          <button @click="routeToLatest" class="view-all-btn">
            <span>View All Articles</span>
            <div class="btn-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>

    <!-- Service Areas Section -->
    <section class="section service-areas-section">
      <div class="container">
        <h2 class="section-title text-center">Service Areas</h2>
        <p class="section-subtitle text-center mb-4">We proudly serve the following areas in San Francisco</p>
        
        <div class="areas-grid">
          <div class="area-card">
            <h3>Noe Valley</h3>
          </div>
          <div class="area-card">
            <h3>Parkside</h3>
          </div>
          <div class="area-card">
            <h3>Castro</h3>
          </div>
          <div class="area-card">
            <h3>Mission District</h3>
          </div>
          <div class="area-card">
            <h3>Richmond District</h3>
          </div>
          <div class="area-card">
            <h3>Sunset District</h3>
          </div>
        </div>
        
        <p class="text-center mt-4 text-white">
  Don't see your area? <a href="/contact-us">Contact us</a> to check if we service your location.
</p>

      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Contact Ace Plumbing today for all your plumbing needs. Our team of professionals is ready to help!</p>
          <a href="/contact-us" class="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Original Home Styles */
.hero {
  background: linear-gradient(rgba(14, 76, 146, 0.8), rgba(14, 76, 146, 0.8)), url('/hero-plumbing.jpg') no-repeat center center;
  background-size: cover;
  color: white;
  padding: 5rem 0;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
  font-size: 1.1rem;
}

.btn-primary {
  background: linear-gradient(135deg, #2563eb, #1e40af);
  color: white;
  border-color: transparent;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
}

.btn-outline {
  background: linear-gradient(135deg, #2563eb, #1e40af);
  color: white;
  border-color: transparent;
}

.btn-outline:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
}

.services-section {
    position: relative;
    padding: 120px 0;
    background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
    color: white;
}

.section-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 20px;
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

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;
    margin-top: 60px;
}

.service-card {
    position: relative;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 30px;
    padding: 35px 30px;
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.2);
}

.service-icon {
    font-size: 2.5rem;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    padding: 0;
    background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
    border-radius: 50%;
}

.service-icon span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    line-height: 1;
}

.service-card h3 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: white;
}

.service-card p {
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 20px;
}

.service-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #4ecdc4;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    padding: 12px 25px;
    border: 2px solid #4ecdc4;
    border-radius: 50px;
    transition: all 0.3s ease;
}

.service-link:hover {
    background: #4ecdc4;
    color: #0f0f23;
    transform: translateY(-3px);
}

.why-choose-section {
  background-color: #f8f9fa;
}

.image-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rounded-image {
  width: 100%;
  max-width: 450px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.testimonials-section {
    position: relative;
    padding: 120px 0;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    color: white;
}

.testimonials-section .section-header {
    text-align: center;
    margin-bottom: 80px;
    position: relative;
}

.testimonials-section .section-title {
    font-size: 3.5rem;
    font-weight: 800;
    color: white;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.testimonials-section .section-subtitle {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 300;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    margin-top: 4rem;
}

.testimonial {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 2.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.4);
}

.stars {
    display: flex;
    gap: 0.25rem;
    margin-bottom: 1rem;
    justify-content: center;
}

.star {
    color: #ffd700;
    font-size: 1.2rem;
}

.quote {
    font-size: 1.1rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
    position: relative;
    font-style: italic;
}

.quote::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: -10px;
    font-size: 4rem;
    color: rgba(255, 255, 255, 0.2);
    font-family: serif;
}

.author {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.3);
    transition: border-color 0.3s ease;
    object-fit: cover;
}

.testimonial:hover .avatar {
    border-color: rgba(255, 255, 255, 0.8);
}

.info {
    flex: 1;
}

.name {
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
    margin-bottom: 0.25rem;
}

.location {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 768px) {
    .testimonials-section {
        padding: 80px 0;
    }

    .testimonials-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .testimonial {
        padding: 2rem;
    }
    
    .testimonials-section .section-title {
        font-size: 2.5rem;
    }
}

.service-areas-section {
    position: relative;
    padding: 100px 0;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
    overflow: hidden;
}

.service-areas-section .section-title {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 900;
    text-align: center;
    margin-bottom: 1rem;
    color: #00f5ff;
    text-shadow: 0 0 50px rgba(0, 245, 255, 0.3);
}

.service-areas-section .section-subtitle {
    font-size: 1.5rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 4rem;
    font-weight: 300;
    letter-spacing: 0.5px;
}

.areas-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

.area-card {
    position: relative;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 2.5rem;
    backdrop-filter: blur(20px);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
    overflow: hidden;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.area-card:hover {
    transform: translateY(-15px) scale(1.05);
    box-shadow: 0 25px 50px rgba(0, 245, 255, 0.3);
    border-color: rgba(0, 245, 255, 0.3);
}

.area-card h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
    position: relative;
    z-index: 2;
    transition: all 0.3s;
}

.area-card:hover h3 {
    color: #00f5ff;
    transform: scale(1.1);
}

.contact-text {
    text-align: center;
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 1);
    margin-top: 3rem;
}

.contact-text a {
    color: #00f5ff;
    text-decoration: none;
    font-weight: 600;
    position: relative;
    transition: all 0.3s;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    background: rgba(0, 245, 255, 0.1);
    border: 1px solid rgba(0, 245, 255, 0.3);
}

.contact-text a:hover {
    color: #ffffff;
    background: rgba(0, 245, 255, 0.2);
    box-shadow: 0 0 30px rgba(0, 245, 255, 0.4);
    transform: translateY(-2px);
}

@media (max-width: 768px) {
    .service-areas-section {
        padding: 50px 0;
    }
    
    .areas-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .area-card {
        padding: 2rem;
        min-height: 150px;
    }
    
    .section-title {
        font-size: 3rem;
    }
    
    .section-subtitle {
        font-size: 1.2rem;
    }
}

.cta-section {
    position: relative;
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    padding: 60px 0;
}

.cta-section .container {
    position: relative;
    z-index: 10;
    max-width: 900px;
    width: 90%;
    padding: 60px 40px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
    text-align: center;
}

.cta-content h2 {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 30px;
    color: white;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
    line-height: 1.1;
}

.cta-content p {
    font-size: 1.4rem;
    line-height: 1.6;
    margin-bottom: 50px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 300;
}

.btn-container {
    position: relative;
    display: inline-block;
}

.btn {
    position: relative;
    display: inline-block;
    padding: 20px 50px;
    font-size: 1.3rem;
    font-weight: 700;
    text-decoration: none;
    color: #fff;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    border-radius: 50px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.btn:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
}

.btn:active {
    transform: translateY(-2px) scale(1.02);
}

@media (max-width: 768px) {
    .cta-section .container {
        padding: 40px 30px;
        width: 95%;
    }
    
    .cta-content h2 {
        font-size: 2.5rem;
    }
    
    .cta-content p {
        font-size: 1.2rem;
    }
    
    .btn {
        padding: 18px 40px;
        font-size: 1.1rem;
    }
}

@media (max-width: 480px) {
    .cta-content h2 {
        font-size: 2rem;
    }
    
    .cta-content p {
        font-size: 1.1rem;
    }
    
    .btn {
        padding: 16px 35px;
        font-size: 1rem;
    }
}

/* Styles for Blog Section (Copied and integrated) */
.latest-posts {
  margin-bottom: 4rem; 
  padding-top: 3rem; 
}

.section-header {
  margin-bottom: 3rem;
  text-align: center;
}

.header-content {
  max-width: 600px;
  margin: 0 auto;
}

.section-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #2563eb; /* Using Blog's blue */
  color: white;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

.latest-posts .section-title { /* Scoped to latest-posts */
  font-size: 2.2rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 0.75rem;
  letter-spacing: -0.025em;
}

.latest-posts .section-subtitle { /* Scoped to latest-posts */
  font-size: 1.125rem;
  color: #718096;
  margin: 0;
  line-height: 1.6;
}

.articles-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); 
}

.article-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow .18s, transform .18s;
  position: relative;
}

.article-card.featured {
  /* Keeping featured style consistent with Blog */
  grid-column: span 2;
  background: #f7fafc;
  border: 2px solid #e2e8f0;
}

.article-card:hover {
  box-shadow: 0 12px 32px rgba(55, 65, 81, 0.09);
  transform: translateY(-5px);
  border-color: #cbd5e0;
}

.card-inner {
  padding: 1.85rem 1.6rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.article-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.meta-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.author-badge {
  background: #4a5568;
  color: white;
  padding: 0.27rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  width: fit-content;
}

.date-text {
  font-size: 0.89rem;
  color: #718096;
  font-weight: 500;
}

.article-number {
  font-size: 2rem;
  font-weight: 800;
  color: #e2e8f0;
  line-height: 1;
}

.article-content {
  flex: 1;
  margin-bottom: 1.5rem;
}

.article-title {
  font-size: 1.38rem;
  font-weight: 700;
  color: #2563eb; /* Using Blog's blue */
  margin-bottom: 1rem;
  line-height: 1.4;
  letter-spacing: -0.025em;
}

.featured .article-title {
  /* Keeping featured style consistent with Blog */
  font-size: 1.68rem;
}

.article-summary {
  color: #4a5568;
  line-height: 1.7;
  margin: 0;
  font-size: 0.99rem;
}

.article-footer {
  margin-top: auto;
}

.read-indicator {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #4a5568;
  font-weight: 600;
  font-size: 0.89rem;
  transition: color 0.25s;
}

.arrow-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.9rem;
  height: 1.9rem;
  background: #f7fafc;
  border-radius: 50%;
  transition: background 0.2s, transform 0.2s;
}

.view-all-section {
  margin-top: 2.5rem;
  text-align: center;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: #2563eb; /* Using Blog's blue */
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  letter-spacing: 0.025em;
}

.view-all-btn:hover {
  background: #1e40af; /* Darker blue on hover */
  transform: translateY(-2px);
}

.btn-icon {
  display: flex;
  align-items: center;
  transition: transform 0.2s;
}

.loading-indicator, .no-articles {
    color: #718096;
    font-size: 1.1rem;
    padding: 2rem 0;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero p {
    font-size: 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .services-grid,
  .testimonials-grid,
  .areas-grid,
  .articles-grid { /* Added articles-grid */
    grid-template-columns: 1fr;
  }
  
  .image-container {
    margin-top: 2rem;
  }

  .article-card.featured {
    /* Ensure featured doesn't span columns on mobile */
    grid-column: span 1; 
  }

  .latest-posts .section-title { /* Scoped to latest-posts */
    font-size: 1.8rem; /* Adjusted size */
  }

  .card-inner {
    padding: 1.15rem 1rem;
  }
}

@media (max-width: 480px) {
    /* Add specific styles for smaller screens if needed */
    .featured .article-title {
      font-size: 1.38rem; /* Match non-featured on small screens */
    }
}

/* General styles assumed from project context (like .container, .section, .row, .col-1-2, .btn) */
.container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
}

.section {
    padding: 4rem 0;
}

.section-title {
    font-size: 2rem; /* Default section title size */
    font-weight: 700;
    margin-bottom: 1rem;
    color: #0e4c92; /* Default title color from Home */
}

.section-subtitle {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 2rem;
}

.text-center {
    text-align: center;
}

.mb-3 {
    margin-bottom: 1.5rem;
}

.mb-4 {
    margin-bottom: 2rem;
}

.mt-4 {
    margin-top: 2rem;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -1rem;
    margin-right: -1rem;
}

.col-1-2 {
    width: 50%;
    padding-left: 1rem;
    padding-right: 1rem;
}

.btn-accent {
    background-color: #ffc107; /* Example accent color */
    color: #333;
    border-color: #ffc107;
}

.btn-accent:hover {
    background-color: #e0a800;
    border-color: #e0a800;
}

/* Added styles for service features if missing */
.service-feature {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.service-feature .icon {
    font-size: 1.5rem;
    color: #1e88e5; /* Primary blue */
    font-weight: bold;
}

.service-feature .content h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
    color: #333;
}

.service-feature .content p {
    color: #555;
    margin: 0;
    line-height: 1.6;
}

/* Added styles for emergency call section */
.emergency-call {
  background: linear-gradient(135deg, #2563eb, #1e40af);
  color: white;
  padding: 4rem 0;
  text-align: center;
  margin-top: 3rem;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.2);
}

.emergency-call::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E") center center;
  opacity: 0.1;
  z-index: 0;
}

.emergency-call::after {
  content: '';
  position: absolute;
  bottom: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  z-index: 0;
}

.emergency-call h3 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
}

.emergency-call .phone {
  font-size: 3rem;
  font-weight: bold;
  color: #f59e0b;
  display: block;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

.emergency-call .phone:hover {
  transform: scale(1.05);
}

.emergency-call p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.9;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

.emergency-call .btn {
  position: relative;
  z-index: 1;
  background: #f59e0b;
  color: #1e3a8a;
  font-weight: 700;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.emergency-call .btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(245, 158, 11, 0.3);
}

/* Ensure responsive styles for columns */
@media (max-width: 992px) {
    .col-1-2 {
        width: 100%;
    }
    .why-choose-section .image-container {
        margin-top: 2rem;
    }
}

</style>

<style lang="scss">
@import '@/assets/styles/hero.scss';
</style>

