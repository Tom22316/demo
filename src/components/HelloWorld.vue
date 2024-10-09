<template>
  <div>
    <div>
      <div v-if="loadingGet">加载中...</div>
      <div v-else-if="errorGet">{{ errorGet }}</div>
      <pre v-else>{{ JSON.stringify(dataGet, null, 2) }}</pre>
      <button @click="getData">点击我获取数据</button>
    </div>

  </div>
  <div>
    <div>
      <form @submit.prevent="sentData">
        <input v-model="postData.title" placeholder="标题" required />
        <input v-model="postData.body" placeholder="内容" required />
        <button type="submit">发送 POST 请求</button>
      </form>
    </div>
    <div>
      <div v-if="loadingPost">发送中...</div>
      <div v-else-if="errorPost">{{ errorPost }}</div>
      <pre v-else-if="responsePost">{{ JSON.stringify(responsePost, null, 2) }}</pre>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',

  data() {
    return {
      // Get请求数据
      dataGet: null,
      loadingGet: true,
      errorGet: null,
      loadingPost: true,
      errorPost: null,
      responsePost: null,
      postData: {
        title: '',
        body: ''
      }
    }
  },
  mounted() {
    // 挂载，直接调用函数的
    // this.getData();
    // this.sentData();
  },
  methods: {
    // get
    async getData() {
      this.loadingGet = false,
      this.errorGet = null;

      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.dataGet = response.data;
      } catch (error) {
        this.errorGet = "获取失败",
          console.error('获取数据失败:', error);
      } finally {
        this.loadingGet = false
      }
    },

    //post
    async sentData() {
      this.loadingGet = false,
      this.errorGet = null;

      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts',this.postData);
        this.responsePost = response.data;
      } catch(error){
        this.errorPost = '发送数据失败';
        console.error('发送数据失败:', error);
      } finally {
        this.loadingPost = false;
      }
    }
  }
}

</script>

<style>
</style>
