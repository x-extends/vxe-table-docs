import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            emptyText: '没有更多数据了！',
            columns: [
                { type: 'seq', width: 70 },
                { field: 'name', title: 'Name' },
                { field: 'sex', title: 'Sex' },
                { field: 'age', title: 'Age' },
                { field: 'address', title: 'Address', showOverflow: true }
            ],
            data: []
        };
        return {
            gridOptions
        };
    }
});
