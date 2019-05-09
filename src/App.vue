<template>
    <div id="app">
        <ScrollLoad :num="num" :scale="imgScale" :loadConfig="loadConfig">
            <template v-slot:list="{item}">
                <div class="cover" :style="{backgroundImage: `url(${item.cover})`}"></div>
                <p class="name">{{item.title}}</p>
            </template>
        </ScrollLoad>
    </div>
</template>

<script>
    import ScrollLoad from './tpls/vue-scroll-load-x/index.vue';

    export default {
        name: 'App',
        components: {
            ScrollLoad
        },
        data () {
            return {
                num: 1,
                imgScale: 0.333,
                loadConfig: {
                    type: 'get',
                    url: '/front/project/list.json',
                    pageSize: 12
                }
            }
        },
        created () {
        },
        mounted (){

        },
        methods: {


        }
    }
</script>

<style>
    @import './assets/css/main.css';
    .cover{
        width: 100%;
        height: 150px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .name{
        line-height: 30px;
        padding: 10px 10px;
        font-size: 12px;
        color:#666;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>