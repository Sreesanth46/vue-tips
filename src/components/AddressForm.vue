<script setup>
defineProps({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    postalCode: {
        type: Number,
        required: false,
    },
});

defineEmits([
    "update:firstName",
    "update:lastName",
    "update:country",
    "update:city",
    "update:postalCode",
]);
</script>

<template>
    <form class="flex flex-col gap-2 p-6">
        <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            :value="firstName"
            @input="$emit('update:firstName', $event.target.value)"
        />
        <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            :value="lastName"
            @input="$emit('update:lastName', $event.target.value)"
        />
        <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            :value="country"
            @input="$emit('update:country', $event.target.value)"
        />
        <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            :value="city"
            @input="$emit('update:city', $event.target.value)"
        />
        <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            :value.number="postalCode"
            @input="$emit('update:postalCode', $event.target.value)"
        />
    </form>
</template>
