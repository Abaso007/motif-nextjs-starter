export default ({
  id,
  title,
  height = 400,
}: {
  id: string;
  title?: string;
  height?: number;
}) => {
  // The Typeform embed script must be present in motif.json:
  // <script src='https://embed.typeform.com/next/embed.js'></script>
  return (
    <div
      data-tf-widget={id}
      data-tf-iframe-props={`title=${title}`}
      data-tf-medium="snippet"
      style={{ width: "100%", height }}
    >
      <script src="https://embed.typeform.com/next/embed.js"></script>
    </div>
  );
};
