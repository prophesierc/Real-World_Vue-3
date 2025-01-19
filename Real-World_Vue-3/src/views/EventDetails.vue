<script>
    import EventService from '@/services/EventService.js'
    export default {
        data() {
            return {
                event: Object,
                id: 123
            }
        },
        created() {
            // fetch event (by id) and set local data
            EventService.getEvent(this.id)
                .then(response => 
                {
                this.event = response.data
                })
                .catch(error => 
                {
                console.log(error)
                })
        },
    }
</script>

<template>
    <div class="event-card">
        <h1>{{ event.title }}</h1> 
        <p>{{ event.time }} on {{ event?.date }} @ {{ event?.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>


<style scoped>
    .event-card, h1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        width: 100%;
        cursor: pointer; 
        margin-bottom: 18px;
    }
    .event-card:hover {
        transform: scale(1.15);
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
    }
</style>