<template>
    <div class="et-shake" :class="{ ['et-shakeactive']: props.modelValue }">
        <slot />
    </div>
</template>
<script lang='ts' setup>
import { watch } from 'vue'
import "../index.less"
defineOptions({
    name: 'et-shake'
})
type ShakeProps = {
    modelValue?: boolean
}
type Emits = {
    (e: 'update:modelValue', value: boolean): void
}
const props = withDefaults(defineProps<ShakeProps>(), {
    modelValue: false
})

const emits = defineEmits<Emits>()


watch(() => props.modelValue, (newVal) => {
    if (newVal) {
        setTimeout(() => {
            emits("update:modelValue", false)
        }, 1000);
    }

}, { immediate: true })


</script>
