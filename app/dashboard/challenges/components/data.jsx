const quizData = [
  {
    id: 1,
    question:
      "In the Inter Bank Price Delivery Algorithm ( IPDA), it states that the market always starts with ?",
    options: [
      "a Retracement",
      "a Reversal",
      "an Expansion ",
      "a Consolidation",
    ],
    answer: "a Consolidation",
  },
  {
    id: 2,
    question: "Which of these is not possible for the IPDA Algorithm ?",
    options: [
      "price goes from consolidation to expansion ",
      "price goes from consolidation to expansion then to reversal ",
      "price goes from consolidation to retracement",
      "price goes from consolidation to expansion then to retracement",
    ],
    answer: "price goes from consolidation to retracement",
  },
  {
    id: 3,
    question:
      "An order block is supposed to support price expansion ( either bullish or bearish), but if that OB fails to support price, that OB is called ?",
    options: [
      "a Proportion Block ",
      "a Mitigation  Block ",
      "a Rejection Block  ",
      "a Fair Value Gap",
    ],
    answer: "a Mitigation  Block ",
  },
  {
    id: 4,
    question:
      "During a bullish move, the market always give a fair chance for sellers to engage in the market, this concept can better be understood by? ",
    options: [
      "Fair Valuation of Price ",
      "Order Block ",
      "Range Bound Concept ",
      "Consolidation Concept ",
    ],
    answer: "Fair Valuation of Price ",
  },
  {
    id: 5,
    question:
      "When Price is retracing lower  to hit a bullish order block, at what level or point within the OB Body  can we say the OB is invalidated?",
    options: [
      "at the OPEN of the OB",
      "at the Wick of the OB",
      "at the 50% level of the OB",
      "from the  50% level down towards the Lower Wick  of the OB",
    ],
    answer: "from the  50% level down towards the Lower Wick  of the OB",
  },
  {
    id: 6,
    question: "Expansion is to order blocks as _______ is to fair value gaps",
    options: ["Expansion", "Retracement", "Reversal", "Consolidation"],
    answer: "Retracement",
  },
  {
    id: 7,
    question: " Reversals is to _______",
    options: ["Expansion", "Equilibrium", "Liquidity pools", "Order blocks"],
    answer: "Liquidity pools",
  },
  {
    id: 8,
    question: " Reversal is to _________ is to Expansion",
    options: ["Consolidation", "Order block", "Expansion", "Stop runs"],
    answer: "Consolidation",
  },
  {
    id: 9,
    question: "  Consolidation is to _________ is to Retracement",
    options: ["Expansion", "Equilibrium", "Reversal", "Order blocks"],
    answer: "Expansion",
  },
  {
    id: 10,
    question: " Old Highs is to	_________ ",
    options: [
      "Sell Side Liquidity",
      "Liquidity Pool",
      "Liquidity Voids",
      "Buy Side Liquidity",
    ],
    answer: "Buy Side Liquidity",
  },
];
export default quizData;
