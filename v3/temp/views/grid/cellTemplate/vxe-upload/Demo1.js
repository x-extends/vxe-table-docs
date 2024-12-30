import Vue from 'vue';
import axios from 'axios';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            showOverflow: true,
            columns: [
                { type: 'seq', width: 70 },
                { field: 'name', title: 'Name', minWidth: 180 },
                { field: 'fileList1', title: '附件列表', width: 240, slots: { default: 'fileList1_default' } },
                { field: 'fileList2', title: '上传附件', width: 300, slots: { default: 'fileList2_default' } },
                { field: 'imgList1', title: '图片列表', width: 160, slots: { default: 'imgList1_default' } },
                { field: 'imgList2', title: '上传图片', width: 210, slots: { default: 'imgList2_default' } }
            ],
            data: [
                {
                    id: 10001,
                    name: 'Test1',
                    imgList1: [],
                    imgList2: [],
                    fileList1: [
                        { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' }
                    ],
                    fileList2: [
                        { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' }
                    ]
                },
                {
                    id: 10002,
                    name: 'Test2',
                    imgList1: [
                        { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
                        { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' }
                    ],
                    imgList2: [
                        { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
                        { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' }
                    ],
                    fileList1: [],
                    fileList2: []
                },
                {
                    id: 10003,
                    name: 'Test3',
                    imgList1: [
                        { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
                    ],
                    imgList2: [
                        { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
                    ],
                    fileList1: [
                        { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
                        { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' },
                        { name: 'fj187.jpg', url: 'https://vxeui.com/resource/img/fj187.jpg' }
                    ],
                    fileList2: [
                        { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
                        { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' },
                        { name: 'fj187.jpg', url: 'https://vxeui.com/resource/img/fj187.jpg' }
                    ]
                }
            ]
        };
        return {
            gridOptions
        };
    },
    methods: {
        uploadMethod({ file }) {
            const formData = new FormData();
            formData.append('file', file);
            return axios.post('/api/pub/upload/single', formData).then((res) => {
                // { url: ''}
                return {
                    ...res.data
                };
            });
        }
    }
});
