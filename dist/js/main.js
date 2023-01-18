
const app = Vue.createApp({
    template: "#app",
    data() {
        return {
            title: "Hello World",
            href: "https://www.goodreads.com/",
            subtitle: "subtitle",
            obj: {
                inner: "test"
            }
        }
    },

    watch: {
        title(curVal, prevVal) {
            console.log(curVal, "|", prevVal);
            this.subtitle = this.title.split(" ").reverse(). join(" ");
        }
    },

    methods: {
        handleChange(title) {
            this.title = title
        }
    }
});
 
app.mount("#root");