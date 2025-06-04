<script setup>
import { ref } from 'vue';

const teamMembers = ref([
  {
    id: 1,
    name: "John Anderson",
    position: "Founder & Master Plumber",
    bio: "John founded Ace Plumbing in 2005 with over 15 years of experience in the plumbing industry. He holds multiple certifications and is dedicated to providing the highest quality plumbing services to San Francisco residents.",
    avatar: "/team-member-1.jpg"
  },
  {
    id: 2,
    name: "Sarah Martinez",
    position: "Operations Manager",
    bio: "Sarah oversees all day-to-day operations at Ace Plumbing. With her background in business management and customer service, she ensures that every client receives prompt, professional service from start to finish.",
    avatar: "/team-member-2.jpg"
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Senior Technician",
    bio: "Michael has been with Ace Plumbing for over 8 years and specializes in complex plumbing installations and repairs. His attention to detail and problem-solving skills make him an invaluable member of our team.",
    avatar: "/team-member-3.jpg"
  },
  {
    id: 4,
    name: "Emily Johnson",
    position: "Customer Service Manager",
    bio: "Emily leads our customer service team, ensuring that every client interaction exceeds expectations. Her friendly demeanor and commitment to client satisfaction have helped build our reputation for excellent service.",
    avatar: "/team-member-4.jpg"
  }
]);

const blogAuthors = ref([
  {
    id: 1,
    name: "David Wilson",
    position: "Head of Content",
    bio: "David brings over 10 years of experience in technical writing and plumbing knowledge to our blog. He specializes in breaking down complex plumbing topics into easy-to-understand guides for homeowners.",
    avatar: "/author-1.jpg"
  },
  {
    id: 2,
    name: "Lisa Rodriguez",
    position: "Plumbing Specialist & Writer",
    bio: "Lisa combines her plumbing expertise with excellent writing skills to create informative articles about plumbing maintenance, repairs, and upgrades. She's passionate about helping homeowners prevent plumbing disasters.",
    avatar: "/author-2.jpg"
  },
  {
    id: 3,
    name: "Robert Kim",
    position: "Technical Editor",
    bio: "Robert ensures all our plumbing advice is accurate, up-to-date, and follows industry best practices. With his background in engineering and plumbing systems, he provides valuable technical insights to our content.",
    avatar: "/author-3.jpg"
  }
]);

const values = ref([
  {
    id: 1,
    title: "Quality",
    description: "We never compromise on the quality of our work. From the materials we use to the techniques we employ, excellence is our standard.",
    icon: "⭐"
  },
  {
    id: 2,
    title: "Integrity",
    description: "Honesty and transparency guide every interaction with our customers. We provide upfront pricing and never recommend unnecessary services.",
    icon: "🤝"
  },
  {
    id: 3,
    title: "Reliability",
    description: "When you schedule service with Ace Plumbing, you can count on us to arrive on time and complete the job efficiently and effectively.",
    icon: "🕒"
  },
  {
    id: 4,
    title: "Expertise",
    description: "Our team undergoes continuous training to stay current with the latest plumbing technologies and techniques, ensuring you receive the best service possible.",
    icon: "🧠"
  }
]);

const milestones = ref([
  {
    year: "2005",
    title: "Company Founded",
    description: "Ace Plumbing was established in San Francisco with a commitment to quality service and customer satisfaction."
  },
  {
    year: "2010",
    title: "Expanded Service Area",
    description: "Due to growing demand, we expanded our service area to cover all of San Francisco and neighboring communities."
  },
  {
    year: "2015",
    title: "Top Choice Award",
    description: "Recognized as the #1 plumbing service in San Francisco by the Top Choice Award survey."
  },
  {
    year: "2018",
    title: "Added HVAC Services",
    description: "Expanded our offerings to include heating and cooling services to better serve our customers' needs."
  },
  {
    year: "2023",
    title: "Digital Transformation",
    description: "Launched our new website and online booking system to make scheduling service easier than ever."
  }
]);
</script>

<template>
  <main>
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="container">
        <div class="about-hero-content">
          <div class="hero-text-wrapper">
            <h1>About Ace Plumbing</h1>
            <p>Your trusted plumbing experts in San Francisco since 2005</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Overview Section -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-1-2">
            <h2 class="section-title">Our Story</h2>
            <p>Ace Plumbing San Francisco was founded in 2005 with a simple mission: to provide reliable, high-quality plumbing services to residents and businesses throughout San Francisco. What began as a small operation has grown into one of the most trusted plumbing companies in the area.</p>
            <p class="mt-2">We offer a full range of professional plumbing, heating and cooling, drain, and electric services in San Francisco and surrounding areas. Our team of certified technicians is dedicated to solving your plumbing problems quickly and efficiently, with a focus on customer satisfaction and quality workmanship.</p>
            <p class="mt-2">As a locally owned and operated business, we take pride in serving our community and building lasting relationships with our customers. We understand that plumbing issues can be stressful, which is why we strive to make the repair process as smooth and hassle-free as possible.</p>
          </div>
          <div class="col-1-2">
            <div class="image-container">
              <img src="/logo.png" alt="Ace Plumbing team" class="rounded-image">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values Section -->
    <section class="section values-section">
      <div class="container">
        <h2 class="section-title text-center">Our Values</h2>
        <p class="section-subtitle text-center mb-4">The principles that guide everything we do</p>
        
        <div class="values-grid">
          <div v-for="value in values" :key="value.id" class="value-card">
            <div class="value-icon">{{ value.icon }}</div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Timeline Section -->
    <section class="section timeline-section">
      <div class="container">
        <h2 class="section-title text-center">Our Journey</h2>
        <p class="section-subtitle text-center mb-4">Key milestones in our company's history</p>
        
        <div class="timeline">
          <div v-for="(milestone, index) in milestones" :key="index" class="timeline-item">
            <div class="timeline-year">{{ milestone.year }}</div>
            <div class="timeline-content">
              <h3>{{ milestone.title }}</h3>
              <p>{{ milestone.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section team-section">
      <div class="container">
        <h2 class="section-title text-center">Meet Our Team</h2>
        <p class="section-subtitle text-center mb-4">The professionals behind our exceptional service</p>
        
        <div class="team-grid">
          <div v-for="member in teamMembers" :key="member.id" class="team-card">
            <div class="team-image">
              <img :src="member.avatar" :alt="member.name">
            </div>
            <div class="team-info">
              <h3>{{ member.name }}</h3>
              <p class="position">{{ member.position }}</p>
              <p class="bio">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Authors Section -->
    <section class="section authors-section">
      <div class="container">
        <h2 class="section-title text-center">Our Blog Authors</h2>
        <p class="section-subtitle text-center mb-4">The experts behind our informative plumbing content</p>
        
        <div class="authors-grid">
          <div v-for="author in blogAuthors" :key="author.id" class="author-card">
            <div class="author-image">
              <img :src="author.avatar" :alt="author.name">
            </div>
            <div class="author-info">
              <h3>{{ author.name }}</h3>
              <p class="position">{{ author.position }}</p>
              <p class="bio">{{ author.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Experience the Ace Plumbing Difference?</h2>
          <p>Contact us today to schedule service or request a quote. Our team is standing by to assist you with all your plumbing needs.</p>
          <a href="/contact-us" class="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, 
    rgba(37, 99, 235, 0.9) 0%,
    rgba(124, 58, 237, 0.8) 50%,
    rgba(236, 72, 153, 0.7) 100%
  ), url('/about-hero.jpg') no-repeat center center;
  background-size: cover;
  overflow: hidden;
}

.about-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.4) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-hero-content {
  text-align: center;
  z-index: 2;
  max-width: 900px;
  padding: 0 2rem;
  animation: fadeInUp 1s ease-out;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-text-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.about-hero h1 {
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

.about-hero p {
  font-size: 1.8rem;
  color: white;
  opacity: 0.95;
  margin-bottom: 3rem;
  text-align: center;
  line-height: 1.5;
  font-weight: 300;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 100%;
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

.image-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.rounded-image {
  width: 100%;
  max-width: 450px;
  border-radius: 24px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease;
}

.image-container:hover .rounded-image {
  transform: scale(1.05);
}

.values-section {
  position: relative;
  padding: 120px 0;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  overflow: hidden;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.value-card {
  background: linear-gradient(135deg, rgba(30,30,30,0.9), rgba(50,50,50,0.8));
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2.5rem;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.5);
  border-color: rgba(96,165,250,0.5);
}

.value-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 1.5rem;
}

.value-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 1rem;
}

.value-card p {
  color: #cbd5e1;
  line-height: 1.6;
  font-size: 1.1rem;
}

.timeline-section {
  position: relative;
  padding: 120px 0;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(135deg, #60a5fa, #a78bfa, #34d399);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  letter-spacing: -2px;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 300;
}

.timeline {
  position: relative;
  max-width: 1000px;
  margin: 4rem auto 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
}

.timeline-item:nth-child(odd) {
  flex-direction: row-reverse;
}

.timeline-year {
  flex: 0 0 120px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  padding: 1rem;
  text-align: center;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1.2rem;
  z-index: 1;
  box-shadow: 0 10px 25px rgba(59,130,246,0.3);
}

.timeline-content {
  flex: 1;
  background: linear-gradient(135deg, rgba(30,30,30,0.9), rgba(50,50,50,0.8));
  backdrop-filter: blur(20px);
  padding: 2rem;
  border-radius: 16px;
  margin: 0 2rem;
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
  border-color: rgba(96,165,250,0.5);
  box-shadow: 0 15px 35px rgba(0,0,0,0.3);
}

.timeline-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 0.75rem;
}

.timeline-content p {
  color: #cbd5e1;
  line-height: 1.6;
  font-size: 1.1rem;
}

.team-section, .authors-section {
  position: relative;
  padding: 120px 0;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
}

.team-grid, .authors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.team-card, .author-card {
  background: linear-gradient(135deg, rgba(30,30,30,0.9), rgba(50,50,50,0.8));
  backdrop-filter: blur(20px);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.3s ease;
}

.team-card:hover, .author-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.5);
  border-color: rgba(96,165,250,0.5);
}

.team-image, .author-image {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.team-image img, .author-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.team-card:hover .team-image img,
.author-card:hover .author-image img {
  transform: scale(1.1);
}

.team-info, .author-info {
  padding: 2rem;
}

.team-info h3, .author-info h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 0.5rem;
}

.position {
  color: #60a5fa;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.bio {
  color: #cbd5e1;
  line-height: 1.6;
  font-size: 1.1rem;
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

.cta-content {
  text-align: center;
  max-width: 900px;
  padding: 60px 40px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.cta-content h2 {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 900;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.cta-content p {
  font-size: 1.4rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
}

.btn-primary {
  display: inline-block;
  padding: 1.25rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(59,130,246,0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(59,130,246,0.4);
}

@media (max-width: 768px) {
  .about-hero {
    height: auto;
    padding: 6rem 0;
  }

  .about-hero h1 {
    font-size: 2.5rem;
  }

  .about-hero p {
    font-size: 1.2rem;
  }

  .values-grid,
  .team-grid,
  .authors-grid {
    grid-template-columns: 1fr;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-item,
  .timeline-item:nth-child(odd) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 40px;
  }

  .timeline-year {
    margin-bottom: 1rem;
  }

  .timeline-content {
    margin: 0;
    width: 100%;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .section-subtitle {
    font-size: 1.2rem;
  }

  .cta-content {
    padding: 40px 20px;
  }

  .cta-content h2 {
    font-size: 2rem;
  }

  .cta-content p {
    font-size: 1.2rem;
  }
}
</style>