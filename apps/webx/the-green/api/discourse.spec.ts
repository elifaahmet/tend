/**
 * @jest-environment node
 */

import {getCategoriesList, getCategoryByID, getCategoryTopics, getSingleTopic, getTopTopics} from './discourse';
import path from "path";
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

describe('The Green > api > discourse', () => {
  describe('getCategoryByID()', () => {
    it('should return the category object', async () => {
      const { category } = await getCategoryByID({ id: '1' }, 'en-US');
      expect(category).toEqual(expect.objectContaining( { id: 1} ));
    })
  });
});

describe('The Green > api > discourse', () => {
  describe('getCategoryTopics', () => {
    it('should return the category topics of uncategorized', async () => {
      const categoryTopics = await getCategoryTopics({
        slug: 'uncategorized',
        id: 1,
        username: 'system' }, 'en-US');
      expect(categoryTopics.length).toBeGreaterThanOrEqual( 1 );
    })
  });
});

describe('The Green > api > discourse', () => {
  describe('getCategoriesList()', () => {
    it('should return the category list', async () => {
      const categories = await getCategoriesList('en-US');
      expect(categories.length).toBeGreaterThanOrEqual( 2 );
    })
  });
});

describe('The Green > api > discourse', () => {
  describe('getTopTopics()', () => {
    it('should return the top topics', async () => {
      const topics = await getTopTopics('en-US');
      expect(topics.length).toBeGreaterThanOrEqual( 1 );
    })
  });
});

describe('The Green > api > discourse', () => {
  describe('getSingleTopic()', () => {
    it('should return the topic info for welcome to discourse', async () => {
      const topic = await getSingleTopic('welcome-to-discourse', 7, 'en-US');
      expect(topic).toEqual( expect.objectContaining( { id: 7} ) );
    })
  });
});
