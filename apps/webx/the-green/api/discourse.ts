import axios from 'axios';
import { getDiscourseApiKey, getDiscourseBaseUrl } from "../constants/discourse-parameters";

const discourseClient = (locale) => axios.create({
  baseURL: getDiscourseBaseUrl(locale),
});

export interface getCategoryByIDParams {
  id: string | string[];
}

export interface ICreateNewTopic {
  title: string;
  raw: string;
  category: string;
}

export interface getCategoryTopicsParams {
  slug: string;
  id: number;
  username: string;
}

export async function getCategoryByID({ id }: getCategoryByIDParams, locale: string, username = "system") {
  try {

    const { data } = await discourseClient(locale).get(`c/${id}/show.json`, {
      headers: {
        'Api-Key': getDiscourseApiKey(locale),
        'Api-Username': username,
        'Content-Type': 'application/json',
      },
    });
    return data;
  }
  catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error fetching category by id:', err);
    return null;
  }
}

export async function getCategoryTopics({ slug, id, username }: getCategoryTopicsParams, locale: string) {
  try {
    const formattedSlug = slug.charAt(0) === '/' ? slug : `/${slug}`;
    const { data } = await discourseClient(locale).get(`c${formattedSlug}/${id}/l/top.json?ascending=false`, {
      headers: {
        'Api-Key': getDiscourseApiKey(locale),
        'Api-Username': username,
        'Content-Type': 'application/json',
      },
    });

    const { topics } = data.topic_list;
    return topics;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error fetching topics for article:', err);
    return [];
  }
}

export async function getCategoryLatestTopicsOrderByCreatedDate({ slug, id, username }: getCategoryTopicsParams, locale: string) {
  try {
    const formattedSlug = slug.charAt(0) === '/' ? slug : `/${slug}`;
    const { data } = await discourseClient(locale).get(`c${formattedSlug}/${id}/l/latest.json?order=created`, {
      headers: {
        'Api-Key': getDiscourseApiKey(locale),
        'Api-Username': username,
        'Content-Type': 'application/json',
      },
    });

    const { topics } = data.topic_list;
    return topics;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error fetching topics for article:', err);
    return [];
  }
}

export async function getCategoriesList(locale, username = "system") {
  try {
    const { data } = await discourseClient(locale).get('categories.json', {
      headers: {
        'Api-Key': getDiscourseApiKey(locale),
        'Api-Username': username,
        'Content-Type': 'application/json',
      },
    });

    const { categories } = data.category_list;
    return categories;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error fetching categories for article:', err);
    return [];
  }
}


export async function getTopTopics (locale, username = "system") {
  try {
    const { data } = await discourseClient(locale).get('top.json', {
      "method": "GET",
      "headers": {
        "Api-Key": getDiscourseApiKey(locale),
        "Api-Username": username,
        'Content-Type': 'application/json',
      }
    })
    const { topics } = data.topic_list;
    return topics;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error fetching top topics:', err);
    return [];
  }
}


export async function getLatestTopicsOrderByCreatedDate(locale, username = "system") {
  try {
    const { data } = await discourseClient(locale).get('latest.json?order=created', {
      "method": "GET",
      "headers": {
        "Api-Key": getDiscourseApiKey(locale),
        "Api-Username": username,
        'Content-Type': 'application/json',
      }
    })
    const { topics } = data.topic_list;
    return topics;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error fetching top topics:', err);
    return [];
  }
}


export async function getSingleTopic (topic, topic_id, locale)  {
  try {
    const { data } = await discourseClient(locale).get(`t/${topic}/${topic_id}.json`, {
      "method": "GET",
      "headers": {
        "Api-Key": getDiscourseApiKey(locale),
        "Api-Username": "system",
      }
    })

    return data;

  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error fetching single topic:', err);
    return null;
  }
}
