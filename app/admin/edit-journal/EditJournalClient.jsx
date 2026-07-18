'use client';

import { useSearchParams } from 'next/navigation';
import EditJournalForm from './EditJournalForm';

export default function EditJournalClient() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return <EditJournalForm id={id} />;
}