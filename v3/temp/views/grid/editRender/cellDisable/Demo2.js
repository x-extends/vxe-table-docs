import Vue from 'vue';
export default Vue.extend({
    data() {
        const nameEditRender = {
            name: 'VxeInput',
            props: {
                disabled: false
            }
        };
        const sexEditRender = {
            name: 'VxeInput',
            props: {
                disabled: false
            }
        };
        const ageEditRender = {
            name: 'VxeInput',
            props: {
                type: 'integer',
                disabled: false
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
                { type: 'seq', width: 50 },
                { field: 'name', title: 'Name', editRender: nameEditRender },
                { field: 'sex', title: 'Sex', editRender: sexEditRender },
                { field: 'age', title: 'Age', editRender: ageEditRender },
                { field: 'address', title: 'Address', editRender: { name: 'VxeInput' } }
            ],
            data: [
                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'xest3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
            ]
        };
        return {
            nameEditRender,
            sexEditRender,
            ageEditRender,
            gridOptions
        };
    },
    methods: {
        editActivatedEvent({ row }) {
            // name 为 'x' 开头的列禁止编辑
            this.nameEditRender.props.disabled = (row.name || '').indexOf('x') === 0;
            // age 小于 27 的列禁止编辑
            this.ageEditRender.props.disabled = row.age < 27;
            // sex 值编辑为 1 的列禁止编辑
            this.sexEditRender.props.disabled = row.sex === 'Women';
        }
    }
});
