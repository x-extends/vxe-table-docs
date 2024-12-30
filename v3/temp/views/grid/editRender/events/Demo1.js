import Vue from 'vue';
export default Vue.extend({
    data() {
        const nameEditRender = {
            name: 'input',
            events: {
                input: (cellParams) => {
                    const { row, column } = cellParams;
                    console.log('name', row[column.field]);
                }
            }
        };
        const sexEditRender = {
            name: 'VxeSelect',
            options: [
                { label: '女', value: 'Women' },
                { label: '男', value: 'Man' }
            ],
            events: {
                change: (cellParams, targetParams) => {
                    const { row, column } = cellParams;
                    console.log('sex', row[column.field]);
                }
            }
        };
        const ageEditRender = {
            name: 'VxeNumberInput',
            events: {
                change: (cellParams, targetParams) => {
                    const { row, column } = cellParams;
                    console.log('age', row[column.field]);
                }
            }
        };
        const gridOptions = {
            border: true,
            showOverflow: true,
            editConfig: {
                trigger: 'click',
                mode: 'cell'
            },
            columns: [
                { type: 'seq', width: 70 },
                { field: 'name', title: 'Name', editRender: nameEditRender },
                { field: 'sex', title: 'Sex', editRender: sexEditRender },
                { field: 'age', title: 'Age', editRender: ageEditRender }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
            ]
        };
        return {
            gridOptions,
            nameEditRender,
            sexEditRender,
            ageEditRender
        };
    }
});
