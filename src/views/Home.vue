<template>
  <div class="page home">
    <v-container>
      <v-row
        class="mt-8"
        align="center"
        justify="space-around"
      >
        <v-btn depressed color="primary" @click="showScanner">
          Открыть сканер
        </v-btn>
      </v-row>
      <v-row
        class="mt-8"
        align="center"
        justify="space-around"
      >
        <span class="scan-res">Код: {{ scannerCode }}</span>
      </v-row>
      <v-row
        class="mt-8"
        align="center"
        justify="space-around">
        <svg class="barcode"
             v-if="scannerCode != 'error' && scannerCode.length > 0"
             jsbarcode-format="ean13"
             :jsbarcode-value="scannerCode"
             jsbarcode-textmargin="0"
             jsbarcode-fontoptions="bold">
        </svg>
      </v-row>
    </v-container>

  </div>
</template>

<script>

  import JsBarcode from 'jsbarcode';

  export default {
    name: 'Home',
    data() {
      return {
        scannerCode: ""
      }
    },
    components: {

    },
    mounted() {
      JsBarcode(".barcode").init();
    },
    methods: {
      showScanner() {
        this.BXMobileApp.UI.BarCodeScanner.open({
          callback: (data) => {
            if (data.text) {
              this.scannerCode = data.text;
              this.$nextTick(()=>{
                JsBarcode(".barcode").init();
              });

             // alert({title:"Barcode", text:"Format: " + JSON.stringify(data.format) + "Barcode: " + JSON.stringify(data.text)});
            }
            else {
              this.scannerCode = "error";
            }
          }
        });
      }
    }
  }
</script>
