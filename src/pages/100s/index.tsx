import { NButton } from 'naive-ui'

export default defineComponent({
  setup() {
    return () => <div>
      {[1, 2, 3, 4, 5].map(item => <div class="color-pink">{item}</div>)}
      <NButton type="success">test</NButton>
    </div>
  },
})
