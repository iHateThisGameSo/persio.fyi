import test from 'node:test';
import assert from 'node:assert/strict';
import { isPublished, isPublicationDate, sortWriting } from '../src/lib/writing.mjs';

test('publication requires an explicit published flag and a date no later than today', () => {
  const today = '2026-10-12';
  assert.equal(isPublished({ draft: false, date: today }, today), true);
  assert.equal(isPublished({ draft: true, date: '2026-10-01' }, today), false);
  assert.equal(isPublished({ date: '2026-10-01' }, today), false);
  assert.equal(isPublished({ draft: false, date: '2026-10-13' }, today), false);
  assert.equal(isPublished({ draft: false, date: 'invalid' }, today), false);
});

test('publication dates reject impossible calendar days and ambiguous formats', () => {
  assert.equal(isPublicationDate('2024-02-29'), true);
  for (const date of ['2026-02-29', '2026-04-31', '2026-1-2', '10/12/2026', 'invalid']) {
    assert.equal(isPublicationDate(date), false, date);
  }
});

test('newest posts appear first, same-day order is stable, input is preserved', () => {
  const posts = [
    { slug: 'old', data: { date: '2026-10-01' } },
    { slug: 'z', data: { date: '2026-10-12' } },
    { slug: 'a', data: { date: '2026-10-12' } },
  ];
  assert.deepEqual(sortWriting(posts).map(post => post.slug), ['a', 'z', 'old']);
  assert.equal(posts[0].slug, 'old');
});
