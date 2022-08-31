<script setup>
import { computed, ref } from "vue";
import { DatePicker } from 'v-calendar';
import axios from "axios";
const date = ref(new Date());
const valor = ref(0);
const error = ref(false);
const isClicked = ref(false); //Preguntamos si fue ya pulsada una fecha


const dateString = computed(() => {
  const [year,month,day] = date.value.toISOString().substring(0, 10).split("-");//destructuring from Array
  return `${day}-${month}-${year}`;
});

const euroValue = computed(()=>`${valor.value} €`);

/** Para desactivar el calendario necesitamos que el parámetro min-date del componente sea la fecha actual
Este caso ocurrirá mientras esperamos a que los datos de la API sean enviandos
*/
const minDate = computed(() => (isClicked.value) ? new Date() : new Date(1999, 0, 1));

/**
 * Obtenemos el objeto desestructurado de la API ver documentación
 * @param {String} {id} Objeto day desestructurado {id,...} = day. Formato id: yyyy-mm-dd
 * @description Consultar por tipo de indicador económico dado un año determinado
 * @url https://mindicador.cl/
 */
const handleDayClick = async ({ id }) => {
  date.value = new Date(id);
  if (isClicked.value) //Si aún no terminó una operación síncrona
    return;
  try {
    isClicked.value = true;
    //Con axios
    const { data } = await axios.get(`https://api.apilayer.com/exchangerates_data/${id}?symbols=EUR&base=USD`, {
      headers: {
        "apikey": "cWdCK2JRRNq1epc2G0d1dgfO7I6Xi0Sa"
      }
    });
    valor.value = data.rates.EUR;
  } catch (err) {
    error.value = err.message;
  } finally {
    isClicked.value = false;
  }

}

handleDayClick({id:new Date().toISOString().substring(0,10)});
//Sin axios
// const fetchFunction = async () => {
//   var myHeaders = new Headers();
//   myHeaders.append("apikey", "cWdCK2JRRNq1epc2G0d1dgfO7I6Xi0Sa");
//   var requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     headers: myHeaders
//   };
//   const response = await fetch(`https://api.apilayer.com/exchangerates_data/${id}?symbols=EUR&base=USD`, requestOptions);
//   const data = await response.json();
// }
</script>
<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <!-- DatePicker -->
        <DatePicker @dayclick="handleDayClick" :min-date="minDate" :max-date='new Date()' is-expanded v-model="date" />
        <!-- End DatePicker -->
      </v-col>
      <v-col cols="12">
        <v-card :loading="isClicked" :loader-height="200">
          <v-card-title>
            {{ dateString }}
          </v-card-title>
          <v-card-text>
            {{ euroValue }}
            <v-alert v-if="error" border border-color="white" :text="error" type="error" title="Error" elevated></v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>