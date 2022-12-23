/* 封装一个自定义组件 */
export default {
    data() {
        return {
            count: 0
        }
    },

    template: `
    <div>
        <h2>child btn</h2>
        <button @click = "count++">click me</button>
        <span>{{count}}</span>
    </div>
    `
}