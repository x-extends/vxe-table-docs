import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            showOverflow: true,
            columns: [
                { type: 'seq', width: 70 },
                { field: 'name', title: 'Name', minWidth: 200 },
                { field: 'imgUrl', title: '图片', width: 80, slots: { default: 'default_imgUrl' } }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', imgUrl: 'https://vxeui.com/resource/img/fj577.jpg' },
                { id: 10002, name: 'Test2', role: 'Test', imgUrl: 'https://vxeui.com/resource/img/fj577.jpg' },
                { id: 10003, name: 'Test3', role: 'PM', imgUrl: 'https://vxeui.com/resource/img/fj577.jpg' }
            ]
        };
        return {
            gridOptions
        };
    }
});
