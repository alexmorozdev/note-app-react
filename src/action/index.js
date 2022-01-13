export const addNewNote = (
  name,
  created,
  category,
  content,
  dates,
  status
) => ({
  type: "ADD_NOTE",
  name,
  created,
  category,
  content,
  dates,
  status,
});

export const addEditNote = (name, created, category, content, dates) => ({
  type: "ADD_EDIT_NOTE",
  name,
  created,
  category,
  content,
  dates,
});

export const editNote = (name, created, category, content) => ({
  type: "EDIT_NOTE",
  name,
  created,
  category,
  content,
});

export const cleanEditNote = () => ({
  type: "CLEAN_EDIT_NOTE",
});

export const archiveNote = (created) => ({
  type: "ARCHIVE_NOTE",
  created,
});

export const unarchiveNote = (created) => ({
  type: "UNARCHIVE_NOTE",
  created,
});

export const deleteNote = (created) => ({
  type: "DELETE_NOTE",
  created,
});

export const deleteAllNotes = () => ({
  type: "DELETE_ALL_NOTES",
});

export const archiveAllNotes = () => ({
  type: "ARCHIVE_ALL_NOTES",
});

export const unarchiveAllNotes = () => ({
  type: "UNARCHIVE_ALL_NOTES",
});
