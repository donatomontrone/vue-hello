const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            urlImage: 'https://picsum.photos/300/200?random=1'
        }
    }
}).mount('#app')