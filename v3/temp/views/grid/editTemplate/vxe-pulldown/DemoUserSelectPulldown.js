import Vue from 'vue';
export default Vue.extend({
    props: {
        value: String
    },
    data() {
        const userList = [
            { label: 'test1', value: 'test1' },
            { label: 'test2', value: 'test2' },
            { label: 'test3', value: 'test3' },
            { label: 'test4', value: 'test4' },
            { label: 'test5', value: 'test5' },
            { label: 'test6', value: 'test6' },
            { label: 'test7', value: 'test7' },
            { label: 'test8', value: 'test8' },
            { label: 'test9', value: 'test9' },
            { label: 'test10', value: 'test10' },
            { label: 'test11', value: 'test11' },
            { label: 'test12', value: 'test12' },
            { label: 'test13', value: 'test13' }
        ];
        return {
            showPopup: false,
            userList
        };
    },
    methods: {
        focusEvent() {
            this.$nextTick(() => {
                this.showPopup = true;
            });
        },
        selectUser(item) {
            this.showPopup = false;
            this.$emit('input', item.value);
        }
    }
});
