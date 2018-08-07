export default [
  // 0
  {
    title: 'Content-based Recommenders',
    description:
      "Content-based recommenders suggest similar items to those already liked by the customer, whether explicitly (e.g. by rating) or implicitly (by purchasing). This type of system uses metadata describing the item.<br><br> Each item is represented as a vector and a distance metric compares the items' vectors to find the most similar.",
    columns: [
      // 0
      {
        title: 'Pros',
        options: [
          'Quick to implement',
          'No popularity bias - can recommend new items',
          'Results are interpretable'
        ]
      },
      // 1
      {
        title: 'Cons',
        options: [
          'Important to have meaningful metadata, tagging can be tiresome',
          '"Cold start problem" for new users without history of liking items',
          "Limits novelty as won't suggest items too disimilar to previously liked"
        ]
      }
    ]
  },
  // 1
  {
    title: 'Memory-based Collaborative Filtering',
    description:
      "Collaborative filtering is a method of predicting a user's interest by analysing preferences by other users. There are two types, user-based filtering and item-based filtering. <br><br>Memory-based filtering computes similarity between users, or items, and uses other users' ratings to make a prediction; a typical approach is a neighborhood-based algorithm. The predicted rating for the user and each item is calcuated using other users' ratings and the similarity distance",
    columns: [
      // 0
      {
        title: 'Pros',
        options: [
          'Quick to implement',
          'Results are interpretable',
          'User based suggestions can result in a diverse set of suggestions across domains'
        ]
      },
      // 1
      {
        title: 'Cons',
        options: [
          'Data sparsity can result in performance issues',
          'Slow & computationally expensive - requires the whole dataset to make a prediction',
          '"Cold start problem" - new items struggle to be recommended (popularity bias) and for new users with little history it\'s hard to make recommendations'
        ]
      }
    ]
  },
  // 2
  {
    title: 'Model-based Collaborative Filtering',
    description:
      "Collaborative filtering is a method of predicting a user's interest by analysing preferences by other users. There are two types, user-based filtering and item-based filtering.  <br><br>Model-based recommenders use training data to build a model, a mathematical formula that takes the features of an observation and calculates a prediction. There are many algorithms to use, including neural networks, Bayesian networks and matrix factorization.",
    columns: [
      // 0
      {
        title: 'Pros',
        options: [
          "Fast & scalable; doesn't require the full dataset each time",
          'User-based suggestions can result in a diverse set of suggestions across domains',
          'User-based suggestions do not require metadata'
        ]
      },
      // 1
      {
        title: 'Cons',
        options: [
          'Data sparsity can result in performance issues',
          'Models can be complex and slow to train',
          '"Cold start problem" - new items struggle to be recommended (popularity bias) and for new users with no history its hard to make good recommendations'
        ]
      }
    ]
  }
];
