<template>
    <RouterLink to="/event/123">
        <div class="event-card">
            <span>@ {{ event.time }} on {{ event.date }} </span>
            <h4>{{ event.title }}</h4>
        </div>
    </RouterLink>
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
        color: #888888;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        width: 100%;
        height: 100%;
        cursor: pointer; 
        margin-bottom: 18px;
    }
    .event-card:hover {
        transform: scale(1.15);
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
    }
</style>