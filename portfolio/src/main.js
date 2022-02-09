import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";

const messages = {
    en: {
        hello: "Hello there",
        projects: "Projects"
    },
    ja: {
        hello: "こんにちは、世界"
    }
}

const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    globalInjection: true,
    messages: messages
})

createApp(App).use(router).use(i18n).mount("#app");
