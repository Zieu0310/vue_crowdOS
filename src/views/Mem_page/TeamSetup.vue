
<template>
    <div class="CenterBox">
 <el-dialog
    :visible="showGroupDialog"
    >
      <el-input type="text" v-model="groupName" placeholder="请输入团队名称" ></el-input>
      <span class="dialog-footer">
        <el-button @click="showGroupDialog = false">取 消</el-button>
        <el-button type="primary" @click="createGroup">确 定</el-button>
      </span>
    </el-dialog>

<div class="left">
        <p class="user" @click="showGroupDialog = true">新建团队</p>
        <div class="user" v-for="items in groups" :key="items.id" @click="triggerGroup(items)">
          <span> {{items.name}}</span>
          <span v-if="!isUserInGroup(items)" @click="addGroup(items.id)">+</span>
          <span class="msgtip" v-show="getGroupMsgNum(items)">{{getGroupMsgNum(items)}}</span>
        </div>
        <div class="user" v-for="(itm, idex) in users" :key="idex" v-show="itm.uid !== uid" @click="triggerUser(itm)">
          <span>{{itm.nickname}}</span>
          <span class="msgtip" v-show="getMsgNum(itm)">{{getMsgNum(itm)}}</span>
          </div>
      </div>

    </div>
</template>

<script>
  export default {
  data () {
    return {
      groups: [], // 所有群对应数组
      showGroupDialog: false, // 新建群模态框
      groupName: '', // 群名
      groupId: ''
    }
  },
  computed: {
    // 筛选当前brige一致的放到一个聊天数组里，区分单聊和群聊
    currentMessage () {
      const vm = this
      let data = this.messageList.filter(item => {
        // 如果有groupId，过滤展示出当前对应群
        if (this.groupId) {
          return item.groups.filter(p => { return p.id === this.groupId })
        } else {
          return item.brige.sort().join('') === vm.brige.sort().join('')
        }
      })
      data.forEach(m => {
        m.status = 0
      })
      return data
    }
  },
  methods: {
	// 发送信息给客户端
    sendMessage (type, msg) {
      const data = {
        groups: this.groups,
        groupId: this.groupId
      }
      this.ws.send(JSON.stringify(data))
      this.msg = ''
    },
    // 创建群
    createGroup () {
      const data = {
        uid: this.uid,
        type: 10,
        nickname: this.nickname,
        users: this.users,
        name: this.groupName,
        brige: []
      }
      this.ws.send(JSON.stringify(data))
      this.showGroupDialog = false
      this.groupName = ''
    },

    // 加入群
    addGroup (id) {
      const data = {
        uid: this.uid,
        type: 20,
        nickname: this.nickname,
        brige: [],
        groupName: this.groupName,
        groupId: id
      }
      this.ws.send(JSON.stringify(data))
    },
     // 判断当前用户是否在群里
    isUserInGroup (items) {
      const isIn = items.users.some(item => { return item.uid === this.uid })
      return isIn
    },

    // 获取单聊消息未读数量
    getMsgNum (user) {
        // userid相同，确认是当前聊天对应人的消息数组
         return this.messageList.filter (m => {
          return m.brige.length && m.status === 1 && m.uid === user.uid
        }).length
    },

    // 获取群聊未读消息数
    getGroupMsgNum (users) {
      return this.messageList.filter (m => {
        return m.groupId === users.id && m.status === 1
      }).length
    },
    triggerUser (itm) {
      this.brige = [this.uid, itm.uid]
      this.title = `和${itm.nickname}聊天`
    },

    triggerGroup (items) {
      const isIn = items.users.some(item => { return item.uid === this.uid})
      if (!isIn) {
         this.$message.error('您还不是该群成员，不可发信息！');
         return;
      }
      this.groupId = items.id
      this.brige = []
      this.title = `在${items.name}聊天`
    },
	
	// 连接websocket
    contactSocket () {
		ws.onmessage = function (e) {
        const obj = JSON.parse(e.data)
        that.messageList.push(obj)
        if (obj.users) that.users = obj.users
        if (obj.groups) that.groups = obj.groups
      }
	}
  }
}

</script>

<style scoped>
  .CenterBox {
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    background-image: url(../../assets/img/Web.jpg);
    background-size: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    zoom: 1;
    z-index: -10;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
