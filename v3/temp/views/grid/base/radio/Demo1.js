import Vue from 'vue';
import { VxeUI } from 'vxe-table';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            height: 300,
            radioConfig: {
                highlight: true
            },
            columns: [
                { type: 'radio', width: 60, slots: { header: 'radioHeader' } },
                { field: 'sex', title: 'Sex' },
                { field: 'age', title: 'Age' },
                { field: 'address', title: 'Address', showOverflow: true }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
            ]
        };
        return {
            gridOptions,
            selectRow: null
        };
    },
    methods: {
        cellClickEvent() {
            console.log('单元格点击事件');
        },
        radioChangeEvent({ row }) {
            this.selectRow = row;
            console.log('单选事件');
        },
        setSelectRow(index) {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                $grid.setRadioRow(this.gridOptions.data[index]);
            }
        },
        clearRadioRowEvent() {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                this.selectRow = null;
                $grid.clearRadioRow();
            }
        },
        getRadioEvent() {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                const currRow = $grid.getRadioRecord();
                VxeUI.modal.alert(JSON.stringify(currRow));
            }
        }
    }
});
