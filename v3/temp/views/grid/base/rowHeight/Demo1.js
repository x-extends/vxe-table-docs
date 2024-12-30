import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            height: 500,
            showOverflow: true,
            columnConfig: {
                resizable: true
            },
            rowConfig: {
                height: 120
            },
            columns: [
                { type: 'seq', title: '序号', width: 100 },
                { title: '图片', width: 140, align: 'center', slots: { default: 'imgDefault' } },
                { title: '基本信息', slots: { default: 'infoDefault' } },
                { field: 'age', title: 'Age', width: 200 },
                { field: 'address', title: 'Address', width: 200 }
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
            gridOptions
        };
    }
});
