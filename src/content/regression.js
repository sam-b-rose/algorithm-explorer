export default [
  // 0
  {
    title: 'Linear Regression',
    description:
      'Linear regression attempts to fit a straight hyperplane to your dataset that is closest to all data points. It is most suitable when there are linear relationships between the variables in the dataset.',
    examples: [
      {
        text: 'Python'
      },
      {
        text: 'SparkML'
      },
      {
        text: 'SystemML',
        href:
          'https://dataplatform.ibm.com/exchange/public/entry/view/c6c1e7f92024edce9c2a7375677fa3f3'
      },
      {
        text: 'SPSS',
        href:
          'https://dataplatform.ibm.com/exchange/public/entry/view/0aade68157f85db5156f989baa074487'
      }
    ],
    columns: [
      {
        title: 'Pros',
        options: [
          'Quick to compute and can be updated easily with new data',
          'Relatively easy to understand and explain',
          'Regularization techniques can be used to prevent overfitting'
        ]
      },
      {
        title: 'Cons',
        options: [
          'Unable to learn complex relationships',
          'Difficult to capture non-linear relationships (without first transforming data which can be complicated)'
        ]
      }
    ]
  },
  // 1
  {
    title: 'Decision Trees',
    description:
      'Decision trees learn how to best split the dataset into separate branches, allowing it to learn non-linear relationships. <br><br>Random forests (RF) and Gradient Boosted Trees (GBT) are two algorithms that build many individual decision trees, pooling their predictions. As they use a collection of results to make a final decision, they are referred to as \'Ensemble techniques\'.',
    examples: [
      {
        text: 'Python'
      },
      {
        text: 'SparkML'
      }
    ],
    columns: [
      {
        title: 'Pros',
        options: [
          'A single decision tree is fast to train',
          'Robust to noise/outliers and missing values',
          'RF perform very well “out-of-the-box"'
        ]
      },
      {
        title: 'Cons',
        options: [
          'Single decision trees are prone to overfitting (which is where ensembles come in!)',
          'Complex trees are hard to interpret'
        ]
      }
    ]
  },
  // 2
  {
    title: 'Neural Networks',
    description:
      'Neural networks can learn complex patterns using layers of neurons which mathematically transform the data. The layers between the input and output are referred to as “hidden layers”. A neural network can learn relationships between the features that other algorithms cannot easily discover.',
    examples: [
      {
        text: 'Python'
      },
      {
        text: 'Keras'
      }
    ],
    columns: [
      {
        title: 'Pros',
        options: [
          'Extremely powerful / state of the art for many domains (e.g. computer vision, speech recognition)',
          'Can learn even very complex relationships',
          'Hidden layers reduce need for feature engineering (no need to understand underlying data)'
        ]
      },
      {
        title: 'Cons',
        options: [
          'Require a very large amount of data!',
          'Prone to overfitting',
          'Long training time',
          'Requires significant computing power for large datasets (computationally expensive)',
          'Model is a "black box", unexplainable'
        ]
      }
    ]
  },
  // 3
  {
    title: 'K-Nearest Neighbor',
    description:
      'K-Nearest Neighbor (KNN) makes a prediction for a new observation by searching for the most similar training observations and pooling their values.',
    examples: [
      {
        text: 'Python'
      }
    ],
    columns: [
      {
        title: 'Pros',
        options: [
          'Simple',
          'Powerful',
          'No training involved'
        ]
      },
      {
        title: 'Cons',
        options: [
          'Expensive & slow to predict new instances',
          'Performs poorly on high dimensional datasets'
        ]
      }
    ]
  }
];
