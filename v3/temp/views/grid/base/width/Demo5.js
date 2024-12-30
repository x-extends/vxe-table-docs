import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            showFooter: true,
            columns: [
                { type: 'seq', width: '80' },
                { field: 'name', title: 'Name', width: 300 },
                { field: 'age', title: 'Age', width: 'auto' },
                { field: 'sex', title: '头部宽度 头部宽度 头部', width: 'auto' },
                { field: 'address', title: 'Address', width: 'auto' }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop Develop Develop ', sex: 'Man', age: 28, address: '内容宽度' },
                { id: 10002, name: 'Test2', role: 'Test Test Test Test Test Test Test', sex: 'Women', age: 22, address: '内容宽度 内容宽度 内容宽度 内容宽度 内容宽度 内容宽度' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: '内容宽度 内容宽度 内容宽度 内容' }
            ],
            footerData: [
                { age: '尾部宽度 尾部宽度 尾部' }
            ]
        };
        return {
            gridOptions
        };
    }
});
