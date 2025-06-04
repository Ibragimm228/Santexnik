<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { supabase } from '../client/supabase.js';
import Loader from '../components/Loader.vue';
import ArticleContent from '../components/article/ArticleContent.vue';
import ArticleNavigation from '../components/article/ArticleNavigation.vue';
import ArticleSideBarKeywords from '../components/article/ArticleSideBarKeywords.vue';
import ArticleSidebarRecent from '../components/article/ArticleSidebarRecent.vue';
import ArticleSidebarType from '../components/article/ArticleSidebarType.vue';
import ArticleComments from '../components/article/ArticleComments.vue';

const route = useRoute();
const article = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    loading.value = true;
    const articleId = route.params.id;
    
    // In a real implementation, this would fetch from Supabase
    // For now, we'll use a sample article
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Sample article data
    article.value = {
      id: articleId,
      title: "Emergency Plumbing: What to Do When Disaster Strikes",
      content: `
        <p>Plumbing emergencies can happen at any time, often when you least expect them. Whether it's a burst pipe, overflowing toilet, or a sudden lack of hot water, these situations require immediate attention to prevent water damage and costly repairs.</p>
        
        <h2>Common Plumbing Emergencies</h2>
        
        <p>Before we dive into what steps to take during a plumbing emergency, let's identify some of the most common situations that qualify as emergencies:</p>
        
        <ul>
          <li><strong>Burst pipes</strong>: When water pressure or freezing temperatures cause pipes to rupture, leading to significant water leakage.</li>
          <li><strong>Severe drain clogs</strong>: When toilets, sinks, or tubs back up and overflow, potentially causing water damage.</li>
          <li><strong>Water heater failures</strong>: When your water heater leaks, produces no hot water, or makes unusual noises.</li>
          <li><strong>Sewer line backups</strong>: When waste water backs up into your home through drains or toilets.</li>
          <li><strong>Gas leaks</strong>: When you smell gas in your home (this is both a plumbing and safety emergency).</li>
        </ul>
        
        <h2>Immediate Steps to Take</h2>
        
        <p>When facing a plumbing emergency, time is of the essence. Here are the critical first steps you should take:</p>
        
        <h3>1. Shut Off the Water</h3>
        
        <p>Knowing how to shut off your water is essential for every homeowner. For isolated issues like an overflowing toilet or a leaking sink, you can usually turn off the water supply valve located near the fixture. For major emergencies affecting your entire home, locate and turn off the main water shut-off valve, typically found near your water meter.</p>
        
        <h3>2. Turn Off the Water Heater</h3>
        
        <p>If you've shut off the main water supply, you should also turn off your water heater to prevent damage. For gas water heaters, turn the gas valve to the "off" position. For electric water heaters, switch off the corresponding circuit breaker.</p>
        
        <h3>3. Assess the Damage</h3>
        
        <p>Once you've stopped the water flow, assess the extent of the damage. Take photos for insurance purposes if necessary, and determine if it's safe to remain in the affected area.</p>
        
        <h3>4. Clean Up What You Can</h3>
        
        <p>Remove standing water and move valuable items away from the affected area. Use towels, mops, or a wet vacuum to clean up water and prevent further damage.</p>
        
        <h3>5. Call a Professional Plumber</h3>
        
        <p>While some minor plumbing issues can be DIY projects, true emergencies require professional expertise. At Ace Plumbing, we offer 24/7 emergency services to address your plumbing disasters promptly.</p>
        
        <h2>When to Call Ace Plumbing</h2>
        
        <p>You should call our emergency plumbing service immediately if:</p>
        
        <ul>
          <li>You can't locate or access the shut-off valve</li>
          <li>There's significant water damage</li>
          <li>You smell gas</li>
          <li>Sewage is backing up into your home</li>
          <li>Multiple fixtures are affected</li>
          <li>The issue poses health or safety risks</li>
        </ul>
        
        <p>Our experienced technicians will arrive quickly, equipped with the tools and knowledge to resolve your emergency efficiently.</p>
        
        <h2>Preventing Future Emergencies</h2>
        
        <p>While some plumbing emergencies are unavoidable, many can be prevented with regular maintenance and vigilance:</p>
        
        <ul>
          <li><strong>Schedule regular inspections</strong>: Annual plumbing check-ups can identify potential issues before they become emergencies.</li>
          <li><strong>Know your plumbing system</strong>: Familiarize yourself with the location of shut-off valves, the water meter, and other key components.</li>
          <li><strong>Avoid chemical drain cleaners</strong>: These can damage pipes over time. Instead, use enzymatic cleaners or call a professional for stubborn clogs.</li>
          <li><strong>Monitor water pressure</strong>: Excessive pressure can strain pipes and fixtures. Consider installing a pressure regulator if needed.</li>
          <li><strong>Protect pipes in winter</strong>: Insulate exposed pipes and maintain adequate heating to prevent freezing.</li>
        </ul>
        
        <h2>Conclusion</h2>
        
        <p>Plumbing emergencies can be stressful, but knowing how to respond can minimize damage and restore your home's functionality quickly. Remember that Ace Plumbing is always ready to help with our 24/7 emergency service. Don't hesitate to call us at (555) 123-4567 when disaster strikes.</p>
        
        <p>For more plumbing tips and advice, explore our blog or contact our team of experts. We're committed to keeping your home's plumbing system running smoothly year-round.</p>
      `,
      author: "David Wilson",
      author_avatar: "/images/author-1.jpg",
      date: "2023-05-15",
      category: "Emergency Plumbing",
      tags: ["emergency", "water damage", "burst pipes", "plumbing tips"],
      image: "/images/emergency-plumbing.jpg",
      excerpt: "Learn the essential steps to take during a plumbing emergency to minimize damage and get help fast."
    };
    
  } catch (err) {
    console.error('Error fetching article:', err);
    error.value = 'Failed to load article. Please try again later.';
  } finally {
    loading.value = false;
  }
});

const relatedArticles = ref([
  {
    id: 2,
    title: "How to Prevent Frozen Pipes This Winter",
    excerpt: "Learn how to protect your plumbing system during cold weather to avoid costly repairs.",
    image: "/images/frozen-pipes.jpg",
    category: "Maintenance Tips",
    date: "2023-04-10"
  },
  {
    id: 3,
    title: "5 Signs You Need to Call a Professional Plumber",
    excerpt: "Don't ignore these warning signs that indicate it's time to call in the experts.",
    image: "/images/professional-plumber.jpg",
    category: "General Plumbing",
    date: "2023-03-22"
  },
  {
    id: 4,
    title: "Water Damage Restoration: What You Need to Know",
    excerpt: "A comprehensive guide to restoring your home after water damage from plumbing issues.",
    image: "/images/water-damage.jpg",
    category: "Emergency Plumbing",
    date: "2023-02-18"
  }
]);
</script>

<template>
  <main>
    <div v-if="loading" class="loader-container">
      <Loader />
    </div>
    
    <div v-else-if="error" class="error-message">
      {{ error }}
    </div>
    
    <div v-else-if="article" class="article-container">
      <!-- Article Hero Section -->
      <section class="article-hero" :style="{ backgroundImage: `linear-gradient(rgba(14, 76, 146, 0.8), rgba(14, 76, 146, 0.8)), url('${article.image}')` }">
        <div class="container">
          <div class="article-hero-content">
            <span class="article-category">{{ article.category }}</span>
            <h1>{{ article.title }}</h1>
            <div class="article-meta">
              <div class="author">
                <img :src="article.author_avatar" :alt="article.author" class="author-avatar">
                <span>By {{ article.author }}</span>
              </div>
              <div class="date">
                {{ new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Article Content Section -->
      <section class="section article-section">
        <div class="container">
          <div class="row">
            <div class="col-3-4">
              <!-- Article Content -->
              <article class="article-content">
                <div v-html="article.content"></div>
                
                <!-- Article Tags -->
                <div class="article-tags">
                  <span class="tags-title">Tags:</span>
                  <div class="tags-list">
                    <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
                  </div>
                </div>
                
                <!-- Author Bio -->
                <div class="author-bio">
                  <img :src="article.author_avatar" :alt="article.author" class="author-avatar">
                  <div class="author-info">
                    <h3>{{ article.author }}</h3>
                    <p>David is our head of content with over 10 years of experience in plumbing and technical writing. He specializes in breaking down complex plumbing topics into easy-to-understand guides for homeowners.</p>
                  </div>
                </div>
                
                <!-- Article Navigation -->
                <div class="article-navigation">
                  <a href="#" class="prev-article">
                    <span class="nav-label">Previous Article</span>
                    <span class="nav-title">Water Heater Maintenance Tips</span>
                  </a>
                  <a href="#" class="next-article">
                    <span class="nav-label">Next Article</span>
                    <span class="nav-title">Choosing the Right Plumbing Fixtures</span>
                  </a>
                </div>
                
                <!-- Comments Section -->
                <div class="comments-section">
                  <h3>Comments (3)</h3>
                  
                  <div class="comment">
                    <img src="/images/comment-avatar-1.jpg" alt="John D." class="comment-avatar">
                    <div class="comment-content">
                      <div class="comment-header">
                        <h4>John D.</h4>
                        <span class="comment-date">June 2, 2023</span>
                      </div>
                      <p>This article saved me during a recent pipe burst! I followed the steps to shut off the water and called Ace Plumbing. They arrived within 30 minutes and fixed the issue. Great advice!</p>
                    </div>
                  </div>
                  
                  <div class="comment">
                    <img src="/images/comment-avatar-2.jpg" alt="Sarah M." class="comment-avatar">
                    <div class="comment-content">
                      <div class="comment-header">
                        <h4>Sarah M.</h4>
                        <span class="comment-date">May 28, 2023</span>
                      </div>
                      <p>I appreciate the preventative tips section. I've scheduled my annual plumbing inspection with Ace after reading this. Better safe than sorry!</p>
                    </div>
                  </div>
                  
                  <div class="comment">
                    <img src="/images/comment-avatar-3.jpg" alt="Robert T." class="comment-avatar">
                    <div class="comment-content">
                      <div class="comment-header">
                        <h4>Robert T.</h4>
                        <span class="comment-date">May 20, 2023</span>
                      </div>
                      <p>Could you provide more information about water pressure regulators? I think mine might need replacing but I'm not sure how to tell.</p>
                    </div>
                  </div>
                  
                  <!-- Comment Form -->
                  <div class="comment-form">
                    <h3>Leave a Comment</h3>
                    <form>
                      <div class="form-group">
                        <label for="name">Name *</label>
                        <input type="text" id="name" required>
                      </div>
                      
                      <div class="form-group">
                        <label for="email">Email *</label>
                        <input type="email" id="email" required>
                      </div>
                      
                      <div class="form-group">
                        <label for="comment">Comment *</label>
                        <textarea id="comment" rows="5" required></textarea>
                      </div>
                      
                      <button type="submit" class="btn btn-primary">Post Comment</button>
                    </form>
                  </div>
                </div>
              </article>
            </div>
            
            <div class="col-1-4">
              <!-- Sidebar -->
              <aside class="article-sidebar">
                <!-- About Author Widget -->
                <div class="sidebar-widget">
                  <h4>About the Author</h4>
                  <div class="author-card">
                    <img :src="article.author_avatar" :alt="article.author" class="sidebar-author-avatar">
                    <h5>{{ article.author }}</h5>
                    <p>Head of Content at Ace Plumbing with expertise in emergency plumbing solutions and home maintenance.</p>
                    <a href="/about" class="author-link">View Profile</a>
                  </div>
                </div>
                
                <!-- Categories Widget -->
                <div class="sidebar-widget">
                  <h4>Categories</h4>
                  <ul class="category-list">
                    <li><a href="#">Emergency Plumbing</a></li>
                    <li><a href="#">Bathroom Plumbing</a></li>
                    <li><a href="#">Kitchen Plumbing</a></li>
                    <li><a href="#">Water Heaters</a></li>
                    <li><a href="#">Drain Cleaning</a></li>
                    <li><a href="#">Maintenance Tips</a></li>
                  </ul>
                </div>
                
                <!-- Recent Posts Widget -->
                <div class="sidebar-widget">
                  <h4>Recent Posts</h4>
                  <div class="recent-posts">
                    <div v-for="(relatedArticle, index) in relatedArticles" :key="index" class="recent-post">
                      <img :src="relatedArticle.image" :alt="relatedArticle.title" class="recent-post-image">
                      <div class="recent-post-content">
                        <h5><a :href="`/article/${relatedArticle.id}`">{{ relatedArticle.title }}</a></h5>
                        <span class="recent-post-date">{{ new Date(relatedArticle.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Tags Widget -->
                <div class="sidebar-widget">
                  <h4>Tags</h4>
                  <div class="tags-cloud">
                    <a v-for="tag in article.tags" :key="tag" href="#" class="tag">{{ tag }}</a>
                  </div>
                </div>
                
                <!-- Emergency Call Widget -->
                <div class="sidebar-widget emergency-widget">
                  <h4>Plumbing Emergency?</h4>
                  <p>We're available 24/7 for all your emergency plumbing needs.</p>
                  <a href="tel:5551234567" class="emergency-phone">(555) 123-4567</a>
                  <a href="/contact-us" class="btn btn-accent btn-block">Contact Us</a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Related Articles Section -->
      <section class="section related-articles-section">
        <div class="container">
          <h2 class="section-title">Related Articles</h2>
          
          <div class="related-articles-grid">
            <div v-for="(relatedArticle, index) in relatedArticles" :key="index" class="related-article-card">
              <div class="related-article-image">
                <img :src="relatedArticle.image" :alt="relatedArticle.title">
                <span class="category-badge">{{ relatedArticle.category }}</span>
              </div>
              <div class="related-article-content">
                <h3><a :href="`/article/${relatedArticle.id}`">{{ relatedArticle.title }}</a></h3>
                <p>{{ relatedArticle.excerpt }}</p>
                <a :href="`/article/${relatedArticle.id}`" class="read-more">Read More →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- CTA Section -->
      <section class="section cta-section">
        <div class="container">
          <div class="cta-content">
            <h2>Need Professional Plumbing Help?</h2>
            <p>Our team of experienced plumbers is ready to assist you with all your plumbing needs.</p>
            <a href="/contact-us" class="btn btn-primary">Contact Us Today</a>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  padding: 5rem 0;
}

.error-message {
  text-align: center;
  color: #f44336;
  padding: 5rem 0;
}

.article-hero {
  background-size: cover;
  background-position: center;
  color: white;
  padding: 5rem 0;
  text-align: center;
}

.article-hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.article-category {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(5px);
}

.article-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.article-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 0.9rem;
}

.author {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.article-section {
  padding-top: 3rem;
}

.article-content {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.article-content h2 {
  font-size: 1.8rem;
  color: #0e4c92;
  margin: 2rem 0 1rem;
}

.article-content h3 {
  font-size: 1.4rem;
  color: #1e88e5;
  margin: 1.5rem 0 1rem;
}

.article-content p {
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.article-content ul, .article-content ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.article-content li {
  margin-bottom: 0.5rem;
}

.article-tags {
  display: flex;
  align-items: center;
  margin: 2rem 0;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
}

.tags-title {
  font-weight: 600;
  margin-right: 1rem;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #f0f4f8;
  color: #0e4c92;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.tag:hover {
  background: #0e4c92;
  color: white;
}

.author-bio {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
}

.author-bio .author-avatar {
  width: 80px;
  height: 80px;
}

.author-info h3 {
  margin: 0 0 0.5rem;
}

.author-info p {
  margin: 0;
  font-size: 0.9rem;
}

.article-navigation {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  padding: 1.5rem 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.prev-article, .next-article {
  display: flex;
  flex-direction: column;
  max-width: 45%;
  text-decoration: none;
}

.next-article {
  text-align: right;
}

.nav-label {
  font-size: 0.8rem;
  color: #777;
  margin-bottom: 0.3rem;
}

.nav-title {
  font-weight: 600;
  color: #0e4c92;
  transition: all 0.3s ease;
}

.prev-article:hover .nav-title, .next-article:hover .nav-title {
  color: #1e88e5;
}

.comments-section {
  margin-top: 3rem;
}

.comments-section h3 {
  margin-bottom: 1.5rem;
}

.comment {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.comment-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.comment-content {
  flex: 1;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.comment-header h4 {
  margin: 0;
  color: #0e4c92;
}

.comment-date {
  font-size: 0.8rem;
  color: #777;
}

.comment-content p {
  margin: 0;
}

.comment-form {
  margin-top: 3rem;
}

.comment-form h3 {
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
}

.article-sidebar {
  position: sticky;
  top: 2rem;
}

.sidebar-widget {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.sidebar-widget h4 {
  font-size: 1.2rem;
  color: #0e4c92;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.sidebar-widget h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background: #ffa000;
  border-radius: 2px;
}

.author-card {
  text-align: center;
}

.sidebar-author-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.author-card h5 {
  font-size: 1.1rem;
  color: #0e4c92;
  margin-bottom: 0.5rem;
}

.author-card p {
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.author-link {
  display: inline-block;
  color: #1e88e5;
  font-weight: 600;
  text-decoration: none;
}

.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-list li {
  margin-bottom: 0.8rem;
}

.category-list a {
  display: flex;
  justify-content: space-between;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
}

.category-list a:hover {
  color: #0e4c92;
  padding-left: 5px;
}

.recent-posts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.recent-post {
  display: flex;
  gap: 1rem;
}

.recent-post-image {
  width: 70px;
  height: 70px;
  border-radius: 4px;
  object-fit: cover;
}

.recent-post-content h5 {
  font-size: 0.9rem;
  margin: 0 0 0.3rem;
}

.recent-post-content h5 a {
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
}

.recent-post-content h5 a:hover {
  color: #0e4c92;
}

.recent-post-date {
  font-size: 0.8rem;
  color: #777;
}

.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.emergency-widget {
  background: linear-gradient(to right, #0e4c92, #1e88e5);
  color: white;
  text-align: center;
}

.emergency-widget h4 {
  color: white;
}

.emergency-widget h4::after {
  background: #ffa000;
}

.emergency-phone {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffa000;
  margin: 1rem 0;
  text-decoration: none;
}

.btn-block {
  display: block;
  width: 100%;
}

.related-articles-section {
  background-color: #f8f9fa;
}

.related-articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.related-article-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.related-article-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.related-article-image {
  position: relative;
  height: 200px;
}

.related-article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.related-article-content {
  padding: 1.5rem;
}

.related-article-content h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.related-article-content h3 a {
  color: #0e4c92;
  text-decoration: none;
  transition: all 0.3s ease;
}

.related-article-content h3 a:hover {
  color: #1e88e5;
}

.read-more {
  display: inline-block;
  color: #1e88e5;
  font-weight: 600;
  text-decoration: none;
  margin-top: 1rem;
}

.cta-section {
  background: linear-gradient(90deg, #0e4c92, #1e88e5);
  color: white;
  text-align: center;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-content p {
  margin-bottom: 2rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .article-hero h1 {
    font-size: 2rem;
  }
  
  .article-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .article-navigation {
    flex-direction: column;
    gap: 1rem;
  }
  
  .prev-article, .next-article {
    max-width: 100%;
  }
  
  .next-article {
    text-align: left;
  }
  
  .comment {
    flex-direction: column;
  }
  
  .related-articles-grid {
    grid-template-columns: 1fr;
  }
}
</style>
