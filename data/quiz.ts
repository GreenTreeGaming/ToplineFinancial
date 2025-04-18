export type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
  points: number;
};

export const quizData: QuizQuestion[] = [
  {
    question: "What is a budget?",
    options: [
      "a) A loan you get from the bank",
      "b) A detailed plan for managing your money",
      "c) A way to track calories",
      "d) A type of insurance"
    ],
    answer: "b) A detailed plan for managing your money",
    points: 5,
  },
  {
    question: "Why is it important to track your spending?",
    options: [
      "a) To brag about your purchases",
      "b) To make your bank account look good",
      "c) To understand where your money goes and make better decisions",
      "d) So your parents don't ask questions"
    ],
    answer: "c) To understand where your money goes and make better decisions",
    points: 5,
  },
  {
    question: "What is the 50/30/20 rule?",
    options: [
      "a) A savings account limit",
      "b) A credit score rating",
      "c) A budgeting method (Needs/Wants/Savings)",
      "d) A loan repayment schedule"
    ],
    answer: "c) A budgeting method (Needs/Wants/Savings)",
    points: 5,
  },
  {
    question: "What is considered a \"need\" in your budget?",
    options: [
      "a) Streaming subscriptions",
      "b) A new phone",
      "c) Rent or housing",
      "d) Concert tickets"
    ],
    answer: "c) Rent or housing",
    points: 5,
  },
  {
    question: "How much money should you aim to have in an emergency fund?",
    options: [
      "a) Enough for one month of expenses",
      "b) $500 flat",
      "c) 3–6 months of living expenses",
      "d) Just whatever's left over each month"
    ],
    answer: "c) 3–6 months of living expenses",
    points: 5,
  },
  {
    question: "Why is saving money important?",
    options: [
      "a) So you can skip paying bills",
      "b) To impress friends",
      "c) For unexpected expenses and long-term goals",
      "d) Because your parents say so"
    ],
    answer: "c) For unexpected expenses and long-term goals",
    points: 5,
  },
  {
    question: "What does \"pay yourself first\" mean?",
    options: [
      "a) Spend money on fun things before bills",
      "b) Buy yourself a gift when you get paid",
      "c) Save a portion of your income before spending on anything else",
      "d) Use your savings to pay off credit cards"
    ],
    answer: "c) Save a portion of your income before spending on anything else",
    points: 5,
  },
  {
    question: "Which of these is a good savings habit?",
    options: [
      "a) Saving only after all spending",
      "b) Keeping money under your mattress",
      "c) Setting savings goals and automating deposits",
      "d) Avoiding bank accounts"
    ],
    answer: "c) Setting savings goals and automating deposits",
    points: 5,
  },
  {
    question: "Which tool helps you track how much money you're spending?",
    options: [
      "a) Spotify",
      "b) Budgeting app or spreadsheet",
      "c) A calendar",
      "d) Calculator only"
    ],
    answer: "b) Budgeting app or spreadsheet",
    points: 5,
  },
  {
    question: "What type of account earns interest on your money?",
    options: [
      "a) Checking account",
      "b) Savings account",
      "c) Prepaid card",
      "d) Debit card"
    ],
    answer: "b) Savings account",
    points: 5,
  },
  {
    question: "What is a credit score?",
    options: [
      "a) Your yearly income",
      "b) A grade for your savings habits",
      "c) A number that shows how reliable you are with credit",
      "d) Your total amount of debt"
    ],
    answer: "c) A number that shows how reliable you are with credit",
    points: 5,
  },
  {
    question: "What can hurt your credit score?",
    options: [
      "a) Paying bills on time",
      "b) Having a savings account",
      "c) Missing credit card payments",
      "d) Applying for a job"
    ],
    answer: "c) Missing credit card payments",
    points: 5,
  },
  {
    question: "Which of the following is considered \"good debt\"?",
    options: [
      "a) Payday loans",
      "b) Gambling debt",
      "c) Student loans for a degree",
      "d) Credit card debt from shopping"
    ],
    answer: "c) Student loans for a degree",
    points: 5,
  },
  {
    question: "Which is true about interest on credit cards?",
    options: [
      "a) It doesn't affect you if you only make minimum payments",
      "b) You pay more the longer you carry a balance",
      "c) It's always under 1%",
      "d) It only applies if your credit score is low"
    ],
    answer: "b) You pay more the longer you carry a balance",
    points: 5,
  },
  {
    question: "What happens if you only make the minimum payment on a credit card?",
    options: [
      "a) The balance is paid off quickly",
      "b) You avoid interest",
      "c) You'll stay in debt longer and pay more interest",
      "d) You build wealth faster"
    ],
    answer: "c) You'll stay in debt longer and pay more interest",
    points: 5,
  },
  {
    question: "Which of these is a consequence of not paying off your credit card?",
    options: [
      "a) Higher income",
      "b) A better interest rate",
      "c) Damage to your credit score",
      "d) Free cash"
    ],
    answer: "c) Damage to your credit score",
    points: 5,
  },
  {
    question: "How old do you need to be to open a credit card without a co-signer?",
    options: [
      "a) 16",
      "b) 18",
      "c) 21",
      "d) 25"
    ],
    answer: "c) 21",
    points: 5,
  },
  {
    question: "What does \"APR\" stand for in credit cards?",
    options: [
      "a) Annual Percentage Rate",
      "b) Annual Payment Requirement",
      "c) Automated Payment Routing",
      "d) Account Payment Rule"
    ],
    answer: "a) Annual Percentage Rate",
    points: 5,
  },
  {
    question: "Which of these helps build your credit history?",
    options: [
      "a) Having a checking account",
      "b) Getting an allowance",
      "c) Making on-time payments on a credit card",
      "d) Using cash only"
    ],
    answer: "c) Making on-time payments on a credit card",
    points: 5,
  },
  {
    question: "How can you avoid paying interest on a credit card?",
    options: [
      "a) Pay the minimum amount",
      "b) Pay the full balance each month",
      "c) Never check your statement",
      "d) Spend less than $10"
    ],
    answer: "b) Pay the full balance each month",
    points: 5,
  },
  {
    question: "What is a W-2 form used for?",
    options: [
      "a) To apply for college",
      "b) To calculate sales tax",
      "c) To file your taxes",
      "d) To track student loans"
    ],
    answer: "c) To file your taxes",
    points: 5,
  },
  {
    question: "What does FICA stand for?",
    options: [
      "a) Federal Insurance Contributions Act",
      "b) Federal Income and Credit Allocation",
      "c) Financial Investment Credit Association",
      "d) First Income Collection Agency"
    ],
    answer: "a) Federal Insurance Contributions Act",
    points: 5,
  },
  {
    question: "Which of these is deducted from your paycheck?",
    options: [
      "a) Netflix fees",
      "b) Gym memberships",
      "c) Federal and state taxes",
      "d) Credit card minimums"
    ],
    answer: "c) Federal and state taxes",
    points: 5,
  },
  {
    question: "Why is it important to check your pay stub?",
    options: [
      "a) To see if your hours were recorded correctly",
      "b) To know if your phone bill is paid",
      "c) To check the stock market",
      "d) To track your mileage"
    ],
    answer: "a) To see if your hours were recorded correctly",
    points: 5,
  },
  {
    question: "What's the purpose of a tax refund?",
    options: [
      "a) It's a bonus for good behavior",
      "b) It's money returned because you paid too much in taxes",
      "c) It's an award from the government",
      "d) It's an annual donation"
    ],
    answer: "b) It's money returned because you paid too much in taxes",
    points: 5,
  },
  {
    question: "What is the stock market?",
    options: [
      "a) A grocery store",
      "b) A place to buy and sell company shares",
      "c) A kind of savings account",
      "d) A bank loan system"
    ],
    answer: "b) A place to buy and sell company shares",
    points: 5,
  },
  {
    question: "Which investment is usually the most risky?",
    options: [
      "a) U.S. Treasury Bonds",
      "b) Savings account",
      "c) Individual stocks",
      "d) Certificate of Deposit (CD)"
    ],
    answer: "c) Individual stocks",
    points: 5,
  },
  {
    question: "What is diversification in investing?",
    options: [
      "a) Buying more of one stock",
      "b) Putting all money in savings",
      "c) Spreading investments to reduce risk",
      "d) Selling everything quickly"
    ],
    answer: "c) Spreading investments to reduce risk",
    points: 5,
  },
  {
    question: "What is a dividend?",
    options: [
      "a) A type of debt",
      "b) A bank loan",
      "c) A payment made to shareholders from a company's profits",
      "d) A penalty fee"
    ],
    answer: "c) A payment made to shareholders from a company's profits",
    points: 5,
  },
  {
    question: "Why should you start investing early?",
    options: [
      "a) To spend faster",
      "b) To avoid taxes",
      "c) To take advantage of compound interest over time",
      "d) To get a higher credit score"
    ],
    answer: "c) To take advantage of compound interest over time",
    points: 5,
  },
  {
    question: "What does ROI stand for?",
    options: [
      "a) Rate of Income",
      "b) Return on Investment",
      "c) Rate of Inflation",
      "d) Return of Insurance"
    ],
    answer: "b) Return on Investment",
    points: 5,
  },
  {
    question: "Which is a safer long-term investment for retirement?",
    options: [
      "a) Lottery tickets",
      "b) Index funds",
      "c) Individual day trading",
      "d) Cash at home"
    ],
    answer: "b) Index funds",
    points: 5,
  },
  {
    question: "What happens when you sell a stock for more than you bought it?",
    options: [
      "a) You pay a late fee",
      "b) You lose money",
      "c) You earn a capital gain",
      "d) You earn a salary"
    ],
    answer: "c) You earn a capital gain",
    points: 5,
  },
  {
    question: "What does \"compound interest\" mean?",
    options: [
      "a) Interest only on the money you deposit",
      "b) Interest that gets added once a year",
      "c) Earning interest on both your money and the interest it earns",
      "d) A bank penalty"
    ],
    answer: "c) Earning interest on both your money and the interest it earns",
    points: 5,
  },
  {
    question: "How often should you check your investment portfolio?",
    options: [
      "a) Every hour",
      "b) Once a year only",
      "c) Every time the stock market crashes",
      "d) Regularly, but not obsessively"
    ],
    answer: "d) Regularly, but not obsessively",
    points: 5,
  },
  {
    question: "What is a checking account used for?",
    options: [
      "a) Investing in stocks",
      "b) Paying bills and everyday expenses",
      "c) Long-term savings only",
      "d) Buying gift cards"
    ],
    answer: "b) Paying bills and everyday expenses",
    points: 5,
  },
  {
    question: "What is the main difference between a debit card and a credit card?",
    options: [
      "a) Debit is only for large purchases",
      "b) Credit cards withdraw directly from your bank",
      "c) Debit uses your own money; credit borrows from the bank",
      "d) Credit cards are free"
    ],
    answer: "c) Debit uses your own money; credit borrows from the bank",
    points: 5,
  },
  {
    question: "What is overdraft protection?",
    options: [
      "a) Extra interest on savings",
      "b) A way to stop fraud",
      "c) A service that covers spending beyond your balance",
      "d) Insurance for your wallet"
    ],
    answer: "c) A service that covers spending beyond your balance",
    points: 5,
  },
  {
    question: "What's one downside of using overdraft protection?",
    options: [
      "a) You earn less interest",
      "b) You're charged a fee",
      "c) Your credit score goes up",
      "d) You stop saving"
    ],
    answer: "b) You're charged a fee",
    points: 5,
  },
  {
    question: "What is the purpose of a PIN number with your debit card?",
    options: [
      "a) To increase interest",
      "b) For security",
      "c) To pay taxes",
      "d) To buy insurance"
    ],
    answer: "b) For security",
    points: 5,
  },
  {
    question: "What should you do if your debit card is lost or stolen?",
    options: [
      "a) Wait a few days",
      "b) Call your bank and report it immediately",
      "c) Tell your friend to check",
      "d) Do nothing unless it's used"
    ],
    answer: "b) Call your bank and report it immediately",
    points: 5,
  },
  {
    question: "What does ATM stand for?",
    options: [
      "a) Automatic Tax Machine",
      "b) Always Take Money",
      "c) Automated Teller Machine",
      "d) Active Transfer Monitor"
    ],
    answer: "c) Automated Teller Machine",
    points: 5,
  },
  {
    question: "Why might a bank charge monthly maintenance fees?",
    options: [
      "a) To reward saving",
      "b) To punish overspending",
      "c) For account services if you don't meet minimum balance",
      "d) For using cash"
    ],
    answer: "c) For account services if you don't meet minimum balance",
    points: 5,
  },
  {
    question: "What is direct deposit?",
    options: [
      "a) A bank penalty",
      "b) Cashing a check at the bank",
      "c) Your paycheck going directly into your bank account",
      "d) Paying bills with your credit card"
    ],
    answer: "c) Your paycheck going directly into your bank account",
    points: 5,
  },
  {
    question: "Which of these is a benefit of using online banking?",
    options: [
      "a) Higher loan fees",
      "b) Faster internet",
      "c) Convenience and real-time tracking",
      "d) Free gym membership"
    ],
    answer: "c) Convenience and real-time tracking",
    points: 5,
  },
  {
    question: "What is rent?",
    options: [
      "a) A fee you pay to own a home",
      "b) A fee you pay to live in someone else's property",
      "c) A tax",
      "d) An insurance cost"
    ],
    answer: "b) A fee you pay to live in someone else's property",
    points: 5,
  },
  {
    question: "What is a utility bill?",
    options: [
      "a) A restaurant bill",
      "b) A bank fee",
      "c) A charge for services like water, electricity, or internet",
      "d) An entertainment fee"
    ],
    answer: "c) A charge for services like water, electricity, or internet",
    points: 5,
  },
  {
    question: "When is a car loan a good idea?",
    options: [
      "a) When you want a luxury car",
      "b) When it's the only way to afford reliable transportation",
      "c) To impress friends",
      "d) When you want to avoid insurance"
    ],
    answer: "b) When it's the only way to afford reliable transportation",
    points: 5,
  },
  {
    question: "How can you avoid impulse spending?",
    options: [
      "a) Shop late at night",
      "b) Use cash for everything",
      "c) Make a shopping list and stick to it",
      "d) Always buy things on sale"
    ],
    answer: "c) Make a shopping list and stick to it",
    points: 5,
  },
  {
    question: "What should you consider before making a big purchase?",
    options: [
      "a) Whether it's popular",
      "b) If your friend has it",
      "c) Your budget and needs",
      "d) How fast you can get it"
    ],
    answer: "c) Your budget and needs",
    points: 5,
  }
];