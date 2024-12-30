import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            height: 500,
            rowConfig: {
                isHover: true
            },
            checkboxConfig: {
                checkField: 'isChecked',
                indeterminateField: 'isIndeterminate'
            },
            treeConfig: {},
            columns: [
                { type: 'checkbox', width: 60 },
                { field: 'name', title: 'Name', treeNode: true },
                { field: 'type', title: 'Type' },
                { field: 'size', title: 'Size' },
                { field: 'date', title: 'Date' }
            ],
            data: [
                { id: 1000, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01', isChecked: false, isIndeterminate: false },
                {
                    id: 1005,
                    name: 'Test2',
                    type: 'mp4',
                    size: 0,
                    date: '2021-04-01',
                    isChecked: false,
                    isIndeterminate: false,
                    children: [
                        { id: 24300, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01', isChecked: false, isIndeterminate: false },
                        { id: 20045, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01', isChecked: false, isIndeterminate: false },
                        {
                            id: 10053,
                            name: 'test abc96',
                            type: 'avi',
                            size: 0,
                            date: '2021-04-01',
                            isChecked: false,
                            isIndeterminate: false,
                            children: [
                                { id: 24330, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01', isChecked: false, isIndeterminate: false },
                                { id: 21011, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01', isChecked: false, isIndeterminate: false },
                                { id: 22200, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01', isChecked: false, isIndeterminate: false }
                            ]
                        }
                    ]
                },
                { id: 23666, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01', isChecked: false, isIndeterminate: false },
                { id: 24555, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01', isChecked: false, isIndeterminate: false }
            ]
        };
        return {
            gridOptions
        };
    },
    methods: {
        toggleSelectRow(row) {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                $grid.toggleCheckboxRow(row);
            }
        },
        setSelectRow(rows, checked) {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                $grid.setCheckboxRow(rows, checked);
            }
        },
        selectAllEvent() {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                $grid.setAllCheckboxRow(true);
            }
        },
        clearSelectEvent() {
            const $grid = this.$refs.gridRef;
            if ($grid) {
                $grid.clearCheckboxRow();
            }
        }
    }
});
