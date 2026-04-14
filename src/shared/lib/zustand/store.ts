import { create } from "zustand";

interface Review {
  name: string;
  stars: number;
  data: string;
  comment: string;
}

interface ReviewStore {
  reviews: Review[];
  loading: boolean;
  fetchReviews: () => Promise<void>;
  addReview: (review: Review) => Promise<void>;
}

const URL = "https://697cc7c1889a1aecfeb3960e.mockapi.io/Hotel/reviews";

export const useReviewStore = create<ReviewStore>((set) => ({
  reviews: [],
  loading: false,

  fetchReviews: async () => {
    set({ loading: true });
    const res = await fetch(URL);
    const data = await res.json();
    set({ reviews: data, loading: false });
  },

addReview: async (review: Review) => {
  await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  });
  set((state) => ({ reviews: [review, ...state.reviews] }));
},
}));