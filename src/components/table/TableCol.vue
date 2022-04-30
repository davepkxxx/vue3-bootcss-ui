<script lang="ts">
export default {
  name: 'BootTableCol',
};
</script>
<script lang="ts" setup>
defineProps<{
  type?: string;
  label: string;
  name?: string;
}>();
</script>
