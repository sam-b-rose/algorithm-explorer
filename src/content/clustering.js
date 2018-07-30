export default [
  // 0
  {
    title: 'K-means',
    description:
      'K-Means Clustering aims to partition the observations into k clusters. The algorithm will determine which observation is in which cluster and also the center of each cluster. A new observation is assiged the cluster whose center it is nearest to.',
    columns: [
      // 0
      {
        title: 'Pros',
        options: [
          'Simple and easy to implement',
          'Easy to interpret results',
          'Fast'
        ]
      },
      // 1
      {
        title: 'Cons',
        options: [
          'Sensitive to outliers',
          'You must define the number of clusters',
          'Assumes the clusters are spherical',
          'The clusters are found using a random starting point so may not be repeatable and can require multiple runs to find an optimal solutions'
        ]
      }
    ]
  },
  // 1
  {
    title: 'Gaussian Mixture Model',
    description:
      "With a Gaussian Mixture Model (GMM), we are assuming that the k clusters are of normal distribution. It's algorithm tries to find the mean and standard deviation of each of these clusters. For a new observation, the probability it belongs to each cluster is calculated, resulting in a soft assignment.",
    columns: [
      // 0
      {
        title: 'Pros',
        options: [
          'Does not enforce the clusters to be circular',
          'Points can be assigned to multiple clusters'
        ]
      },
      // 1
      {
        title: 'Cons',
        options: [
          'You must define the number of clusters',
          'Difficult to interpret'
        ]
      }
    ]
  },
  // 2
  {
    title: 'DBSCAN',
    description:
      'Density-Based Spatial Clustering of Applications with Noise (DBSCAN) attempts to find dense areas of data points and identifies these as a cluster. If data points are close enough to each other, and there are a sufficient number of them, they form a cluster. If not, they are labeled as noise and ignored.',
    columns: [
      // 0
      {
        title: 'Pros',
        options: [
          'Can find arbitrarily shaped clusters',
          'Does not require defining the number of clusters',
          'Robust to outliers'
        ]
      },
      // 1
      {
        title: 'Cons',
        options: [
          'Cannot cluster datasets with large differences in densities',
          'Can perform poorly on high dimensional data',
          'Choosing the right parameters for density can be difficult'
        ]
      }
    ]
  },
  // 3
  {
    title: 'Agglomerative Hierarchical Clustering',
    description:
      'Agglomerative hierarchical clustering is an algorithm that builds a hierarchy of clusters. Initially all points start as their own cluster, then the two nearest clusters merge as the same cluster. This process continues, clusters merging until only one cluster containing all the data points remains. To identify the significant clusters a threshold would be chosen.',
    columns: [
      // 0
      {
        title: 'Pros',
        options: [
          'Easy probabilistic model with interpretable topics',
          'Does not require defining the number of clusters',
          'Clusters can be arbitrarily shaped'
        ]
      },
      // 1
      {
        title: 'Cons',
        options: [
          'Slow and therefore not suitable for big data',
          'Can be hard to identify the correct number of clusters',
          'Interpretation can be confusing'
        ]
      }
    ]
  }
];
