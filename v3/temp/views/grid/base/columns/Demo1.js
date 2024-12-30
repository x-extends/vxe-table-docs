import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            loading: false,
            columns: [],
            data: []
        };
        return {
            gridOptions
        };
    },
    methods: {
        loadColumConfig() {
            // 模拟后台接口
            this.gridOptions.loading = true;
            setTimeout(() => {
                this.gridOptions.columns = [
                    { type: 'seq', width: 70 },
                    { field: 'name', title: 'Name' },
                    { field: 'role', title: 'Role' },
                    { field: 'age', title: 'Age' }
                ];
                this.gridOptions.data = [];
                this.gridOptions.loading = false;
            }, 500);
        },
        loadColumData() {
            // 模拟后台接口
            this.gridOptions.loading = true;
            setTimeout(() => {
                this.gridOptions.columns = [
                    { type: 'seq', width: 70 },
                    { field: 'name', title: 'Name' },
                    { field: 'sex', title: 'Sex' },
                    { field: 'age', title: 'Age' },
                    { field: 'address', title: 'Address', showOverflow: true }
                ];
                this.gridOptions.data = [
                    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
                ];
                this.gridOptions.loading = false;
            }, 500);
        }
    }
});
