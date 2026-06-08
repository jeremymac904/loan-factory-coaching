begin;

-- Seed the 3 community channels for the rebuilt platform.
insert into public.facegram_groups (id, name, slug, description, visibility)
values
  (
    '00000000-0000-0000-0000-000000000001',
    'Announcements',
    'announcements',
    'Coaching call reminders, schedule changes, and platform updates.',
    'internal'
  ),
  (
    '00000000-0000-0000-0000-000000000002',
    'Q&A',
    'q-a',
    'Ask a question. Get an answer from Jeremy, a coach, or a peer.',
    'internal'
  ),
  (
    '00000000-0000-0000-0000-000000000003',
    'Wins',
    'wins',
    'Closed a deal. Hit a new high. Hired an LO. Tell the room.',
    'internal'
  )
on conflict (slug) do nothing;

commit;
