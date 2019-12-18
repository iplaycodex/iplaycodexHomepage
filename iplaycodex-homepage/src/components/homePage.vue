<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>About me</h2>
        <ul>
            <li>
                <a href="blog.iplaycodex.com" target="_blank">My blog</a>
                <a href="https://github.com/wawsc5354524" target="_blank">My github</a>
                <a href="https://github.com/wawsc5354524" target="_blank">My open source project</a>
            </li>
            <br />
        </ul>
        <!-- 备案号 -->
        <a  class="copy-right" href="http://www.beian.miit.gov.cn/">沪ICP备19045350号</a>
    </div>
</template>

<script>
export default {
    name: "homePage",
    data() {
        return {
            msg: "Welcome to My website"
        };
    }
};
</script>

<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
    margin: 0 10px;
}
</style>
