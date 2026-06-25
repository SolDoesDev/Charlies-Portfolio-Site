<template>
  <div class="home-page">
    <div class="heading">Welcome to NightWolfe Cinema</div>
    <br />
    <div class="sub-heading">Where Visions Howl to Life</div>
    <br />
    <p class="mission-statement-text">
      At Nightwolfe Cinema, we believe every story deserves to be seen, heard,
      and felt. Through expert cinematography, videography, and cutting-edge
      audio/video editing, we transform ideas into powerful visual experiences.
      With a passion for storytelling and an unwavering commitment to quality,
      we bring creativity to the forefront, ensuring each project is as bold and
      dynamic as the vision behind it.
    </p>
    <div class="video-container">
      <video width="640" height="360" controls>
        <source src="../assets/videos/nightwolfecinema.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
