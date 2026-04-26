'use client';

import { useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { fetchNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';
import Pagination from '@/components/Pagination/Pagination';
import css from '../../../notes/notes.module.css';

function FilteredNotesClient() {
  const { slug } = useParams<{ slug: string[] }>();
  const [page, setPage] = useState(1);

  const tag = slug[0] === 'all' ? undefined : slug[0];

  const { data, isLoading, isError } = useQuery({
    queryKey: ['notes', page, '', tag],
    queryFn: () => fetchNotes({ page, perPage: 12, tag }),
    placeholderData: keepPreviousData,
  });

  const notes = data?.notes ?? [];
  const totalPages = data?.totalPages ?? 0;

  return (
    <div className={css.app}>
      <div className={css.toolbar}>
        <span>{tag ? `Tag: ${tag}` : 'All notes'}</span>
        {totalPages > 1 && (
          <Pagination
            pageCount={totalPages}
            currentPage={page}
            onPageChange={setPage}
          />
        )}
      </div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong. Please try again.</p>}
      {notes.length > 0 && <NoteList notes={notes} />}
      {!isLoading && !isError && notes.length === 0 && (
        <p>No notes found for this filter.</p>
      )}
    </div>
  );
}

export default FilteredNotesClient;
