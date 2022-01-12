function ArchivedNotes() {
  return (
    <div className="archived-notes">
      <h2>Archived notes</h2>
      <table className="archived-notes-table">
        <thead>
          <tr id="archived-content">
            <th></th>
            <th>Name</th>
            <th>Category</th>
            <th></th>
            <th>{/* <i class="icon unarchive-all fas fa-archive"></i> */}</th>
            <th>
              {/* <i class="icon delete-all-archived fas fa-trash"></i> */}
            </th>
          </tr>
        </thead>
        <tbody className="archived-table-body"></tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}

export default ArchivedNotes;
