<script setup lang="ts">
import Card from "../../common/components/card.vue";
import {notesService} from "../../notes/model/notes.service.ts";
import {computed, ref, watchEffect} from "vue";
import {Note} from "../../notes/types";
import NotesRow from "./notes-row.vue";
import GuitarFingerboard from "./guitar-fingerboard.vue";

enum Mode {
  RESULT = 'result',
  WAITING = 'waiting',
}

const currentNote = ref<Note>(Note.D);
const mode = ref<Mode>(Mode.RESULT);

const isResultMode = computed<boolean>(() => mode.value === Mode.RESULT);
const resultNotes = computed<Note[]>(() => isResultMode.value ? [currentNote.value] : []);
const actionTitle = computed<string>(() => {
  if (mode.value === Mode.WAITING) {
    return 'Пробел для результата';
  } else if (mode.value === Mode.RESULT) {
    return 'Пробел для обновления';
  } else {
    return '';
  }
})

window.addEventListener('keydown', (e) => {
  if (e.code == 'Space') {
    if (mode.value === Mode.WAITING) {
      mode.value = Mode.RESULT;
    } else if (mode.value === Mode.RESULT) {
      mode.value = Mode.WAITING;
    }
  }
});

watchEffect(() => {
  if (mode.value === Mode.WAITING) {
    generateNote();
  }
});

function generateNote(): void {
  const prevNote: Note = currentNote.value;
  while (prevNote === currentNote.value) {
    currentNote.value = notesService.getRandomNote();
  }
}
</script>

<template>
  <div class="container">
    <Card class="note-card">
      <h2>Генератор случайных нот</h2>
      <div class="note">{{ currentNote }}</div>
      <p>({{ actionTitle }})</p>
    </Card>
    <Card class="info-card">
      <h3>Ноты</h3>
      <NotesRow :note="currentNote" :tips="isResultMode" />
      <h3>На грифе</h3>
      <GuitarFingerboard :active-notes="resultNotes" />
    </Card>
  </div>
</template>

<style scoped lang="scss">
.container {
  flex-direction: column;
}
.card {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
}

.note-card .note {
  font-size: 50px;
}

.note-card, .info-card {
  margin-top: 20px;
}

.notes-row {
  margin-bottom: 30px;
}

.info-card {
  h3 {
    margin-bottom: 30px;
  }
}
</style>
