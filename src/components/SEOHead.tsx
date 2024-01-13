import { Helmet } from "react-helmet-async";

interface IProps {
  title?: string;
  description?: string;
}

export function SEOHead({
  title = "Player App",
  description = "Alternative custom video player",
}: Readonly<IProps>) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
