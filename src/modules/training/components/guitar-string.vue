<script setup lang="ts">
import { Note } from "../../notes/types";
import {computed} from "vue";

const props = defineProps<{
  notes: Note[];
  activeNotes?: (Note | null)[];
}>();

const TOTAL_POSITIONS = 13;
const posLength = 100 / TOTAL_POSITIONS;

const activeNotesSet = computed<Set<Note>>((): Set<Note> => {
  const notes = props.activeNotes?.filter(note => !!note) as Note[] ?? [];
  return new Set(notes);
});
</script>

<template>
  <div class="guitar-string">
    <div class="line" />
    <div
        v-for="pos in TOTAL_POSITIONS"
        :key="pos"
        :style="{
          left: `calc(${pos * posLength}% - ${posLength / 2}% - 5px)`,
        }"
        :class="{
          active: activeNotesSet.has(notes[pos - 1]),
        }"
        class="dot"
    />
    <div
        v-for="pos in TOTAL_POSITIONS"
        :key="pos"
        :style="{
          left: `${pos * posLength}%`,
        }"
        class="sill"
    />
  </div>
</template>

<style scoped lang="scss">
  $total-positions: 13;

  .guitar-string {
    position: relative;
    padding: 20px 0;
    width: 100%;

    .line {
      position: absolute;
      right: 0;
      width: (calc(100% - 100% / $total-positions));
      height: 1px;
      background: #adadad;
    }

    .dot {
      top: 15px;
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;

      &.active {
        background: #000;
      }
    }

    .sill {
      top: 0;
      position: absolute;
      width: 2px;
      height: 100%;
      background: #000;
    }
  }
</style>
