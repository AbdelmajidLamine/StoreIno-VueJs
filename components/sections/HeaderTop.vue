<template>
    <div class="relative">
        <si-app-loader placement="BEFORE_TOP_HEADER" />
        <div class="height news-container">
            <ul>
                <li>
                    {{ top.text }}
                </li>
                <li>
                    <span class="max">{{ top.reduction }}</span>
                </li>
                <li>
                    {{ top.text }}
                </li>
                <li>
                    <span class="max">{{ top.reduction }}</span>

                </li>
                <li>
                    {{ top.text }}
                </li>
            </ul>

        </div>



        <div class=" sticky top-0 left-0 right-0">
            <si-app-loader :placement="'BEFORE_TOP_HEADER_STICKY'" />
        </div>
        <si-app-loader placement="AFTER_TOP_HEADER" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            top: this.$settings.sections.header.top,
        }
    }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Jost:wght@700&display=swap');

.height {
    width: 100%;
    background-color: red;
    height: 40px;
}

.news-container ul {
    display: flex;
    list-style: none;
    margin: 0;
    animation: scroll 45s infinite linear;
    white-space: nowrap;
}

.news-container ul li {

    padding: 5px;
    color: #ffffff;
    position: relative;
    font-family: 'Anton', sans-serif;
    font-family: 'Jost', sans-serif;
    font-size: 20px;
}

.news-container ul::after {
    content: "";
    width: 1px;
    height: 100%;
    background: #b8b8b8;
    position: absolute;
    top: 0;
    right: 0;
}

.news-container ul li:last-child::after {
    display: none;
}

@keyframes scroll {
    100% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);

    }
}

.max {
    height: 20px;
    color: red;
    background-color: #ffffff;
}
</style>