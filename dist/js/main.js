
const app = Vue.createApp({
    template: "#app",
    data() {
        return {
            title: "Hello World",
            href: "https://www.goodreads.com/"
        }
    },
    
    methods: {
        handleChange(title) {
            this.title = title
        }
    }
});
 
app.mount("#root");