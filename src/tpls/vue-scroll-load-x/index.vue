<template>
    <div class="scrollCont">
        <div v-for="(item, index) in list" class="listCont" :key="index">
            <slot name="list" :item="item"></slot>
        </div>
        <div class="loadingComponent" v-show="loadingOk"></div>
    </div>
</template>

<script>
    import Axios from 'axios';

    export default {
        name: '',
        props: {
            scale: {
                type: Number,
                required: false,
                default: 0.5
            },
            loadConfig: {
                type: Object,
                required: true,
                default: {
                    type: 'get',
                    url: '',
                    pageSize: 10
                }
            }
        },
        data () {
            return {
                list: [],
                loadingOk: true,
                page: 0
            }
        },
        created () {

        },
        mounted () {
            this.loadMoreFn();
            window.addEventListener('scroll', ()=> {
                this.scrollLoadFn();
            });
        },
        methods: {
            // 滚动函数
            scrollLoadFn (evt, el) {
                function throttle(method, context) {
                    clearTimeout(method.tId);
                    method.tId = setTimeout(function () {
                        method.call(context);
                    }, 500);
                };
                throttle(() => {
                    if (this.judegBomFn() && !this.loadingOk) {
                        this.loadMoreFn();
                    } else {
                        return false;
                    }
                });
            },
            // 判断滚动高度
            judegBomFn () {
                var documentHeight = document.body.scrollHeight;
                var winHeight = document.documentElement.clientHeight;
                var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
                return (documentHeight - winHeight) <= scrollHeight;
            },
            // 加载更多
            loadMoreFn () {
                this.loadingOk = true;
                this.page++;
                let req = {
                    method: this.loadConfig.type,
                    url: this.loadConfig.url
                };
                if (req.method == 'get') {
                    req['params'] = {
                        page: this.page,
                        pageSize: this.loadConfig.pageSize
                    };
                } else {
                    req['data'] = {
                        pageNum: this.page,
                        pageSize: this.loadConfig.pageSize
                    };
                }
                Axios(req).then((res) => {
                    this.loadingOk = false;
                    let data = res.data.data.contents;
                    this.list = [...this.list, ...data]
                });
            }
        }
    }
</script>

<style>
    .scrollCont {
        width: 100%;
        height: auto;
        overflow: hidden;
    }
    .scrollCont .listCont {
        float: left;
        width: 50%;
        background-color: #efefef;
    }
    /*loading*/
    .loadingComponent {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        display: inline-block;
        position: fixed;
        left: 50%;
        top: 50%;
        margin: -8px 0 0 -8px;
        animation: 3s infinite linear;
        -webkit-animation: 3s infinite linear;
        -ms-animation: 3s infinite linear;
    }

    .loadingComponent::after {
        content: '';
        width: 16px;
        height: 16px;
        border-radius: 50%;
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -8px 0 0 -8px;
        animation: 3s infinite linear;
        -webkit-animation: 3s infinite linear;
        -ms-animation: 3s infinite linear;
    }

    .loadingComponent::before {
        content: '';
        width: 16px;
        height: 16px;
        border-radius: 50%;
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -8px 0 0 -8px;
        animation: 3s infinite linear;
        -webkit-animation: 3s infinite linear;
        -ms-animation: 3s infinite linear;
    }

    .loadingComponent::before {
        background: #E84C3D;
        animation: loader2 1.2s infinite linear;
        -webkit-animation: loader2 1.2s infinite linear;
        -ms-animation: loader2 1.2s infinite linear;
    }

    .loadingComponent {
        background: #F1C40F;
        z-index: 100;
    }

    .loadingComponent::after {
        background: #2FCC71;
        animation: loader 1.2s infinite linear;
        -webkit-animation: loader 1.2s infinite linear;
        -moz-animation: loader 1.2s infinite linear;
        -ms-animation: loader 1.2s infinite linear;
    }

    @keyframes loader {
        0% {
            transform: translateX(20px);
        }

        50% {
            transform: translateX(-20px);
        }

        100% {
            transform: translateX(20px);
            z-index: 200;
        }
    }

    @-webkit-keyframes loader {
        0% {
            -webkit-transform: translateX(20px);
        }

        50% {
            -webkit-transform: translateX(-20px);
        }

        100% {
            -webkit-transform: translateX(20px);
            z-index: 200;
        }
    }

    @-ms-keyframes loader {
        0% {
            -moz-transform: translateX(20px);
        }

        50% {
            -moz-transform: translateX(-20px);
        }

        100% {
            -moz-transform: translateX(20px);
            z-index: 200;
        }
    }

    @keyframes loader2 {
        0% {
            transform: translateX(-20px);
            z-index: 200;
        }
        50% {
            transform: translateX(20px);
        }
        100% {
            transform: translateX(-20px);
        }
    }

    @-webkit-keyframes loader2 {
        0% {
            -webkit-transform: translateX(-20px);
            z-index: 200;
        }
        50% {
            -webkit-transform: translateX(20px);
        }
        100% {
            -webkit-transform: translateX(-20px);
        }
    }

    @-moz-keyframes loader2 {
        0% {
            -webkit-transform: translateX(-20px);
            z-index: 200;
        }
        50% {
            -webkit-transform: translateX(20px);
        }
        100% {
            -webkit-transform: translateX(-20px);
        }
    }

    @-ms-keyframes loader2 {
        0% {
            -moz-transform: translateX(-20px);
            z-index: 200;
        }
        50% {
            -moz-transform: translateX(20px);
        }
        100% {
            -moz-transform: translateX(-20px);
        }
    }
</style>