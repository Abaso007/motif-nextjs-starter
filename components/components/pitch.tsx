export default ({ src }: { src: string }) => {
  return (
    <div className="relative pb-[64.86486486486486%] h-0 rounded-md overflow-hidden border border-neutral-200">
      <iframe
        src={src}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        // @ts-ignore
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      ></iframe>
    </div>
  );
};
