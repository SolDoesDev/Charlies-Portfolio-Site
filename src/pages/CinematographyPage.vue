<template>
    <div class="cinema-page">
        <div class="heading">My Cinema</div>
        <br />
        <div class="sub-heading">Where Visions Howl to Life</div>
        <br />
        <div class="video-list-container">
            <div v-if="videos?.length" class="video-list">
                <div v-for="video in videos" :key="video.id.videoId" class="video">
                    <!-- <h3>{{ video.snippet.title }}</h3> -->
                    <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${video.id.videoId}`"
                        frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <p v-else>Loading videos...</p>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
    name: 'CinematographyPage',
    data() {
        return {
            videos: ref([]),
        };
    },
    methods: {
        async fetchVideos() {
            try {
                const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;
                const CHANNEL_ID = process.env.VUE_APP_YOUTUBE_CHANNEL_KEY;
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/search`,
                    {
                        params: {
                            part: "snippet",
                            channelId: CHANNEL_ID,
                            maxResults: 10,
                            order: "date",
                            type: "video",
                            key: API_KEY,
                        },
                    }
                );
                this.videos = response.data.items;
            } catch (error) {
                console.error("Error fetching YouTube videos:", error);
            }
        },
    },
    mounted() {
        this.fetchVideos();
    },
}
</script>