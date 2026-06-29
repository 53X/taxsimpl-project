import { getGoogleReviewsUrl } from "@/lib/site";

export type GoogleReview = {
  id: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  relativeDate: string;
};

/** Verified stats from Google Business Profile (fetched 2026-06-29 via client share link). */
export const googleReviewsSummary = {
  rating: 5.0,
  totalReviews: 20,
  profileUrl: getGoogleReviewsUrl(),
} as const;

/** Verified review text from the live Google Business Profile. Update manually when new reviews are added. */
export const googleReviews: GoogleReview[] = [
  {
    id: "review-piglu-paul",
    author: "Piglu Paul",
    rating: 5,
    text: "I had a great experience with TaxSimpl Advisors LLP for my company incorporation. The entire process was smooth, transparent, and quick. team explained everything clearly, took care of all the legalities, and kept me updated at every step. Highly recommend their services if you're looking for hassle-free company registration!",
    relativeDate: "a year ago",
  },
  {
    id: "review-archan-ray",
    author: "ARCHAN RAY",
    rating: 5,
    text: "Or work with taxsimpl has been phenomenal so far. We have been working with them for over years. They have done, GST filings, TDS, corporate tax. Recently, they also helped us register another organisation under section 8 companies act.",
    relativeDate: "a year ago",
  },
  {
    id: "review-abu-sayeed-mondal",
    author: "Abu Sayeed Mondal",
    rating: 5,
    text: "I'm pleased to share my experience with Taxsimpl Advisor, whose professional approach and in-depth knowledge of tax regulations have impressed me. The efficient team delivers high-quality services, simplifying complex tax matters.",
    relativeDate: "a year ago",
  },
  {
    id: "review-surajit-roy",
    author: "Surajit Roy",
    rating: 5,
    text: "Wonderful experience. I am in relationship with this firm since last 2 years but I must say that I have received a very positive outcomes from Taxsimpl Advisors LLP.",
    relativeDate: "11 months ago",
  },
  {
    id: "review-arun-kumar",
    author: "Arun Kumar",
    rating: 5,
    text: "The service is very good. Very transparent and clear process. Didn't have any hassle. Thanks to Gupta who made the process very simple and was very helpful.",
    relativeDate: "11 months ago",
  },
  {
    id: "review-dhiraj-singh",
    author: "Dhiraj Singh",
    rating: 5,
    text: "Got solved my NRI Taxation case , professional and timely completion of work. Much appreciated and highly recommended Team Taxsimpl.",
    relativeDate: "a year ago",
  },
  {
    id: "review-jagannath-pan",
    author: "Jagannath Pan",
    rating: 5,
    text: "I'm really satisfied with their help in company formation and ongoing compliances—they made the whole process smooth and stress-free.",
    relativeDate: "a year ago",
  },
  {
    id: "review-arpan-banerjee",
    author: "ARPAN BANERJEE",
    rating: 5,
    text: "Yes it excellent to get work done by Taxsimpl, professional services and trusted individuals. Keep up the hard work",
    relativeDate: "a year ago",
  },
  {
    id: "review-anand-shaw",
    author: "Anand Shaw",
    rating: 5,
    text: "Got NRI tax related services and I am 100%satisfied by team Taxsimpl. Thanks a ton",
    relativeDate: "a year ago",
  },
  {
    id: "review-sujoy-roy",
    author: "Sujoy Roy",
    rating: 5,
    text: "Good & timely tax related service given. Recommended.",
    relativeDate: "10 months ago",
  },
  {
    id: "review-sahil-karmakar",
    author: "SAHIL KARMAKAR",
    rating: 5,
    text: "Very good and trusted organisation for all tax related complaints",
    relativeDate: "a year ago",
  },
  {
    id: "review-suman-pradhan",
    author: "Suman Pradhan",
    rating: 5,
    text: "Best Tax Advisors in kolkata, helped me in income tax litigation",
    relativeDate: "a year ago",
  },
  {
    id: "review-monis-ahmad",
    author: "MONIS AHMAD",
    rating: 5,
    text: "Professionaly sound and adept in handling complex fin issues.",
    relativeDate: "9 months ago",
  },
  {
    id: "review-mrinmoy-mridha",
    author: "Mrinmoy Mridha",
    rating: 5,
    text: "Got Correct approach and guidance wrt taxation",
    relativeDate: "8 months ago",
  },
  {
    id: "review-gita-misra",
    author: "Gita Misra",
    rating: 5,
    text: "Great service they are providing wrt virtual cfo service",
    relativeDate: "a month ago",
  },
  {
    id: "review-a-banerjee",
    author: "A Banerjee",
    rating: 5,
    text: "Mr. Sachin Gupta was very helpful in resolving my queries. I definitely recommend him. Thank you.",
    relativeDate: "2 months ago",
  },
  {
    id: "review-casa-realty",
    author: "Casa Realty",
    rating: 5,
    text: "Great Experience with them liked their services very much . The best part is your knowledge and your politeness highly recommended .",
    relativeDate: "2 months ago",
  },
  {
    id: "review-rajat-barman",
    author: "Rajat Barman",
    rating: 5,
    text: "Heal Care Nursing Services",
    relativeDate: "3 months ago",
  },
];
