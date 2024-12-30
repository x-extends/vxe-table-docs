import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            columnConfig: {
                resizable: true
            },
            columns: [
                {
                    title: '基本信息',
                    children: [
                        { type: 'seq', width: 70 },
                        { field: 'name', title: 'Name' }
                    ]
                },
                {
                    title: '更多信息',
                    children: [
                        { field: 'role', title: 'Role' },
                        { field: 'age', title: 'Age' },
                        {
                            title: '详细信息',
                            children: [
                                { field: 'sex', title: 'Sex' },
                                { field: 'date', title: 'Date', width: 140, showOverflow: true }
                            ]
                        },
                        { field: 'address', title: 'Address', width: 200, showOverflow: true }
                    ]
                }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
            ]
        };
        return {
            gridOptions
        };
    }
});
