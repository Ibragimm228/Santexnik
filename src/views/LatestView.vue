<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../client/supabase.js';
import Loader from '../components/Loader.vue';
import Tags from '../components/Tags.vue';

const articles = ref([]);
const loading = ref(true);
const error = ref(null);
const categories = ref([
  'Emergency Plumbing',
  'Bathroom Plumbing',
  'Kitchen Plumbing',
  'Water Heaters',
  'Drain Cleaning',
  'Sump Pumps',
  'Gas Lines',
  'Maintenance Tips'
]);

onMounted(async () => {
  try {
    loading.value = true;
    const { data, error: supabaseError } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (supabaseError) throw supabaseError;
    
    articles.value = data;
  } catch (err) {
    console.error('Error fetching articles:', err);
    error.value = 'Failed to load articles. Please try again later.';
  } finally {
    loading.value = false;
  }
});

const featuredArticles = ref([
  {
    id: 1,
    title: "Emergency Plumbing: What to Do When Disaster Strikes",
    excerpt: "Learn the essential steps to take during a plumbing emergency to minimize damage and get help fast.",
    image: "/emergency-plumbing.jpg",
    category: "Emergency Plumbing",
    author: "David Wilson",
    date: "2023-05-15"
  },
  {
    id: 2,
    title: "Water Heater Maintenance: Extend the Life of Your Unit",
    excerpt: "Regular maintenance can add years to your water heater's lifespan. Follow these expert tips to keep your unit running efficiently.",
    image: "/water-heater.jpg",
    category: "Water Heaters",
    author: "Lisa Rodriguez",
    date: "2023-04-22"
  },
  {
    id: 3,
    title: "5 Signs You Need to Replace Your Bathroom Fixtures",
    excerpt: "Don't ignore these warning signs that indicate it's time to upgrade your bathroom plumbing fixtures.",
    image: "/bathroom-fixtures.jpg",
    category: "Bathroom Plumbing",
    author: "Robert Kim",
    date: "2023-03-10"
  }
]);

const recentArticles = ref([
  {
    id: 4,
    title: "How to Unclog a Drain Without Harsh Chemicals",
    excerpt: "Try these eco-friendly methods to clear clogged drains before resorting to chemical drain cleaners.",
    image: "/unclog-drain.jpg",
    category: "Drain Cleaning",
    author: "Lisa Rodriguez",
    date: "2023-06-05"
  },
  {
    id: 5,
    title: "Choosing the Right Garbage Disposal for Your Kitchen",
    excerpt: "Find the perfect garbage disposal unit for your home with our comprehensive buying guide.",
    image: "/garbage-disposal.jpg",
    category: "Kitchen Plumbing",
    author: "David Wilson",
    date: "2023-05-28"
  },
  {
    id: 6,
    title: "Preventing Frozen Pipes: A Winter Preparation Guide",
    excerpt: "Protect your home from costly water damage with these tips to prevent pipes from freezing during cold weather.",
    image: "/frozen-pipes.jpg",
    category: "Maintenance Tips",
    author: "Robert Kim",
    date: "2023-05-20"
  },
  {
    id: 7,
    title: "Gas Line Safety: What Every Homeowner Should Know",
    excerpt: "Learn the essential safety precautions for homes with gas appliances and when to call a professional.",
    image: "/gas-line.jpg",
    category: "Gas Lines",
    author: "Lisa Rodriguez",
    date: "2023-05-12"
  }
]);

const filterByCategory = async (category) => {
  try {
    loading.value = true;
    
    if (category === 'All') {
      const { data, error: supabaseError } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (supabaseError) throw supabaseError;
      articles.value = data;
    } else {
      const { data, error: supabaseError } = await supabase
        .from('articles')
        .select('*')
        .eq('category', category)
        .order('created_at', { ascending: false });
      
      if (supabaseError) throw supabaseError;
      articles.value = data;
    }
  } catch (err) {
    console.error('Error filtering articles:', err);
    error.value = 'Failed to filter articles. Please try again later.';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <main>
    <!-- Hero Section -->
    <section class="blog-hero">
      <div class="container">
        <div class="blog-hero-content">
          <h1>Ace Plumbing Blog</h1>
          <p>Expert plumbing tips, advice, and insights from San Francisco's trusted plumbing professionals</p>
        </div>
      </div>
    </section>

    <!-- Featured Articles Section -->
    <section class="section featured-section">
      <div class="container">
        <h2 class="section-title">Featured Articles</h2>
        
        <div class="featured-grid">
          <div v-for="article in featuredArticles" :key="article.id" class="featured-card">
            <div class="featured-image">
              <img :src="article.image" :alt="article.title">
              <span class="category-badge">{{ article.category }}</span>
            </div>
            <div class="featured-content">
              <h3><a :href="`/article/${article.id}`">{{ article.title }}</a></h3>
              <p class="excerpt">{{ article.excerpt }}</p>
              <div class="meta">
                <span class="author">By {{ article.author }}</span>
                <span class="date">{{ new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
              </div>
              <a :href="`/article/${article.id}`" class="read-more">Read More →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="section categories-section">
      <div class="container">
        <h2 class="section-title">Browse by Category</h2>
        
        <div class="categories-container">
          <button 
            class="category-button" 
            :class="{ active: category === 'All' }"
            @click="filterByCategory('All')"
          >
            All
          </button>
          <button 
            v-for="category in categories" 
            :key="category" 
            class="category-button"
            @click="filterByCategory(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- All Articles Section -->
    <section class="section articles-section">
      <div class="container">
        <h2 class="section-title">Latest Articles</h2>
        
        <div v-if="loading" class="loader-container">
          <Loader />
        </div>
        
        <div v-else-if="error" class="error-message">
          {{ error }}
        </div>
        
        <div v-else-if="articles.length === 0" class="no-articles">
          <p>No articles found. Please try a different category or check back later.</p>
        </div>
        
        <div v-else class="articles-grid">
          <!-- This will display articles from Supabase when available -->
          <div v-for="article in articles" :key="article.id" class="article-card">
            <div class="article-image">
              <img :src="article.image_url || '/default-article.jpg'" :alt="article.title">
              <span class="category-badge">{{ article.category }}</span>
            </div>
            <div class="article-content">
              <h3><a :href="`/article/${article.id}`">{{ article.title }}</a></h3>
              <p class="excerpt">{{ article.excerpt }}</p>
              <div class="meta">
                <span class="author">By {{ article.author }}</span>
                <span class="date">{{ new Date(article.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
              </div>
              <a :href="`/article/${article.id}`" class="read-more">Read More →</a>
            </div>
          </div>
          
          <!-- Fallback to recent articles if Supabase data is not available -->
          <div v-if="articles.length === 0" v-for="article in recentArticles" :key="article.id" class="article-card">
            <div class="article-image">
              <img :src="article.image" :alt="article.title">
              <span class="category-badge">{{ article.category }}</span>
            </div>
            <div class="article-content">
              <h3><a :href="`/article/${article.id}`">{{ article.title }}</a></h3>
              <p class="excerpt">{{ article.excerpt }}</p>
              <div class="meta">
                <span class="author">By {{ article.author }}</span>
                <span class="date">{{ new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
              </div>
              <a :href="`/article/${article.id}`" class="read-more">Read More →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="section newsletter-section">
      <div class="container">
        <div class="newsletter-container">
          <div class="newsletter-content">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Stay updated with the latest plumbing tips, advice, and special offers from Ace Plumbing.</p>
          </div>
          <div class="newsletter-form">
            <input type="email" placeholder="Your email address" class="newsletter-input">
            <button class="newsletter-button">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.blog-hero {
  background: linear-gradient(rgba(14, 76, 146, 0.8), rgba(14, 76, 146, 0.8)), url('/blog-hero.jpg') no-repeat center center;
  background-size: cover;
  color: white;
  padding: 5rem 0;
  text-align: center;
}

.blog-hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.blog-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.blog-hero p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.featured-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.featured-image {
  position: relative;
  height: 200px;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(14, 76, 146, 0.8);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.featured-content {
  padding: 1.5rem;
}

.featured-content h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.featured-content h3 a {
  color: #0e4c92;
  text-decoration: none;
  transition: all 0.3s ease;
}

.featured-content h3 a:hover {
  color: #1e88e5;
}

.excerpt {
  color: #555;
  margin-bottom: 1rem;
}

.meta {
  display: flex;
  justify-content: space-between;
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.read-more {
  display: inline-block;
  color: #1e88e5;
  font-weight: 600;
  text-decoration: none;
}

.categories-section {
  background-color: #f8f9fa;
}

.categories-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.category-button {
  background: white;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 0.5rem 1.2rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-button:hover, .category-button.active {
  background: #0e4c92;
  color: white;
  border-color: #0e4c92;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.article-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.article-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.article-image {
  position: relative;
  height: 200px;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-content {
  padding: 1.5rem;
}

.article-content h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.article-content h3 a {
  color: #0e4c92;
  text-decoration: none;
  transition: all 0.3s ease;
}

.article-content h3 a:hover {
  color: #1e88e5;
}

.loader-container {
  display: flex;
  justify-content: center;
  padding: 3rem 0;
}

.error-message {
  text-align: center;
  color: #f44336;
  padding: 2rem 0;
}

.no-articles {
  text-align: center;
  padding: 2rem 0;
  color: #555;
}

.newsletter-section {
  background: linear-gradient(90deg, #0e4c92, #1e88e5);
  color: white;
}

.newsletter-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.newsletter-content h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.newsletter-content p {
  opacity: 0.9;
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
  flex: 1;
  max-width: 500px;
}

.newsletter-input {
  flex: 1;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 4px;
  outline: none;
}

.newsletter-button {
  background: #ffa000;
  color: #333;
  border: none;
  border-radius: 4px;
  padding: 0 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.newsletter-button:hover {
  background: darken(#ffa000, 10%);
}

@media (max-width: 768px) {
  .blog-hero h1 {
    font-size: 2rem;
  }
  
  .blog-hero p {
    font-size: 1rem;
  }
  
  .featured-grid,
  .articles-grid {
    grid-template-columns: 1fr;
  }
  
  .newsletter-container {
    flex-direction: column;
    text-align: center;
  }
  
  .newsletter-form {
    width: 100%;
    max-width: 100%;
  }
}
</style>
