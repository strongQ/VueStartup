<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/order/Test_data.js此处编写
 -->
<template>
    <div>
        <view-grid :columns="columns"
                   :detail="detail"
                   :editFormFileds="editFormFileds"
                   :editFormOptions="editFormOptions"
                   :searchFormFileds="searchFormFileds"
                   :searchFormOptions="searchFormOptions"
                   :table="table"
                   :extend="extend">
        </view-grid>
    </div>
</template>

<script>
    import extend from "@/extension/order/Test_data.js";
    import ViewGrid from "@/components/basic/ViewGrid.vue";
    var vueParam = {
        components: {
            ViewGrid
        },
        data() {
            return {
                table: {
                    key: 'id',
                    footer: "Foots",
                    cnName: '测试表',
                    name: 'Test_data',
                    url: "/Test_data/",
                    sortName: "id"
                },
                extend: extend,
                editFormFileds: {"Title":"","Content":"","AttachID":""},
                editFormOptions: [[{"title":"标题","field":"Title","type":"text"}],
                              [{"title":"内容","field":"Content","type":"textarea"}],
                              [{"title":"附件","field":"AttachID","type":"file"}]],
                searchFormFileds: {"Creator":"","CreateDate":"","Modifier":"","ModifyDate":"","Title":"","Content":""},
                searchFormOptions: [[{"title":"创建人","field":"Creator","type":"text"},{"title":"创建日期","field":"CreateDate","type":"date"},{"title":"标题","field":"Title","type":"text"}],[{"title":"修改人","field":"Modifier","type":"text"},{"title":"修改日期","field":"ModifyDate","type":"date"},{"title":"内容","field":"Content","type":"text"}]],
                columns: [{field:'CreateID',title:'CreateID',type:'string',width:80,hidden:true,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:130,align:'left',sortable:true},
                       {field:'CreateDate',title:'创建日期',type:'datetime',width:90,align:'left',sortable:true},
                       {field:'ModifyID',title:'ModifyID',type:'string',width:80,hidden:true,align:'left'},
                       {field:'Modifier',title:'修改人',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'修改日期',type:'datetime',width:90,align:'left',sortable:true},
                       {field:'Title',title:'标题',type:'string',width:180,align:'left'},
                       {field:'Content',title:'内容',type:'string',width:220,align:'left'},
                       {field:'AttachID',title:'附件',type:'file',width:120,align:'left'},
                       {field:'Tag',title:'Tag',type:'string',width:220,align:'left'},
                       {field:'id',title:'id',type:'int',width:120,hidden:true,readonly:true,require:true,align:'left'}],
                detail: {
                    cnName:"#detailCnName",
                    columns: [],
                    sortName: "",
                    key:""
                }
            };
        }
    };
    export default vueParam;
</script>
