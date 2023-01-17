
const app = Vue.createApp({
    template: "#app",
    data() {
        return {
            title: "Hello World",
            href: "https://www.goodreads.com/"
        }
    },
    methods: {
        handleChange(e) {
            this.title = e.target.value;
        }
    }
});
 
app.mount("#root");