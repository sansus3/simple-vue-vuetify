<script setup>
  import { ref } from "vue";
  

  import { DatePicker } from 'v-calendar';

import MyCard from '../components/MyCard.vue';
const date = ref(new Date());
</script>
<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        
        <DatePicker is-expanded v-model="date" />
        
       
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            {{date}}
          </v-card-title>
        </v-card>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi laudantium iusto facere, atque ab placeat at quae dolores nesciunt, eveniet quo distinctio? Earum quas totam enim nihil inventore consequuntur animi.</v-col>
    </v-row>
  </v-container>
  
          
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
