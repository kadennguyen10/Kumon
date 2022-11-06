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
          v-model="userInput"
          class="p-inputtext-lg"
          type="text"
          placeholder="Student ID"
        />
      </div>
      <div
        class="flex align-items-center justify-content-center h-2rem bg-white-500 font-bold text-white border-round m-1"
      >
        <Button @click="handleCheckIn">Check in</Button>
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
  <DataTable :value="users" responsiveLayout="scroll">
    <Column field="userId" header="ID"></Column>
    <Column field="userName" header="Name"></Column>
    <Column field="dateTime" header="Date Time"></Column>
  </DataTable>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent, watch } from "vue";
import ProductService from "@/service/ProductService";
import Button from "primevue/button";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import InputText from "primevue/inputtext";
import { UserService } from "./service/UserService";
import type { User } from "./model/User";

export default defineComponent({
  setup() {
    const userService = new UserService();
    const userInput = ref();
    // let users = ref();
    // let copiedUsers = computed((x) => (x = users));
    let users = ref({} as Array<User>);
    let test = new Array<User>();
    // users.value = userService.getUserInfo(parseInt(userInput.value), test);
    // let users = userService.getUserInfo(parseInt(userInput.value));
    watch(
      () => users,
      (to, from) => console.log(from)
    );
    const handleCheckIn = () => {
      debugger;
      users.value = userService.getUserInfo(parseInt(userInput.value), test);
      test = users.value;
      // let test2 = test.push(user);
      // test = userService.getDatabase(parseInt(userInput.value));
      console.log(users);
    };

    return { handleCheckIn, userInput, users };
  },
});
</script>
