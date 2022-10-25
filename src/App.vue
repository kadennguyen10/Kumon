<template>
  <div class="card">
    <div class="flex flex-column card-container green-container">
      <div
        class="flex align-items-center justify-content-center h-4rem bg-indigo-500 font-bold text-white text-3xl border-round m-2"
      >
        Kumon Learning Center
      </div>
      <div
        class="flex align-items-center justify-content-center h-4rem bg-white-500 font-bold text-white border-round m-2"
      >
        <InputText
          class="p-inputtext-lg"
          type="text"
          placeholder="Student ID"
          v-model="studentId"
        />
      </div>
      <div
        class="flex align-items-center justify-content-center h-2rem bg-white-500 font-bold text-white border-round m-1"
      >
        <Button>Check in</Button>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="flex flex-column card-container green-container">
      <div
        class="flex align-items-center justify-content-center h-4rem bg-white-500 font-bold text-white border-round m-2"
      ></div>
    </div>
  </div>
  <DataTable :value="products" responsiveLayout="scroll">
    <Column field="id" header="ID"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="checkedInTime" header="Logged In"></Column>
  </DataTable>
</template>

<script>
import { ref, onMounted } from "vue";
import ProductService from "./service/ProductService";

export default {
  setup() {
    onMounted(() => {
      productService.value
        .getProductsSmall()
        .then((data) => (products.value = data));
    });

    const products = ref();
    const productService = ref(new ProductService());

    return { products, productService };
  },
};
</script>
