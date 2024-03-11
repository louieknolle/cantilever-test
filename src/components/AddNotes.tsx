import NotesCard from './NotesCard';

const AddNotes = () => {
  return (
    <section
      className="mb-10 flex w-11/12 flex-col justify-center gap-4"
      id="add-notes"
    >
      <h2 className="text-4xl font-extrabold">Add Notes</h2>
      <NotesCard />
    </section>
  );
};

export default AddNotes;
