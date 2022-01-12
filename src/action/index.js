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
export const editNote = (created, name, category, content, dates) => ({
  type: "EDIT_NOTE",
  created,
  name,
  category,
  content,
  dates,
});

export const archiveNote = (created) => ({
  type: "ARCHIVE_NOTE",
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
