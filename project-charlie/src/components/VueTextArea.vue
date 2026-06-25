<!-- TODO: Make sure to add links to the social media icons; -->

<template>
    <div class="textarea-container">
        <label>{{ this.label }}</label>
        <textarea :placeholder="this.placeholder" />
    </div>
</template>

<script>
export default {
    name: 'VueTextArea',
    props: {
        label: {
            type: String,
            default: 'Label'
        },
        placeholder: {
            type: String,
            default: 'Enter something...'
        }
    }
}
</script>