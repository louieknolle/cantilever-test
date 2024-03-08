import React from 'react';

const BookSearch = () => {
  return (
    <section className="flex flex-col justify-center gap-4">
      <h2 className="text-4xl font-extrabold">Add a Book</h2>
      <div className="w-[530px] max-w-[530px] rounded-xl bg-white p-8 text-[#545454]">
        <form className="flex flex-col gap-5">
          <label htmlFor="search" className="text-xl font-bold">
            Search
          </label>
          <input
            name="search"
            type="text"
            placeholder="Search by name or author"
            className="rounded bg-[#F4F4F5] p-5"
          />
          <button
            type="submit"
            className="w-1/4 rounded-lg bg-black px-[30px] py-[15px] text-white"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookSearch;
