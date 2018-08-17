export default [
  // 0
  {
    title: 'Linear Regression',
    description:
      'Linear regression attempts to fit a straight hyperplane to your dataset that is closest to all data points. It is most suitable when there are linear relationships between the variables in the dataset.',
    examples: [
      {
        text: 'Python',
        href:
          'https://dataplatform.cloud.ibm.com/analytics/notebooks/v2/f5d68ca5-d447-4e65-a0a2-ef6667273d09/view?access_token=272ea47e1fa45e87aa7dc7a5f9e43e8bd9e711532dbac4635f0884005bfa119c'
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
      "Decision trees learn how to best split the dataset into separate branches, allowing it to learn non-linear relationships. <br><br>Random forests (RF) and Gradient Boosted Trees (GBT) are two algorithms that build many individual decision trees, pooling their predictions. As they use a collection of results to make a final decision, they are referred to as 'Ensemble techniques'.",
    examples: [
      {
        text: 'Python',
        href:
          'https://dataplatform.cloud.ibm.com/analytics/notebooks/v2/796bf54a-0ec8-4aa6-8806-f0a2edcb396b/view?access_token=4d6e55059d9b0e5012900124b7d81b9f6f85924c914b0e40941e2734972ae4a6'
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
        text: 'Python',
        href:
          'https://dataplatform.cloud.ibm.com/analytics/notebooks/v2/3efdb5a2-0c33-4675-8336-be03929798a8/view?access_token=092b4149aa20ed1299d4def2f657b8da8c358d0baee9cb2d2f836d51fcc3f743'
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
        text: 'Python',
        href:
          'https://dataplatform.cloud.ibm.com/analytics/notebooks/v2/4cf4ed48-d075-4d53-9ee4-df19f9f7673f/view?access_token=608a6cd9071b4cfd4146755c4e61a40d1e974cf45bf1289a3c614e059a7471a6'
      }
    ],
    columns: [
      {
        title: 'Pros',
        options: ['Simple', 'Powerful', 'No training involved']
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
