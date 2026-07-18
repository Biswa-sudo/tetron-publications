// app/admin/edit-journal/page.js
import { Suspense } from 'react';
import EditJournalClient from './EditJournalClient';

export default function EditJournalPage() {
  return (
    <Suspense fallback={<div className="container my-5 text-center">Loading...</div>}>
      <EditJournalClient />
    </Suspense>
  );
}