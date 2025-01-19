<template>
    <div class="event-card">
        <span>@ {{ event.time }} on {{ event.date }} </span>
        <h4>{{ event.title }}</h4>
    </div>
</template>

<script>
    export default {
        name: 'EventCard',
        props: {
            event: Object, 
        }
    }
</script>

<style scoped>
    .event-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        width: 100%;
        height: 100%;
        cursor: pointer; 
        border: lpx solid #39495c;
        margin-bottom: 18px;
    }
    .event-card:hover {
        transform: scale(1.01);
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
    }
</style>