<script setup lang="ts">
import {notesService} from "../../notes/model/notes.service.ts";
import {Note} from "../../notes/types";
import GuitarString from "./guitar-string.vue";

defineProps<{
  activeNotes?: Note[];
}>()
</script>

<template>
  <div class="guitar-fingerboard">
    <div class="guitar-strings-order">
      <div
          v-for="order in 6"
          class="order"
      >
        {{ order }}
      </div>
    </div>
    <div class="guitar-strings">
      <GuitarString
          :notes="notesService.getGuitarStringNotesPositions(Note.E)"
          :active-notes="activeNotes"
      />
      <GuitarString
          :notes="notesService.getGuitarStringNotesPositions(Note.B)"
          :active-notes="activeNotes"
      />
      <GuitarString
          :notes="notesService.getGuitarStringNotesPositions(Note.G)"
          :active-notes="activeNotes"
      />
      <GuitarString
          :notes="notesService.getGuitarStringNotesPositions(Note.D)"
          :active-notes="activeNotes"
      />
      <GuitarString
          :notes="notesService.getGuitarStringNotesPositions(Note.A)"
          :active-notes="activeNotes"
      />
      <GuitarString
          :notes="notesService.getGuitarStringNotesPositions(Note.E)"
          :active-notes="activeNotes"
      />
      <div class="guitar-frets">
        <div
            v-for="fret in 13"
            class="fret"
        >
          {{ fret - 1 }}
        </div>
      </div>
    </div>
    </div>
</template>

<style scoped lang="scss">
.guitar-fingerboard {
  width: 100%;
  display: flex;

  .guitar-strings-order {
    height: 100%;
    width: 3%;
    display: flex;
    flex-direction: column;
    .order {
      display: flex;
      align-items: center;
      height: 40px;
    }
  }

  .guitar-strings {
    width: 97%;
  }
}
.guitar-frets {
  display: flex;
  width: 100%;

  .fret {
    width: calc(100% / 13);
    display: flex;
    justify-content: center;
  }
}
</style>
