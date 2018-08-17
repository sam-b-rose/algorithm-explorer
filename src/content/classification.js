export default [
  // 0
  {
    title: 'Support Vector Machines',
    description:
      'If you plot your data in an n-dimensional space (where n is the number of features), Support Vector Machines (SVM) attempt to fit a hyperplane that best separates the categories. When you have a new data point, its position in relation to the hyperplane will predict which category the point belongs to.',
    examples: [
      {
        text: 'Python',
        href:
          'https://dataplatform.cloud.ibm.com/analytics/notebooks/v2/8e70b9a2-233e-4d02-b76f-f4c591f7c9a1/view?access_token=816b86d52601bbc1123da38682685e879ca7de7c47863d67f83772e87838d257'
      }
    ],
    columns: [
      // 0
      {
        title: 'Pros',
        options: [
          'High accuracy',
          'Ability to find solutions even if non-linearly separable',
          'Good for high-dimensional space (lots of features)'
        ]
      },
      // 1
      {
        title: 'Cons',
        options: [
          'Hard to interpret',
          'Can be slow to train large data sets',
          'Memory-intensive'
        ]
      }
    ]
  },
  // 1
  {
    title: 'Naïve Bayes',
    description:
      'Naïve Bayes assumes that all features are independent, that they independently contribute to the probability of the target variable\'s class; this does not always hold true which is why it is referred to as "Naive". Various probabilities and likelihood values are calculated based upon the frequency they appear in the data and the final probabilities calculated using a formula called Bayes Theorem.',
    examples: [
      {
        text: 'Python',
        href:
          'https://dataplatform.cloud.ibm.com/analytics/notebooks/v2/40a67af0-6637-4aff-b8b6-bad1fe165abc/view?access_token=9ef86b37a6149c3f81b138c76f139800e85f6bca0d19cb1b52ac7c97174f4a43'
      }
    ],
    columns: [
      // 0
      {
        title: 'Pros',
        options: [
          'Simple and easy to interpret',
          'Computationally fast',
          'Good for high-dimensional space (lots of features)'
        ]
      },
      // 1
      {
        title: 'Cons',
        options: [
          'Performance will be inhibited if significant dependence between variables',
          'If a class that appears in the test data did not appear in the training data, it will be given a probability of zero'
        ]
      }
    ]
  },
  // 2
  {
    title: 'Logistic Regression',
    description:
      'Logistic regression predicts the probability of a binary outcome. A new observation is predicted to be within the class if its probability is above a set threshold. There are methods to use Logistic Regression for scenarios where there are multiple classes.',
    examples: [
      {
        text: 'Python',
        href:
          'https://dataplatform.cloud.ibm.com/analytics/notebooks/v2/9918ce54-47d9-4fad-9d6a-34ffa01d0beb/view?access_token=f96693cf491105dcb4f04c5ed7598e3c4ccf37658c4a68e3b47e4706e338042e'
      }
    ],
    columns: [
      // 0
      {
        title: 'Pros',
        options: [
          'Quick to compute and can be updated easily with new data',
          'Output can be interpreted as probability; this can be used for ranking',
          'Regularization techniques can be used to prevent overfitting'
        ]
      },
      // 1
      {
        title: 'Cons',
        options: [
          'Unable to learn complex relationships',
          'Difficult to capture non-linear relationships (without first transforming data which can be complicated)'
        ]
      }
    ]
  },
  // 3
  {
    title: 'Decision Trees (inc. Random Forest & GBT)',
    description:
      "Decision trees learn how to best split the dataset into separate branches, allowing it to learn non-linear relationships. <br><br>Random forests (RF) and Gradient Boosted Trees (GBT) combine predictions from many individual decision trees. As they use a collection of results to make a final decision, they are referred to as 'Ensemble techniques'.",
    examples: [
      {
        text: 'Python',
        href:
          'https://dataplatform.cloud.ibm.com/analytics/notebooks/v2/d3f5c820-9e9f-4332-9265-5301682d04ba/view?access_token=135180adab14764289934af5feeb385699bfc57703ade4e5d1c1f2a0b6262e17'
      }
    ],
    columns: [
      // 0
      {
        title: 'Pros',
        options: [
          'A single decision tree is fast to train ',
          'Robust to noise/outliers and missing values ',
          'Random Forests perform very well “out-of-the-box”'
        ]
      },
      // 1
      {
        title: 'Cons',
        options: [
          'Single decision trees are prone to overfitting (which is where ensembles come in!)',
          'Complex trees are hard to interpret',
          'Gradient Boosted Trees have a lot of hyper-parameters to tune and are also prone to overfitting.'
        ]
      }
    ]
  },
  {
    title: 'Neural Networks',
    description:
      'Neural networks can learn complex patterns using layers of neurons which mathematically transform the data. The layers between the input and output are referred to as “hidden layers”. A neural network can learn relationships between the features that other algorithms cannot easily discover.',
    examples: [
      {
        text: 'Python',
        href:
          'https://dataplatform.cloud.ibm.com/analytics/notebooks/v2/54683b05-9f28-4843-a904-a269f5e021aa/view?access_token=8ed197d423df638001d0d943d013a1d7dca67afae7a0283c4f5ce1950189286e'
      }
    ],
    columns: [
      //
      {
        title: 'Pros',
        options: [
          'Extremely powerful / state of the art for many domains (e.g. computer vision, speech recognition)',
          'Can learn even very complex relationships',
          'Hidden layers reduce need for feature engineering (no need to understand underlying data)'
        ]
      },
      //
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
  }
];
