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

export const deleteAllNotes = () => ({
  type: "DELETE_ALL_NOTES",
});

export const archiveAllNotes = () => ({
  type: "ARCHIVE_ALL_NOTES",
});
