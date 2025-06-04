<script setup>
import { ref, onMounted } from 'vue'
import Search from './components/Search.vue'
import Footer from './components/Footer.vue'

const isMenuOpen = ref(false)
const showScrollButton = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const menuItems = [
  { name: 'Home', link: '/', icon: 'home' },
  { name: 'Services', link: '/services', icon: 'tools' },
  { name: 'About', link: '/about', icon: 'info' },
  { name: 'Blog', link: '/blog', icon: 'book' },
  { name: 'Contact', link: '/contact-us', icon: 'phone' }
]

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  const scrollY = window.scrollY
  showScrollButton.value = scrollY > 300
  isScrolled.value = scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="industrial-header" :class="{ 'scrolled': isScrolled, 'menu-active': isMenuOpen }">
    <!-- Emergency Banner -->
    <div class="emergency-strip">
      <div class="container">
        <div class="emergency-content">
          <div class="emergency-badge">
            <svg class="emergency-icon" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
            </svg>
            <span>24/7</span>
          </div>
          <span class="emergency-text">Emergency Plumbing • Professional Service • Fast Response</span>
          <a href="tel:+15551234567" class="emergency-cta">
            <svg class="cta-icon" viewBox="0 0 24 24">
              <path d="M22 16.92V19.92C22 20.47 21.79 20.999 21.41 21.374C21.04 21.749 20.51 21.96 19.96 21.96H19.92C9.41 21.96 1 13.55 1 3.03V2.99C1 2.44 1.21 1.91 1.59 1.54C1.97 1.17 2.5 0.96 3.05 0.96H6.05C6.48 0.96 6.89 1.12 7.21 1.4C7.53 1.68 7.72 2.06 7.74 2.46L8.26 6.96C8.29 7.44 8.14 7.91 7.84 8.27C7.54 8.63 7.12 8.85 6.67 8.89L4.14 9.17C5.24 12.45 7.55 14.76 10.83 15.86L11.11 13.33C11.15 12.88 11.37 12.46 11.73 12.16C12.09 11.86 12.56 11.71 13.04 11.74L17.54 12.26C17.94 12.28 18.32 12.47 18.6 12.79C18.88 13.11 19.04 13.52 19.04 13.95V16.95"/>
            </svg>
            Call Now
          </a>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <div class="main-header">
      <div class="container">
        <div class="header-grid">
          <!-- Brand Section -->
          <div class="brand-section">
            <a href="/" class="brand-link">
              <div class="brand-icon">
                <svg class="wrench-icon" viewBox="0 0 24 24">
                  <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 0.6 4.7 1.7L9 6L6 9L1.6 4.7C0.4 7.1 0.9 10.1 2.9 12.1C4.8 14 7.5 14.5 9.8 13.6L18.9 22.7C19.3 23.1 19.9 23.1 20.3 22.7L22.6 20.4C23.1 20 23.1 19.3 22.7 19Z"/>
                </svg>
                <div class="brand-accent"></div>
              </div>
              <div class="brand-text">
                <h1 class="brand-name">ACE<span class="brand-suffix">PLUMBING</span></h1>
                <div class="brand-tagline">Professional • Reliable • Expert</div>
              </div>
            </a>
          </div>

          <!-- Navigation -->
          <nav class="desktop-nav">
            <ul class="nav-list">
              <li v-for="item in menuItems" :key="item.name" class="nav-item">
                <a :href="item.link" class="nav-link">
                  <svg class="nav-icon" viewBox="0 0 24 24">
                    <path v-if="item.icon === 'home'" d="M3 12L5 10L12 3L19 10L21 12M5 12V20A1 1 0 0 0 6 21H9V16A1 1 0 0 1 10 15H14A1 1 0 0 1 15 16V21H18A1 1 0 0 0 19 20V12"/>
                    <path v-if="item.icon === 'tools'" d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 0.6 4.7 1.7L9 6L6 9L1.6 4.7C0.4 7.1 0.9 10.1 2.9 12.1C4.8 14 7.5 14.5 9.8 13.6L18.9 22.7C19.3 23.1 19.9 23.1 20.3 22.7L22.6 20.4C23.1 20 23.1 19.3 22.7 19Z"/>
                    <path v-if="item.icon === 'info'" d="M13 16H12V12H11M12 8H12.01M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z"/>
                    <path v-if="item.icon === 'book'" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    <path v-if="item.icon === 'phone'" d="M22 16.92V19.92C22 20.47 21.79 20.999 21.41 21.374C21.04 21.749 20.51 21.96 19.96 21.96H19.92C9.41 21.96 1 13.55 1 3.03V2.99C1 2.44 1.21 1.91 1.59 1.54C1.97 1.17 2.5 0.96 3.05 0.96H6.05"/>
                  </svg>
                  <span class="nav-text">{{ item.name }}</span>
                </a>
              </li>
            </ul>
          </nav>

          <!-- CTA & Mobile -->
          <div class="header-actions">
            <a href="/contact-us" class="cta-button">
              <span>Get Quote</span>
              <svg class="cta-arrow" viewBox="0 0 24 24">
                <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
              </svg>
            </a>

            <button class="mobile-trigger" @click="toggleMenu" :class="{ active: isMenuOpen }">
              <span class="trigger-line"></span>
              <span class="trigger-line"></span>
              <span class="trigger-line"></span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-slide">
      <div v-if="isMenuOpen" class="mobile-menu">
        <div class="mobile-overlay" @click="toggleMenu"></div>
        <div class="mobile-panel">
          <div class="mobile-header">
            <div class="mobile-brand">
              <div class="brand-icon mobile">
                <svg class="wrench-icon" viewBox="0 0 24 24">
                  <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 0.6 4.7 1.7L9 6L6 9L1.6 4.7C0.4 7.1 0.9 10.1 2.9 12.1C4.8 14 7.5 14.5 9.8 13.6L18.9 22.7C19.3 23.1 19.9 23.1 20.3 22.7L22.6 20.4C23.1 20 23.1 19.3 22.7 19Z"/>
                </svg>
              </div>
              <span class="mobile-brand-text">ACE PLUMBING</span>
            </div>
            <button class="mobile-close" @click="toggleMenu">
              <svg viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6L18 18"/>
              </svg>
            </button>
          </div>

          <Search />

          <nav class="mobile-nav">
            <ul class="mobile-nav-list">
              <li v-for="item in menuItems" :key="item.name" class="mobile-nav-item">
                <a :href="item.link" @click="toggleMenu" class="mobile-nav-link">
                  <svg class="mobile-nav-icon" viewBox="0 0 24 24">
                    <path v-if="item.icon === 'home'" d="M3 12L5 10L12 3L19 10L21 12M5 12V20A1 1 0 0 0 6 21H9V16A1 1 0 0 1 10 15H14A1 1 0 0 1 15 16V21H18A1 1 0 0 0 19 20V12"/>
                    <path v-if="item.icon === 'tools'" d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 0.6 4.7 1.7L9 6L6 9L1.6 4.7C0.4 7.1 0.9 10.1 2.9 12.1C4.8 14 7.5 14.5 9.8 13.6L18.9 22.7C19.3 23.1 19.9 23.1 20.3 22.7L22.6 20.4C23.1 20 23.1 19.3 22.7 19Z"/>
                    <path v-if="item.icon === 'info'" d="M13 16H12V12H11M12 8H12.01M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z"/>
                    <path v-if="item.icon === 'book'" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    <path v-if="item.icon === 'phone'" d="M22 16.92V19.92C22 20.47 21.79 20.999 21.41 21.374C21.04 21.749 20.51 21.96 19.96 21.96H19.92C9.41 21.96 1 13.55 1 3.03V2.99C1 2.44 1.21 1.91 1.59 1.54C1.97 1.17 2.5 0.96 3.05 0.96H6.05"/>
                  </svg>
                  <span>{{ item.name }}</span>
                </a>
              </li>
            </ul>
          </nav>

          <div class="mobile-cta">
            <a href="tel:+15551234567" class="mobile-cta-button">
              <svg class="mobile-cta-icon" viewBox="0 0 24 24">
                <path d="M22 16.92V19.92C22 20.47 21.79 20.999 21.41 21.374C21.04 21.749 20.51 21.96 19.96 21.96H19.92C9.41 21.96 1 13.55 1 3.03V2.99C1 2.44 1.21 1.91 1.59 1.54C1.97 1.17 2.5 0.96 3.05 0.96H6.05"/>
              </svg>
              Emergency Call
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>

  <RouterView />

  <Footer />

  <!-- Scroll to Top -->
  <button v-if="showScrollButton" @click="scrollToTop" class="scroll-top-btn">
    <svg viewBox="0 0 24 24">
      <path d="M12 19V5M12 5L5 12M12 5L19 12"/>
    </svg>
  </button>
</template>

<style scoped>
/* Industrial Header Styles */
.industrial-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.industrial-header.scrolled {
  background: rgba(26, 26, 26, 0.98);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Emergency Strip */
.emergency-strip {
  background: linear-gradient(135deg, #e67e22, #d35400);
  padding: 0.75rem 0;
  position: relative;
  overflow: hidden;
}

.emergency-strip::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(255, 255, 255, 0.1) 10px,
    rgba(255, 255, 255, 0.1) 20px
  );
  animation: drift 20s linear infinite;
}

@keyframes drift {
  0% { transform: translateX(-20px); }
  100% { transform: translateX(20px); }
}

.emergency-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.emergency-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-weight: 700;
  color: white;
  font-size: 0.875rem;
}

.emergency-icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
  animation: sparkle 2s ease-in-out infinite;
}

@keyframes sparkle {
  0%, 100% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
}

.emergency-text {
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

.emergency-cta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.emergency-cta:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
  color: white;
}

.cta-icon {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

/* Main Header */
.main-header {
  padding: 1rem 0;
  background: rgba(26, 26, 26, 0.95);
}

.header-grid {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2rem;
}

/* Brand Section */
.brand-section {
  display: flex;
  align-items: center;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.brand-link:hover {
  transform: translateY(-1px);
}

.brand-icon {
  position: relative;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #34495e, #2c3e50);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.brand-icon.mobile {
  width: 40px;
  height: 40px;
  border-radius: 8px;
}

.wrench-icon {
  width: 24px;
  height: 24px;
  fill: #e67e22;
  transition: all 0.3s ease;
}

.brand-link:hover .wrench-icon {
  transform: rotate(15deg) scale(1.1);
}

.brand-accent {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 12px;
  height: 12px;
  background: #e67e22;
  border-radius: 50%;
  border: 2px solid #1a1a1a;
}

.brand-text {
  color: white;
}

.brand-name {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: -0.5px;
  line-height: 1;
}

.brand-suffix {
  color: #e67e22;
  margin-left: 2px;
}

.brand-tagline {
  margin: 0;
  font-size: 0.75rem;
  color: #94a3b8;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 2px;
}

/* Desktop Navigation */
.desktop-nav {
  justify-self: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  color: #cbd5e1;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(230, 126, 34, 0.1), transparent);
  transition: left 0.5s;
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover {
  color: #e67e22;
  background: rgba(230, 126, 34, 0.1);
  transform: translateY(-2px);
}

.nav-icon {
  width: 18px;
  height: 18px;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.cta-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #e67e22, #d35400);
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(230, 126, 34, 0.3);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(230, 126, 34, 0.4);
  color: white;
}

.cta-arrow {
  width: 16px;
  height: 16px;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.3s ease;
}

.cta-button:hover .cta-arrow {
  transform: translateX(3px);
}

/* Mobile Trigger */
.mobile-trigger {
  display: none;
  flex-direction: column;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
  gap: 4px;
  transition: all 0.3s ease;
}

.mobile-trigger:hover {
  background: rgba(255, 255, 255, 0.15);
}

.trigger-line {
  width: 20px;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin: 0 auto;
}

.mobile-trigger.active .trigger-line:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.mobile-trigger.active .trigger-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.mobile-trigger.active .trigger-line:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
}

.mobile-overlay {
  flex: 1;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
}

.mobile-panel {
  width: 320px;
  background: #1a1a1a;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
}

.mobile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.mobile-brand-text {
  color: white;
  font-weight: 900;
  font-size: 1.1rem;
  letter-spacing: -0.5px;
}

.mobile-close {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.mobile-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.mobile-close svg {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Mobile Navigation */
.mobile-nav {
  flex: 1;
  margin: 1rem 0;
}

.mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-nav-item {
  margin-bottom: 0.5rem;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: #cbd5e1;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.mobile-nav-link:hover {
  color: #e67e22;
  background: rgba(230, 126, 34, 0.1);
  transform: translateX(5px);
}

.mobile-nav-icon {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Mobile CTA */
.mobile-cta {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-cta-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  background: linear-gradient(135deg, #e67e22, #d35400);
  color: white;
  text-decoration: none;
  padding: 1rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.mobile-cta-button:hover {
  transform: translateY(-2px);
  color: white;
}

.mobile-cta-icon {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Animations */
.mobile-slide-enter-active,
.mobile-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.mobile-slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Scroll to Top */
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #34495e, #2c3e50);
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
}

.scroll-top-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
}

.scroll-top-btn svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .header-grid {
    grid-template-columns: auto 1fr auto;
    gap: 1rem;
  }
  
  .desktop-nav {
    display: none;
  }
  
  .mobile-trigger {
    display: flex;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .emergency-content {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
  
  .emergency-text {
    font-size: 0.8rem;
  }
  
  .brand-name {
    font-size: 1.25rem;
  }
  
  .brand-tagline {
    font-size: 0.7rem;
  }
  
  .mobile-panel {
    width: 280px;
  }
  
  .scroll-top-btn {
    bottom: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
  }
}

@media (max-width: 480px) {
  .emergency-content {
    flex-wrap: wrap;
  }
  
  .emergency-badge {
    order: 1;
  }
  
  .emergency-text {
    order: 3;
    width: 100%;
  }
  
  .emergency-cta {
    order: 2;
  }
  
  .header-grid {
    gap: 0.5rem;
  }
  
  .cta-button {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}
</style>
