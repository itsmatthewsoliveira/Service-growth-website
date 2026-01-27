interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating?: number;
}

interface TestimonialGridProps {
  testimonials: Testimonial[];
  columns?: 2 | 3;
}

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex text-primary mb-4">
      {"★".repeat(rating)}
    </div>
  );
}

export default function TestimonialGrid({
  testimonials,
  columns = 3,
}: TestimonialGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-8`}>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="p-8 bg-muted rounded-[4px] border border-white/5"
        >
          <StarRating rating={testimonial.rating} />
          <p className="text-white/80 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
          <div>
            <strong className="block text-white">{testimonial.author}</strong>
            <span className="text-sm text-white/50">{testimonial.role}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
