import Vue from 'vue';
const mockList = [
    { name: 'Test1', role: 'Develop', sex: '男' },
    { name: 'Test2', role: 'Test', sex: '女' },
    { name: 'Test3', role: 'PM', sex: '男' },
    { name: 'Test43', role: 'Designer', sex: '女' },
    { name: 'Test512', role: 'Develop', sex: '男' },
    { name: 'Test61', role: 'Develop', sex: '男' },
    { name: 'Test71', role: 'Designer', sex: '女' },
    { name: 'Test58', role: 'Develop', sex: '男' },
    { name: 'Test77', role: 'Test', sex: '女' },
    { name: 'Test916', role: 'Develop', sex: '男' },
    { name: 'Test28', role: 'Test', sex: '女' },
    { name: 'Test121', role: 'Develop', sex: '男' },
    { name: 'Test834', role: 'PM', sex: '女' },
    { name: 'Test316', role: 'Develop', sex: '女' },
    { name: 'Test97', role: 'PM', sex: '男' },
    { name: 'Test41', role: 'Develop', sex: '女' },
    { name: 'Test27', role: 'PM', sex: '男' },
    { name: 'Test3218', role: 'PM', sex: '女' }
];
export default Vue.extend({
    props: {
        value: String
    },
    data() {
        const gridOptions = {
            border: true,
            autoResize: true,
            loading: false,
            height: 300,
            rowConfig: {
                isHover: true
            },
            columns: [
                { field: 'name', title: 'Name' },
                { field: 'role', title: 'Role' },
                { field: 'sex', title: 'Sex' }
            ],
            data: mockList
        };
        return {
            showPopup: false,
            gridOptions
        };
    },
    methods: {
        cellClickEvent({ row }) {
            this.$emit('input', row.role);
            this.showPopup = false;
        },
        focusEvent() {
            this.$nextTick(() => {
                this.showPopup = true;
            });
        }
    }
});
