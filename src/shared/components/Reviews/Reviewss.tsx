'use client';
import { useState, useEffect } from "react";
import { useReviewStore } from "@/src/shared/lib/zustand/store";

interface FormData {
  name: string;
  email: string;
  comment: string;
}

const months = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];

function getAverage(ratings: number[]): string {
  if (!ratings.length) return "0";
  return (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1);
}

function getInitials(name: string): string {
  return name.split(" ").map((n) => n[0]).join("");
}

function getCurrentDate(): string {
  const d = new Date();
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function renderStars(count: number): string {
  return "⭐".repeat(count);
}

export default function Reviewss() {
  const { reviews, loading, fetchReviews, addReview } = useReviewStore();

  const [showForm, setShowForm]             = useState(false);
  const [rating, setRating]                 = useState(0);
  const [hoveredRating, setHoveredRating]   = useState(0);
  const [formData, setFormData]             = useState<FormData>({ name: "", email: "", comment: "" });

  useEffect(() => {
    fetchReviews();
  }, []);

  const average          = getAverage(reviews.map((r) => r.stars));
  const recommendPercent = reviews.length
    ? Math.round((reviews.filter((r) => r.stars >= 4).length / reviews.length) * 100)
    : 0;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await addReview({
      name: formData.name,
      stars: rating,
      data: getCurrentDate(),
      comment: formData.comment,
    });
    setShowForm(false);
    setRating(0);
    setFormData({ name: "", email: "", comment: "" });
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  if (loading) return <p className="text-center py-20 text-gray-500">Загрузка...</p>;

  return (
    <>
      <div className="mt-30 max-w-3xl mx-auto px-4 sm:px-6 py-10 border border-gray-200 rounded-xl mb-10 flex flex-col md:flex-row justify-around items-center gap-6 bg-white">
        <div className="text-center">
          <div className="text-4xl font-normal text-amber-700 mb-2">{average}</div>
          <div className="text-xl mb-1">{renderStars(Math.round(parseFloat(average)))}</div>
          <div className="text-sm text-gray-500">Средний рейтинг</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-normal text-amber-700 mb-2">{reviews.length}</div>
          <div className="text-sm text-gray-500">Всего отзывов</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-normal text-amber-700 mb-2">{recommendPercent}%</div>
          <div className="text-sm text-gray-500">Рекомендуют отель</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-normal">Все отзывы</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-amber-700 hover:bg-amber-800 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors"
          >
            {showForm ? "Отменить" : "Оставить отзыв"}
          </button>
        </div>

        {showForm && (
          <div className="border border-gray-200 rounded-lg p-6 mb-8 bg-white">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Ваша оценка</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="text-3xl transition-colors focus:outline-none"
                    >
                      <span className={star <= (hoveredRating || rating) ? "text-amber-500" : "text-gray-300"}>★</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Ваше имя</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email (не публикуется)</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Ваш отзыв</label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Расскажите о вашем впечатлении от отеля..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2.5 rounded-md font-medium transition-colors"
              >
                Отправить отзыв
              </button>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {reviews.map((review, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-5 bg-white">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-sm font-normal text-amber-700 mr-3 shrink-0">
                  {getInitials(review.name)}
                </div>
                <div className="flex-1">
                  <div className="text-[15px] font-normal mb-1">{review.name}</div>
                  <div className="text-sm">{renderStars(review.stars)}</div>
                </div>
                <div className="text-[13px] text-gray-500">{review.data}</div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}