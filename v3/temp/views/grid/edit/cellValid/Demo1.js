import Vue from 'vue';
import { VxeUI } from 'vxe-table';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            showOverflow: true,
            keepSource: true,
            height: 300,
            editConfig: {
                trigger: 'click',
                mode: 'cell',
                showStatus: true
            },
            editRules: {
                role: [
                    { required: true, message: '必须填写' }
                ]
            },
            columns: [
                { type: 'checkbox', width: 60 },
                { type: 'seq', width: 70 },
                { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
                { field: 'role', title: 'Role', editRender: { name: 'VxeInput' } },
                { field: 'sex', title: 'Sex', editRender: { name: 'VxeInput' } },
                { field: 'age', title: 'Age', editRender: { name: 'VxeInput' } },
                { field: 'date', title: 'Date', editRender: { name: 'VxeInput' } }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
                { id: 10002, name: '', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: '', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: '', age: 23, address: 'test abc' },
                { id: 10005, name: '', role: '', sex: '1', age: 30, address: 'Shanghai' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
            ]
        };
        return {
            gridOptions
        };
    },
    methods: {
        async validEvent() {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                const errMap = await $grid.validate();
                if (errMap) {
                    VxeUI.modal.message({ status: 'error', content: '校验不通过！' });
                }
                else {
                    VxeUI.modal.message({ status: 'success', content: '校验成功！' });
                }
            }
        },
        async fullValidEvent() {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                const errMap = await $grid.validate(true);
                if (errMap) {
                    VxeUI.modal.message({ status: 'error', content: '校验不通过！' });
                }
                else {
                    VxeUI.modal.message({ status: 'success', content: '校验成功！' });
                }
            }
        }
    }
});
