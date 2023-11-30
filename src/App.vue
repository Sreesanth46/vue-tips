<script setup>
import { reactive } from "vue";
import AddressForm from "./components/AddressForm.vue";

const address = reactive({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    postalCode: "",
});
</script>

<template>
    <div>
        <AddressForm
            v-model:first-name="address.firstName"
            v-model:last-name="address.lastName"
            v-model:country="address.country"
            v-model:city="address.city"
            v-model:postal-code="address.postalCode"
        />

        Name: {{ address.firstName + " " + address.lastName }}
        <br />
        Country: {{ address.country }}
        <br />
        City: {{ address.city }}
        <br />
        Postal code: {{ address.postalCode }}
    </div>
</template>
