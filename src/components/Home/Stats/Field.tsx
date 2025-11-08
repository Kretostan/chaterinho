interface FieldProps {
  number: string;
  description: string;
}

const Field = ({ number, description }: FieldProps) => {
  return <div>
    <p className="text-4xl md:text-5xl text-accent font-bold">{number}</p>
    <p className="text-secondary pt-6 text-lg">{description}</p>
  </div>;
}

export default Field;
