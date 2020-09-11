<template>
  <div class="create">
      <h1>物品列表</h1>
        <el-table :data="tableData">
          <el-table-column prop="_id" label="ID" width="280"></el-table-column>
          <el-table-column prop="name" label="物品名称"></el-table-column>
          <el-table-column label="物品图标">
              <template slot-scope="scope">
                  <img :src="scope.row.icon" alt="">
              </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="$router.push(`/items/edit/${scope.row._id}`)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      const res = await this.$http.get('rest/items')
      console.log(res.data, ';;')
      this.tableData = res.data.data
    },
    handleDelete (index, row) {
      this.$confirm(`此操作将永久删除分类"${row.name}"?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        await this.$http.delete(`rest/items/${row._id}`)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.fetchData()
      })
    }
  }
}
</script>

<style>

</style>
