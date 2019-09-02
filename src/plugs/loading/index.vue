<template>
    <div id="LoadingMask" v-show="status">
        <div class="Loading">
            <img src="./loading.png" class="loader">
        </div>
    </div>
</template>

<script>
    export default{
      name:'Loading',
      data (){
        return {
          status: false,
          text: ''
        }
      }
    }
</script>

<style scoped>
    #LoadingMask{
        position: fixed;
        left:0;
        top:0;
        z-index: 99999;
        width: 100%;
        height: 100%;
    }
    .Loading{
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        width: 80px;
        height: 80px;
        background: rgba(0,0,0,0.5);
        border-radius: 10px;
    }
    .Loading .loader{
        display: block;
        width: 30px;
        height: auto;
        position: absolute;
        left:50%;
        top:50%;
        margin: -15px 0 0 -15px;
        transform-origin:50% 50%;
        -webkit-transform-origin:50% 50%;
        -moz-transform-origin:50% 50%;
        animation:rotateAni 1s infinite linear;
        -webkit-animation:rotateAni 1s infinite linear;
        -moz-animation:rotateAni 1s infinite linear;
    }
    @keyframes rotateAni {
        0% {
            transform: rotate(0deg);
        }
        50%{
            transform: rotate(180deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes rotateAni {
        0% {
            transform: rotate(0deg);
        }
        50%{
            transform: rotate(180deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    @-moz-keyframes rotateAni {
        0% {
            transform: rotate(0deg);
        }
        50%{
            transform: rotate(180deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
</style>