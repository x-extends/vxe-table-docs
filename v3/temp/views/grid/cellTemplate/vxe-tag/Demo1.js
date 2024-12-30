import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            showOverflow: true,
            height: 300,
            columns: [
                { type: 'seq', width: 70 },
                { field: 'name', title: 'Name', minWidth: 200 },
                { field: 'status', title: '状态', width: 300, slots: { default: 'status' } }
            ],
            data: [
                { id: 10001, name: 'Test1', status: '1' },
                { id: 10002, name: 'Test2', status: '2' },
                { id: 10003, name: 'Test3', status: '3' },
                { id: 10004, name: 'Test4', status: '2' },
                { id: 10005, name: 'Test5', status: '2' },
                { id: 10006, name: 'Test6', status: '3' },
                { id: 10007, name: 'Test7', status: '1' },
                { id: 10008, name: 'Test8', status: '1' }
            ]
        };
        return {
            gridOptions
        };
    }
});
