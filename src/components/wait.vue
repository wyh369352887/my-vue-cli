<template>
    <div id="waiting">
        <div class="wrapper">
            <img src="../assets/image/loading.gif" />
        </div>
    </div>
</template>
<script>
export default {
    name:'wait',
}
</script>
<style lang="less" scoped>
    #waiting{
        display: none;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9999;
    }
    #waiting .wrapper{
        width: 2rem;
        height: 2rem;
        border-radius: .3rem;
        background-color: rgba(0, 0, 0, .6);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    #waiting .wrapper img{
        width: 1rem;
        height: 1rem;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }

</style>
