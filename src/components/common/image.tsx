import Image from "next/image";

interface ParamsProps {
  width?: any;
  height?: any;
  quality?: number;
  className?: string;
  loading?: any;
  sizes?: string;
  fill?: any;
  objectFit?: "cover" | "contain";
  priority?: boolean;
}
interface PropsLoader extends ParamsProps {
  src: string;
}

export const MyImage = ({ src, ...props }: PropsLoader) => {
  const source = `${process.env.NEXT_PUBLIC_ASSETS_API}assets/${src}`;
  return (
    <Image src={source} {...props} alt="Picture of the author" unoptimized />
  );
};
