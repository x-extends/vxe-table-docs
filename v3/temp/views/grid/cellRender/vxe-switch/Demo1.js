import Vue from 'vue';
export default Vue.extend({
    data() {
        const flag1CellRender = {
            name: 'VxeSwitch',
            props: {
                disabled: true
            }
        };
        const flag2CellRender = {
            name: 'VxeSwitch'
        };
        const gridOptions = {
            border: true,
            showOverflow: true,
            columns: [
                { type: 'seq', width: 70 },
                { field: 'name', title: 'Name', minWidth: 200 },
                { field: 'flag1', title: '只读', width: 120, cellRender: flag1CellRender },
                { field: 'flag2', title: '可编辑', width: 120, cellRender: flag2CellRender }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', flag1: false, flag2: false },
                { id: 10002, name: 'Test2', role: 'Test', flag1: true, flag2: true },
                { id: 10003, name: 'Test3', role: 'PM', flag1: false, flag2: false }
            ]
        };
        return {
            gridOptions
        };
    }
});
