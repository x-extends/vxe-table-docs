import Vue from 'vue';
import { VxeUI } from 'vxe-table';
export default Vue.extend({
    data() {
        const gridOptions = {
            height: 300,
            rowConfig: {
                isCurrent: true,
                isHover: true
            },
            columns: [
                { type: 'seq', width: 70 },
                { field: 'name', title: 'Name' },
                { field: 'sex', title: 'Sex' },
                { field: 'age', title: 'Age' },
                { field: 'address', title: 'Address', showOverflow: true }
            ],
            data: [
                { name: 'Test1', role: 'Develop', sex: 'Man', age: 28, content: 'test abc' },
                { name: 'Test2', role: 'Test', sex: 'Women', age: 41, content: 'Guangzhou' },
                { name: 'Test3', role: 'PM', sex: 'Man', age: 32, content: 'Shanghai' },
                { name: 'Test4', role: 'Designer', sex: 'Women', age: 24, content: 'Shanghai' }
            ]
        };
        return {
            gridOptions
        };
    },
    methods: {
        currentChangeEvent({ rowIndex }) {
            console.log(`行选中事件 ${rowIndex}`);
        },
        selectRowEvent() {
            const $grid = this.$refs.gridRef;
            if ($grid && this.gridOptions.data) {
                $grid.setCurrentRow(this.gridOptions.data[1]);
            }
        },
        clearSelectEvent() {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                $grid.clearCurrentRow();
            }
        },
        getCurrentEvent() {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                VxeUI.modal.alert(JSON.stringify($grid.getCurrentRecord()));
            }
        }
    }
});
