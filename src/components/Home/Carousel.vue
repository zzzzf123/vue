<template>
    <Carousel autoplay v-model="value2" loop >
        <CarouselItem>
            <div class="demo-carousel"><img src="../../assets/01.jpg" alt=""></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../../assets/02.jpg" alt=""></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../../assets/03.jpg" alt=""></div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        name:'carousel',
        data () {
            return {
                value2: 0
            }
        }
    }
</script>