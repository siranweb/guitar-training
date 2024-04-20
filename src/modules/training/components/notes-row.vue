<script setup lang="ts">
import { notesService } from "../../notes/model/notes.service.ts";
import { Note } from "../../notes/types";

defineProps<{
  tips?: boolean;
  note: Note;
}>()
</script>

<template>
  <div class="notes-row">
    <div
        v-for="noteItem in notesService.notes"
        :class="{ active: tips && note === noteItem }"
        :key="noteItem"
        class="item"
    >
      <div class="note">{{ noteItem }}</div>
      <div class="name">{{ tips ? notesService.getNameByNote(noteItem) : '??' }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hide {
  visibility: hidden;
}

.notes-row {
  height: 40px;
  width: 90%;
  display: flex;
  justify-content: space-between;

  .item {
    color: #d3d3d3;
    display: flex;
    align-items: center;
    flex-direction: column;

    .note {
      font-size: 22px;
    }

    .name {
      font-size: 16px;
    }

    &.active {
      color: #000;
    }
  }
}
</style>
