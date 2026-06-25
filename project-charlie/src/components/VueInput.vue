<!-- TODO: Make sure to add links to the social media icons; -->

<template>
    <div class="input-container">
        <label>{{ this.label }}</label>
        <input type="text" :placeholder="this.placeholder" />
    </div>
</template>

<script>
export default {
    name: 'VueInput',
    props: {
        type: {
            type: String,
            default: 'text'
        },
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