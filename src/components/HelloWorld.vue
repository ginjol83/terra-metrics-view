<template>
  <div class="hello">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-card class="mx-auto" max-width="400">
            <v-img :src="require('../assets/citricos.jpg')" height="200px"></v-img>
            <v-card-title>
              Valencia Late
            </v-card-title>
            <v-card-text>
              <h2>Pocas Operaciones</h2>
              Lonja Citricos Valencia
              Precio: 0.30 €/kg
            </v-card-text>
            <v-card-actions>
              <v-btn>Acción</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card class="mx-auto" max-width="400">
            <v-img :src="require('../assets/citricos.jpg')" height="200px"></v-img>
            <v-card-title>
              Navelina
            </v-card-title>
            <v-card-text>
              <h2>Alta Demanda</h2>
              Lonja Citricos Valencia
              Precio: 0.45 €/kg
            </v-card-text>
            <v-card-actions>
              <v-btn>Acción</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card class="mx-auto" max-width="400">
            <v-img :src="require('../assets/citricos.jpg')" height="200px"></v-img>
            <v-card-title>
              Salustiana
            </v-card-title>
            <v-card-text>
              <h2>Moderada Demanda</h2>
              Lonja Citricos Valencia
              Precio: 0.35 €/kg
            </v-card-text>
            <v-card-actions>
              <v-btn>Acción</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.v-card {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.v-card-title {
  font-weight: bold;
  font-size: 1.2em;
}

.v-card-text h2 {
  color: #42b983;
  margin: 0;
}

.v-btn {
  background-color: #42b983;
  color: white;
}

.v-btn:hover {
  background-color: #369f6b;
}
</style>