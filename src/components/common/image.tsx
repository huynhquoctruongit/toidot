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
    <Image
      src={source}
      {...props}
      alt="Picture of the author"
      unoptimized
      style={{
        maxWidth: "100%",
      }}
    />
  );
};

interface Audio {
  src: any;
  type: string;
  audioRef: any;
}

export const MySource = ({ src, type, audioRef, ...props }: Audio) => {
  const source = `${process.env.NEXT_PUBLIC_ASSETS_API}assets/${src}`;
  return <audio ref={audioRef} src={source} typeof={type} {...props}></audio>;
};
