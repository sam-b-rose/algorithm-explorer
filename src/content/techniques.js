import regression from './regression';
import clustering from './clustering';
import classification from './classification';
import anomaly from './anomaly';
import recommender from './recommender';

const OPTIONS_TITLE = 'Most common algorithms';

export default [
  // 0
  {
    title:
      'It looks like you should use <strong>Regression Techniques</strong>',
    description:
      'Regression algorithms are machine learning techniques for predicting continuous numerical values. They are supervised learning tasks which means they require labeled data.',
    cases: [
      'Predicting the appropriate price for a product based upon size, brand, and location.',
      'Predicting the number of sales each day based upon store location, public holidays, day of the week and the closest competitor store.'
    ],
    optionsTitle: OPTIONS_TITLE,
    options: [
      'Linear Regression',
      'Decision Trees',
      'Neural Networks',
      'K-Nearest Neighbors'
    ],
    children: regression
  },
  // 1
  {
    title:
      'It looks like you should use <strong>Classification Techniques</strong>',
    description:
      'Classification algorithms are machine learning techniques for predicting which category the input data belongs to. They are supervised learning tasks which means they require labeled data.',
    cases: [
      'Predicting a clinical diagnosis based upon symptoms, laboratory results and historical diagnosis.',
      'Predicting whether a healthcare claim is fraudulent using data such as claim amount, drug predisposition, disease and provider'
    ],
    optionsTitle: OPTIONS_TITLE,
    options: [
      'Support Vector Machines',
      'Naïve Bayes',
      'Logistic Regression',
      'Decision Trees',
      'Neural Networks'
    ],
    children: classification
  },
  // 2
  {
    title:
      'It looks like you should use <strong>Clustering Techniques</strong>',
    description:
      'Clustering algorithms are machine learning techniques to divide data into a number of groups where points in groups have similar traits. They are unsupervised learning tasks and therefore do not require labeled data.',
    cases: [
      'Segmenting your market based upon similar collections of customers using their location, spending habits and demographics.',
      'Understanding topics in your documents, whether they are emails, reports, or customer call transactions by exploring the common words'
    ],
    optionsTitle: OPTIONS_TITLE,
    options: [
      'K-Means',
      'Gaussian Mixture Model',
      'DBSCAN',
      'Agglomerative Hierarchical Clustering'
    ],
    children: clustering
  },
  //3
  {
    title:
      'It looks like you should use <strong>Recommendation Engine Techniques</strong>',
    description:
      'Recommendation Engines are created in order to predict a preference or rating that indicates a users interest in an item/product. The algorithms used to create this system find similarities between either the users, the items or both.',
    cases: [
      'Recommend clothing to a customer based on brands, colors, and price of previously purchased clothing',
      'Recommend a medical treatment for a patient based upon successful treatments given to similar patients using their condition, diagnosis and previous treatment information'
    ],
    optionsTitle: OPTIONS_TITLE,
    options: ['Content-based Recommenders', 'Memory-based Collaborative Filtering', 'Model-based Collaborative Filtering'],
    children: recommender
  },
  //4
  {
    title:
      'It looks like you should use <strong>Anomaly Detection Techniques</strong>',
    description:
      'Anomaly Detection is a technique used to identify unusual events or patterns that do not conform to expected behavior. Those identified are often referred to as anomalies or outliers.',
    cases: [
      'Detect abnormal behavior of equipment in a manufacturing plant using sensor data such as temperature, pressure and humidity',
      'Detect and prevent fraudulent spending by understanding normal customer spending amounts, locations and time between taransactions'
    ],
    optionsTitle: OPTIONS_TITLE,
    options: ['K-Means', 'One-class Support Vector Machines', 'Autoencoders'],
    children: anomaly
  }
];
