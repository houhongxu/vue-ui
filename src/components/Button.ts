import { h, defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: ["text"],
  setup(props: { text: string }) {
    return () => h("button", null, props.text);
  },
});
