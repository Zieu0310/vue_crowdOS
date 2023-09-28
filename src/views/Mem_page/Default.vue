<template>
      <!-- 新增可编辑表格 -->
      <el-button @click="handleAdd">新增</el-button>
      <el-table
        :data="tableData"
        border
        fit
        highlight-current-row
        style="width: 100%"
      >
        <el-table-column prop="" label="期间" align="center">
          <template #default="scope">
            <el-select
              v-model="scope.row.periodId"
              size="mini"
              filterable
              placeholder="请选择"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </template>
        </el-table-column>

        <el-table-column prop="sysName" label="业绩目标值" align="center">
          <template #default="scope">
            <el-input-number
              v-model="scope.row.performanceTarget"
              v-show="scope.row.show"
              type="number"
              :min="0"
              :controls="false"
              :precision="3"
              style="width: 90%"
              size="mini"
            />
            <span v-show="!scope.row.show">{{
              scope.row.performanceTarget
            }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="platformName" label="门诊业绩" align="center">
          <template #default="scope">
            <el-input-number
              v-model="scope.row.mzyj"
              v-show="scope.row.show"
              type="number"
              :min="0"
              :controls="false"
              :precision="3"
              size="mini"
              style="width: 90%"
            />
            <span v-show="!scope.row.show">{{ scope.row.mzyj }}</span>
          </template>
        </el-table-column>

        <el-table-column
          prop="platformName"
          label="业绩划扣比例"
          align="center"
        >
          <template #default="scope">
            <el-input-number
              v-model="scope.row.performanceDeductRatio"
              v-show="scope.row.show"
              type="number"
              :min="0"
              :controls="false"
              :precision="3"
              size="mini"
              style="width: 90%"
            />
            <span v-show="!scope.row.show">{{
              scope.row.performanceDeductRatio
            }}</span>
          </template>
        </el-table-column>

        <el-table-column
          prop="platformName"
          label="门诊划扣业绩"
          align="center"
        >
          <template #default="scope">
            <el-input-number
              v-model="scope.row.outpatientPerformance"
              v-show="scope.row.show"
              type="number"
              :min="0"
              :controls="false"
              :precision="3"
              size="mini"
              style="width: 90%"
            />
            <span v-show="!scope.row.show">{{
              scope.row.outpatientPerformance
            }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="context" label="门诊利润" align="center">
          <template #default="scope">
            <el-input-number
              v-model="scope.row.outpatientProfit"
              v-show="scope.row.show"
              type="number"
              :min="0"
              :controls="false"
              :precision="3"
              size="mini"
              style="width: 90%"
            />
            <span v-show="!scope.row.show">{{
              scope.row.outpatientProfit
            }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="" label="操作" min-width="180" align="center">
          <template #default="scope">
            <el-button
              @click="handleDelete(scope.$index)"
              class="btn-text-red"
              type="danger"
              size="mini"
              icon="el-icon-delete"
              >删除
            </el-button>

            <el-button
              @click="scope.row.show = true"
              type="primary"
              size="mini"
              icon="el-icon-edit"
              >编辑</el-button
            >

            <el-button
              @click="save1(scope.row)"
              type="success"
              size="mini"
              icon="el-icon-success"
              >保存</el-button
            >
          </template>
        </el-table-column>
      </el-table>
</template>

<script>

export default {
  data() {
    return {
      dialogVisible: false,
      name: '',
      email: '',
      tableData: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ],
    };
  },
  methods: {
    // 保存
    save1(row) {
      row.show = false;
    },
    // 添加点击按钮
    handleAdd() {
      this.tableData.push({
        periodId: "",
        performanceTarget: "",
        mzyj: "",
        performanceDeductRatio: "",
        outpatientPerformance: "",
        outpatientProfit: "",
        show: true,
      });
    },
    handleDelete(index) {
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.tableData.splice(index, 1)
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          })
        })
    },
  },
};
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
