<!-- TODO: Make sure to add links to the social media icons; -->

<template>
  <div class="footer-section">
      <p>For inquiries please email nightwolfecinema@outlook.com or nightwolfecinema@icloud.com</p>
      <p>or reach me at:</p>
      <div class="footer-social-media-container">
        <a class="social-link" href="https://www.instagram.com/nightwolfecinema91/" target="_blank">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a class="social-link" href="https://www.facebook.com/profile.php?id=61574846976526" target="_blank">
          <font-awesome-icon :icon="['fab', 'facebook']" />
        </a>
        <a class="social-link" href="https://www.youtube.com/@nightwolfecinema" target="_blank">
          <font-awesome-icon :icon="['fab', 'youtube']" />
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'FooterSection',
}
</script>
