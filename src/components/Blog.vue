<script setup>
import { ref, onMounted } from 'vue'
import { formatDate } from '@/utils/formatDate.js'
import { useRouter } from 'vue-router'
import { supabase } from '@/client/supabase'

const articles = ref([])
const router = useRouter()
const isLoading = ref(true)

const fetchArticles = async () => {
  isLoading.value = true
  try {
    const { data, error } = await supabase
      .from('ashley_articles')//ashley_articles
      .select('*')
      .order('published_date', { ascending: false })
      .limit(7)
    if (error) throw error
    articles.value = data
    isLoading.value = false
  } catch (error) {
    console.error('Error fetching articles:', error)
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
  fetchArticles()
})
</script>

<template>
  <main class="blog-main-content">
    <section class="latest-posts">
      <div class="section-header">
        <div class="header-content">
          <span class="section-badge">Latest</span>
          <h3 class="section-title">Recent Articles</h3>
          <p class="section-subtitle">
            Discover our newest insights and updates
          </p>
        </div>
      </div>

      <div class="articles-grid">
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
    </section>
  </main>
</template>

<style scoped>
.blog-main-content {
  margin-bottom: 4rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 1rem 3rem 1rem;
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
  background: #2563eb;
  color: white;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}
.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 0.75rem;
  letter-spacing: -0.025em;
}
.section-subtitle {
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
  color: #2563eb;
  margin-bottom: 1rem;
  line-height: 1.4;
  letter-spacing: -0.025em;
}
.featured .article-title {
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
  background: #2563eb;
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
  background: #1e40af;
  transform: translateY(-2px);
}
.btn-icon {
  display: flex;
  align-items: center;
  transition: transform 0.2s;
}
@media (max-width: 768px) {
  .blog-main-content {
    padding: 1.2rem 0.4rem 2rem 0.4rem;
  }
  .article-card.featured {
    grid-column: span 1;
  }
  .section-title {
    font-size: 1.48rem;
  }
  .articles-grid {
    grid-template-columns: 1fr;
  }
  .card-inner {
    padding: 1.15rem 1rem;
  }
}
@media (max-width: 480px) {
  .blog-main-content {
    padding: 0.6rem 0.2rem;
  }
}
</style>
