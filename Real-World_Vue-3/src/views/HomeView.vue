<script>
  import EventCard from '@/components/EventCard.vue'
  export default 
  {
    name: 'HomeView',
    components: 
    {
      EventCard
    },
      data() 
      {
        return { 
          events: [
            {
              id: 5928101,
              category: 'animal welfare',
              title: 'Cat Adoption Day',
              description: 'Find your new feline friend at this event. ' ,
              location: 'Meow Town',
              date: 'January 28, 2022',
              time: '12:00',
              petsAllowed: true,
              organizer: 'Kat Laydee',
            },
            {
              id: 5928102,
              category: 'community outreach',
              title: 'Park Cleanup Drive',
              description: 'Join us to clean and beautify our local park.',
              location: 'Green Meadows Park',
              date: 'March 15, 2022',
              time: '10:00',
              petsAllowed: false,
              organizer: 'John Doe',
            },
            {
              id: 5928103,
              category: 'animal welfare',
              title: 'Dog Walkathon',
              description: 'Walk with your dog to support animal shelters.',
              location: 'Woofington Trail',
              date: 'February 20, 2022',
              time: '09:00',
              petsAllowed: true,
              organizer: 'Paw Prince',
            },
            {
              id: 5928104,
              category: 'education',
              title: 'Coding Bootcamp',
              description: 'Learn the basics of programming in this beginner-friendly workshop.',
              location: 'Tech Town Center',
              date: 'April 10, 2022',
              time: '14:00',
              petsAllowed: false,
              organizer: 'Code Guru',
            }
          ]  
        }
      }
  }
</script>

<template>
  <main>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </main>
</template>