import namor from 'namor'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random()
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
        ? 'complicated'
        : 'single',
  }
}

export function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}

export const annuityObjs = [ 
  {
    id: 1,
    company: "AIG",
    product: "American Pathway VisionMYG",
    rating: "A+",
    rate: 2.05,
    term: 5,
    earnings: 24900,
  },
  {
    id: 2,
    company: "AIG",
    product: "Assured Edge Income Achiever",
    rating: "A+",
    rate: 2.30,
    term: 3,
    earnings: 25100,
  },
  {
    id: 3,
    company: "American National",
    product: "Palladium Multi-Year Guarantee",
    rating: "A+",
    rate: 1.95,
    term: 7,
    earnings: 19000,
  },
  {
    id: 4,
    company: "Athene",
    product: "Max Rate",
    rating: "A+",
    rate: 2.00,
    term: 5,
    earnings: 24200,
  },
  {
    id: 5,
    company: "Delaware Life",
    product: "Pinnacle",
    rating: "A-",
    rate: 2.40,
    term: 5,
    earnings: 26900,
  },
  {
    id: 6,
    company: "Global Atlantic",
    product: "SecureFore 3 & 5",
    rating: "A",
    rate: 2.15,
    term: 3,
    earnings: 22000,
  },
  {
    id: 7,
    company: "Lincoln",
    product: "MYGuarantee Plus",
    rating: "A+",
    rate: 2.00,
    term: 7,
    earnings: 29500,
  },
  {
    id: 8,
    company: "New York Life",
    product: "Secure Term MVA II",
    rating: "A++",
    rate: 1.55,
    term: 10,
    earnings: 32500,
  },
  {
    id: 9,
    company: "Principal",
    product: "Preferred Series",
    rating: "A+",
    rate: 1.95,
    term: 7,
    earnings: 19500,
  },
  {
    id: 10,
    company: "Sagicor",
    product: "Milestone MYGA",
    rating: "B+",
    rate: 2.10,
    term: 5,
    earnings: 29500,
  },
  {
    id: 11,
    company: "Security Mutual",
    product: "SPDA 5 & 5",
    rating: "A-",
    rate: 1.75,
    term: 5,
    earnings: 20500,
  },
  {
    id: 12,
    company: "Symetra",
    product: "Select",
    rating: "A+",
    rate: 1.80,
    term: 5,
    earnings: 19500,
  },
  {
    id: 13,
    company: "The Standard",
    product: "Focused Growth Annuity",
    rating: "A",
    rate: 2.40,
    term: 3,
    earnings: 18500,
  },
  {
    id: 14,
    company: "United of Omaha",
    product: "Ultra-Premier",
    rating: "A+",
    rate: 2.50,
    term: 7,
    earnings: 28500,
  },
];

