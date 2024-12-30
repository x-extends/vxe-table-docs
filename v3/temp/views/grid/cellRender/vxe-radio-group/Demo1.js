import Vue from 'vue';
export default Vue.extend({
    data() {
        const hobby1CellRender = {
            name: 'VxeRadioGroup',
            props: {
                disabled: true
            },
            options: [
                { label: '爬山', value: '1' },
                { label: '游泳', value: '2' },
                { label: '干饭', value: '3' }
            ]
        };
        const hobby2CellRender = {
            name: 'VxeRadioGroup',
            options: [
                { label: '爬山', value: '1' },
                { label: '游泳', value: '2' },
                { label: '干饭', value: '3' }
            ]
        };
        const gridOptions = {
            border: true,
            showOverflow: true,
            columns: [
                { type: 'seq', width: 70 },
                { field: 'name', title: 'Name', minWidth: 200 },
                { field: 'hobby1', title: '只读', width: 300, cellRender: hobby1CellRender },
                { field: 'hobby2', title: '编辑', width: 300, cellRender: hobby2CellRender }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', hobby1: '', hobby2: '3' },
                { id: 10002, name: 'Test2', role: 'Test', hobby1: '2', hobby2: '' },
                { id: 10003, name: 'Test3', role: 'PM', hobby1: '1', hobby2: '2' }
            ]
        };
        return {
            gridOptions,
            hobby1CellRender,
            hobby2CellRender
        };
    }
});
