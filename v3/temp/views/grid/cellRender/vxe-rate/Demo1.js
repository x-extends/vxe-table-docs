import Vue from 'vue';
export default Vue.extend({
    data() {
        const numCellRender = {
            name: 'VxeRate',
            props: {
                disabled: true
            }
        };
        const gridOptions = {
            border: true,
            showOverflow: true,
            columns: [
                { type: 'seq', width: 70 },
                { field: 'name', title: 'Name', minWidth: 200 },
                { field: 'num', title: '只读', width: 300, cellRender: numCellRender }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', num: null },
                { id: 10002, name: 'Test2', role: 'Test', num: 4 },
                { id: 10003, name: 'Test3', role: 'PM', num: 2 }
            ]
        };
        return {
            gridOptions,
            numCellRender
        };
    }
});
