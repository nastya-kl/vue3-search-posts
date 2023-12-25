import { createApp } from "vue";
import App from "./App.vue";
import components from "@/components/UI";
import router from "@/components/router/router";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).mount("#app");

/* 
Полезное:
v-on или кратко @ - обработчик клика
v-for - для работы с массивами внутри шаблона
# v-for="post in posts" - post (отдельно взятый элемент итерации), in posts (откуда взят элемент, т.е. сам массив), т.о. получается цикл, увнутри к-го мы можем работать
v-bind или кратко : - позволяет связывать данные с компонентом
@input - подписываемся на событие инпута и забираем с него value
*/
