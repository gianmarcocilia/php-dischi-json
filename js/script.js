const { createApp } = Vue;
createApp({
    data() {
        return {
            filmList: [],
            apiUrl: 'server.php',
            infoFilm: [],
        }
    },
    created() {
        axios.get(this.apiUrl).then((resp) => {
            console.log(resp.data);
            this.filmList = resp.data;
        })
    },
    methods: {
        showInfoFilm(clickedIndex) {
            axios.get(this.apiUrl, {params: {
                index: clickedIndex
            }}).then((resp) => {
                console.log(resp.data);
                this.infoFilm = resp.data;
                console.log(this.infoFilm);
            })
        }
    },
}).mount('#app');