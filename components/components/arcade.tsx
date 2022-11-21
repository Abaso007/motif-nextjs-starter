export default ({ src, title }: { src: string; title?: string }) => {
  return (
    <div
      className="relative h-0 rounded-lg overflow-hidden"
      style={{ paddingBottom: "calc(66.6667% + 41px)" }}
    >
      <iframe
        src={src}
        frameBorder="0"
        // @ts-ignore
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen=""
        title={title || "Try out the demo"}
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  );
};
