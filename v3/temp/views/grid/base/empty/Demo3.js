import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            height: 300,
            loading: false,
            columns: [
                { type: 'seq', width: 70 },
                { field: 'name', title: 'Name', width: 300 },
                { field: 'sex', title: 'Sex', width: 300 },
                { field: 'age', title: 'Age', width: 300 },
                { field: 'date12', title: 'Date', width: 300 },
                { field: 'address', title: 'Address', width: 300, showOverflow: true }
            ],
            data: []
        };
        return {
            gridOptions
        };
    },
    created() {
        this.gridOptions.loading = true;
        setTimeout(() => {
            this.gridOptions.data = [];
            this.gridOptions.loading = false;
        }, 2000);
    }
});
