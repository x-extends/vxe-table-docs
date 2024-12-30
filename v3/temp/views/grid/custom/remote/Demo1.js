import Vue from 'vue';
import { VxeUI } from 'vxe-table';
// 模拟保存接口
const saveCustomSetting = (storeData) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(storeData);
            VxeUI.modal.message({
                status: 'success',
                content: '保存成功'
            });
            resolve();
        }, 200);
    });
};
export default Vue.extend({
    data() {
        const gridOptions = {
            id: 'myCustomUpdate',
            toolbarConfig: {
                custom: true
            },
            customConfig: {
                storage: true,
                updateStore({ storeData }) {
                    // 模拟异步，实现服务端保存
                    return saveCustomSetting(storeData);
                }
            },
            columns: [
                { type: 'seq', width: 70 },
                { field: 'name', title: 'Name' },
                { field: 'sex', title: 'Sex' },
                { field: 'age', title: 'Age' }
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
