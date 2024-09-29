
// utils/fetchData.js

import { baseurl } from "@/config/config";


// import { getCookiesData } from "@/helper/functions";
export async function fetchData(endpoint, options = {}) {
  try {
    const {
      method = "GET",
      body,
      params = {},
      query = {}, headers = {}, token,
      cacheTime = 60,
    } = options;


    var authToken = {}
    if (token) {
      authToken = {
        Authorization: "Bearer " + token
      }
    }

    // Validate token and endpoint
    if (!endpoint || typeof endpoint !== "string" || endpoint.trim() === "") {
      throw new Error("Invalid or missing endpoint");
    }


    // Build the URL
    let url = `${baseurl}${endpoint}`;

    // Validate and replace URL params
    if (params && Object.keys(params).length > 0) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value === undefined || value === null || value === "") {
          throw new Error(`Invalid or missing URL parameter: ${key}`);
        }
        url = url.replace(`:${key}`, value);
      });
    }

    // Validate and append query parameters
    if (query && typeof query === "object") {
      const validQuery = Object.entries(query)
        .filter(
          ([_, value]) => value !== undefined && value !== null && value !== ""
        ) // Filter out invalid values
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});

      const queryString = new URLSearchParams(validQuery).toString();
      if (queryString) {
        url += `?${queryString}`;
      }
    }
    const defaultHeaders = {
      'Content-Type': 'application/json',

    };
    const mergedHeaders = { ...defaultHeaders, ...headers, ...authToken };


    // Make the fetch request
    const res = await fetch(url, {
      method,
      headers: mergedHeaders,
      body:
        method === "GET"
          ? undefined : JSON.stringify(body)
      ,
      next: { revalidate: cacheTime },
    });

    // if (!res.ok) {
    //   const errorData = await res.json();
    //   throw new Error(JSON.stringify(errorData));
    // }

    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return { error: "Data could not be fetched" };
  }
}


const requests = {
  get: async (endpoint, query, params, token, headers, cacheTime = 3600) =>
    await fetchData(endpoint, {
      method: 'GET',
      cacheTime: cacheTime,
      query, params, headers, token // Cache for 5 minutes
    }),
  post: async (endpoint, body,token, headers) =>
    await fetchData(endpoint, {
      method: 'POST',
      body, headers // Cache for 5 minutes
    }),
  put: async (endpoint, body, params, token, headers) =>
    await fetchData(endpoint, {
      method: 'PUT', body, params, headers, token // Cache for 5 minutes
    }),
  patch: async (endpoint, body, params, token, headers) =>
    await fetchData(endpoint, {
      method: 'PATCH', body, params, headers, token
    }),
  delete: async (endpoint, params, token, headers) =>
    await fetchData(endpoint, {
      method: 'DELETE', params, headers, token // Cache for 5 minutes
    }),
    deletebulk: async (endpoint, body, token, headers) =>
      await fetchData(endpoint, {
        method: 'DELETE', body, headers, token // Cache for 5 minutes
      }),


};



export default requests;
