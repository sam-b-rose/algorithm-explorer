export default [
  // 0
  {
    title: 'K-Means',
    description:
      'Clustering techniques are a common approach for anomaly detection. Clusters of "normal" characteristics are identified and if the distance between a new point and all other clusters is too great, it is identified as an anomaly. <br><br>K-Means Clustering aims to partition n observations (data points) into k clusters in which each observation belongs to the cluster with the nearest center. <br><br>For more examples of Clustering, please chose to explore more techniques below and select "Discover structure in your data"',
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
    title: 'One-Class Support Vector Machines',
    description:
      'If you were to plot your data in an n-dimensional space (where n is the number of features), One-Class Support Vector Machines (SVM) attempt to identify the region where most cases lie, these are considered "normal". It will then fit a hyperplane that best separates these "normal" examples from the rest. When you have a new data point, it is labeled as "normal" or an "anomaly" depending how close it is to the "normal" boundary',
    columns: [
      // 0
      {
        title: 'Pros',
        options: [
          'No assumptions on the distribution of the data',
          'Ability to find normal boundary that is non-linear',
          'Can be used in high-dimensional space'
        ]
      },
      // 1
      {
        title: 'Cons',
        options: [
          'Choosing the right hyper-parameters to find the appropriate non-linear shape of the boundary can be difficult',
          'Can be slow to train large datasets',
          'Memory intensive'
        ]
      }
    ]
  },
  // 2
  {
    title: 'Autoencoder',
    description:
      'An Autoencoder is a technique for dimensionality reduction. It is a type of neural network where the first part of the network, called the encoder, reduces the input to a lower dimension. The second part of the network, called the decoder, aims to reconstruct the original input. The goal is to create a model where the input and the output are the same. A new data point can be passed through the model and if the error between the input data and the computed output is too great, it can be flagged as an "anomaly".',
    columns: [
      // 0
      {
        title: 'Pros',
        options: [
          'Can capture non-linearities and subtle connections between the features',
          'Variations result in state-of-the-art results',
          'If the data is temporal, LSTM (long-short-term-memory) autoencoders can be used'
        ]
      },
      // 1
      {
        title: 'Cons',
        options: [
          'Requires a very large amount of data',
          'Many hyperparameters to tune',
          'Long training time',
          'Requires significant computing power for large datasets '
        ]
      }
    ]
  }
];
