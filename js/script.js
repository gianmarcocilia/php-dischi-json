const { createApp } = Vue;
createApp({
    data() {
        return {
            filmList: [],
            apiUrl: 'server.php',
        }
    },
    created() {
        axios.get(this.apiUrl).then((resp) => {
            console.log(resp.data);
            this.filmList = resp.data;
        })
    },
    methods: {

    },
}).mount('#app');