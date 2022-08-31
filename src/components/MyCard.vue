<script setup>
import { ref } from 'vue';
</script>
<template>
    <v-card
        :rounded="true">
        <v-card-text>

        </v-card-text>
    </v-card>
    <v-card color="error" variant="outlined" :rounded="true" :loading="true">
        <v-card-title class="text-xs-h6 text-md-h5 text-lg-h4">
            Mi calendario
        </v-card-title>
        <v-card-subtitle>
            Subtítulo
        </v-card-subtitle>
        <v-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nam consequuntur nesciunt voluptatum
            facere, dolore facilis enim saepe placeat non ut praesentium debitis eos incidunt vero tempore molestiae
            aliquid. Sunt?
        </v-card-text>
        <v-card-actions>
            <v-btn variant="outlined">
                Button
            </v-btn>
        </v-card-actions>
    </v-card>
</template>