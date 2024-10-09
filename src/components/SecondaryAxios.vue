<template>
    <div>
        <div>
            <div v-if="loadingGet">加载中...</div>
            <div v-else-if="errorGet">{{ errorGet }}</div>
            <pre v-else>{{ JSON.stringify(dataGet, null, 2) }}</pre>
            <button @click="getData">点击我获取数据 plus</button>
        </div>

    </div>
    <div>
        <div>
            <div v-if="loadingPost">发送中...</div>
            <div v-else-if="errorPost">{{ errorPost }}</div>
            <pre v-else-if="responsePost">{{ JSON.stringify(responsePost, null, 2) }}</pre>
        </div>
        <div>
            <form @submit.prevent="sentData">
                <input v-model="postData.title" placeholder="标题" required />
                <input v-model="postData.body" placeholder="内容" required />
                <button type="submit">发送 POST 请求 plus</button>
            </form>
        </div>
    </div>
</template>

<script>
import getAxios from '@/uitls/request';
export default {

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

    },
    methods: {
      async getData(){
            this.responsePost = null
            try {
                this.dataGet = await getAxios.get('/posts');
                this.errorGet = null
            } catch(error){
                this.errorGet = '错误';
                console.error(error);
            } finally {
                this.loadingGet = false
            }
        },
        async sentData(){
           this.dataGet = null
            try{   
                const responseData = await getAxios.post('/posts',  this.postData);
                this.responsePost = responseData;
                this.error = null;
            } catch(error){
                this.errorPost = '错误';
                console.error(error);
            } finally {
                this.loadingPost = false;
            }
        }
    }
}

</script>

<style></style>