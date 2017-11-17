<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <div class="tree-ctn">
      <el-tree
        node-key="id"
        :data="treeData"
        :props="defaultProps"
        show-checkbox
        @node-click="handleNodeClick"
        @check-change="handleCheckChange"
        default-expand-all
        :expand-on-click-node="false"
        :render-content="renderContent"
      >

      </el-tree>
    </div>
  </div>
</template>

<script>
  let id = 1000;
  export default {
  data() {
    return {
      msg:"welcome to your vue-tree",
      treeData: [
        {
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }
      ],
      defaultProps: {}
    };
  },
   mounted:function () {
      this.getData()
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
    },
    getData() {
      this.axios.get("http://mockdata/data").then((response)=>{
//        this.treeData=response.data.treeData
        this.defaultProps=response.data.defaultProps
      })
    },
    append(data) {
      const newChild = { id: id++, label: 'testtest', children: [] };
      if (!data.children) {
        this.$set(data, 'children', []);
      }
      data.children.push(newChild);
    },
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },
    renderContent(h, { node, data, store }) {
      return (
        <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
        <span>
        <span>{node.label}</span>
      </span>
      <span>
      <el-button style="font-size: 12px;" type="text" on-click={ () => this.append(data) }>Append</el-button>
      <el-button style="font-size: 12px;" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
      </span>
      </span>);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .tree-ctn {
    width: 600px;
    margin: 0 auto;
  }
</style>
