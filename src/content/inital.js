import techniques from './techniques';

export default {
  title: 'Are you trying to...',
  options: [
    'Predict a numerical outcome?',
    'Predict a categorical outcome?',
    'Discover structure in your data?',
    'Make recommendations?',
    'Detect outliers or unusual behavior?'
  ],
  optionDetails: [
    [
      'Predicting the appropriate price for a product',
      'Predicting the number of sales each day'
    ],
    [
      'Predicting a clinical diagnosis',
      'Predicting whether a healthcare claim is fraudulent or not'
    ],
    [
      'Segment your market based upon similar collections of customers',
      'Understanding topics (e.g. payments, delivery, returns) in your customer emails'
    ],
    [
      'Recommend clothing based upon previous purchases',
      'Recommend a treatment based upon success for similar patients'
    ],
    [
      'Detect abnormal behaviour of equipment in a manufacturing plant',
      'Detect and prevent fraudulent spending'
    ]
  ],
  children: techniques
};
