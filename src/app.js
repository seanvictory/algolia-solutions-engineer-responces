/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  'DHVEYWXR8J', // Application ID
  'e49ee15f24ca645060a42103c7b569dc' // Search-Only API Key
);

const search = instantsearch({
  indexName: 'hackathon_submissions', // Name of the index you want to search
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search for projects',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    cssClasses: {
      item: 'each-hit', // Custom CSS for each hit
    },
    templates: {
      item: `
<article>
  <h1><a href={{#helpers.highlight}}{ "attribute": "Submission Url" }{{/helpers.highlight}}>{{#helpers.highlight}}{ "attribute": "Submission Title" }{{/helpers.highlight}}</a></h1>
  <h3>Table {{#helpers.highlight}}{ "attribute": "Table Number" }{{/helpers.highlight}}</h3>
  <p class="description">{{#helpers.highlight}}{ "attribute": "Submission Tagline" }{{/helpers.highlight}}</p>
</article>
`,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
  instantsearch.widgets.refinementList({
    // Adds a filter search for the prize category
    container: '#refinement-list',
    attribute: 'Opt-in prize',
    limit: 5,
    showMore: true,
    sortBy: ['name:asc'],
  }),
]);

search.start();
