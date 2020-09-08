/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for article nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getArticles = makeRequest(graphql, `
    {
      allStrapiArticle {
        edges {
          node {
            Slug
          }
        }
      }
    }
    `).then(result => {
    result.data.allStrapiArticle.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.Slug}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          Slug: node.Slug,
        },
      })
    })
  });

  const getTags = makeRequest(graphql, `
    {
      allStrapiTag {
        edges {
          node {
            slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each user.
    result.data.allStrapiTag.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/tag.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  });

  // Queries for articles and authors nodes to use in creating pages.
  return Promise.all([
    getArticles,
    getTags,
  ])
};





// _________________________________________________________________________
// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions;
//   const getTags = makeoRequest(graphql, `
//   {
//     allStrapiTag{
//       edges{
//         node{
//           slug
//         }
//       }
//     }
//   }
//   `).then(result => {result.data.allStrapiTag.edges.forEach(({ node }) => {
//     createPage({
//       path: `/${node.slug}`,
//       component: path.resolve(`src/templates/tag.js`),
//       context: {
//         slug: node.slug,
//       },
//     })
//     return getTags;
//   })
  
// });
//   const getArticles = makeRequest(graphql, `
//     {
//       allStrapiArticle {
//         edges {
//           node {
//             Slug
//           }
//         }
//       }
//     }
//     `).then(result => {result.data.allStrapiArticle.edges.forEach(({ node }) => {
//       createPage({
//         path: `/${node.Slug}`,
//         component: path.resolve(`src/templates/article.js`),
//         context: {
//           Slug: node.Slug,
//         },
//       })
//       return getArticles; })
//   });
  
  
  
// }