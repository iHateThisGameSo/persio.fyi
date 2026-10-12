import { getCollection } from 'astro:content';
import { isPublished, sortWriting } from './writing.mjs';

export async function getPublishedWriting() {
  return sortWriting(await getCollection('writing', ({ data }) => isPublished(data)));
}
