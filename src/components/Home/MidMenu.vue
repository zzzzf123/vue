<template>
<div>
    <Menu mode="horizontal" :theme="theme1"   accordion style="padding-left:100px">
        <Submenu name="0">
            <template slot="title">
                全部分类
            </template>
            <MenuItem name="2-1">家用电器</MenuItem>
            <MenuItem name="2-2">手机/数码</MenuItem>
            <MenuItem name="2-2">家具/家具</MenuItem>
            <MenuItem name="2-2">美食/卤味</MenuItem>
            <MenuItem name="2-2">坚果/炒货</MenuItem>
            <MenuItem name="2-2">糖果/蜜饯</MenuItem>
            <MenuItem name="2-2">巧克力</MenuItem>
            <MenuItem name="2-2">海鲜/肉类</MenuItem>
            <MenuItem name="2-2">花茶/名酒</MenuItem>
            <MenuItem name="2-2">箱包</MenuItem>
        </Submenu>
        <MenuItem name="1">
            首页
        </MenuItem>
        <MenuItem name="2">
            闪购
        </MenuItem>
        <MenuItem name="3">
            生鲜
        </MenuItem>
        <MenuItem name="4">
            团购
        </MenuItem>
        <MenuItem name="5">
            全球购
        </MenuItem>
    </Menu>
</div>
</template>
<script>
    export default {
        name: 'midmenu',
        data () {
            return {
                theme1: 'light'
            }
        }
    }
</script>
