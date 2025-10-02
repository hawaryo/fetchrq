interface Props {
  image: string;
  title: string;
  price: number;
}

export default function ProductCard({ image, title, price }: Props) {
  return (
    <div className="flex items-center border p-2 sm:flex-col">
      <img
        className="min-w-0"
        src={image}
        alt={title}
        width="300"
        height="300"
      />
      <div className="flex flex-col justify-between">
        <h2>{title}</h2>
        <h3>{price}</h3>
      </div>
    </div>
  );
}
