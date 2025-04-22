
import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

const SEO = ({
  title = "HelixHub - Connect Academia, Industry, and Government",
  description = "HelixHub - Interactive civic alignment platform uniting academia, industry, and government via real-time feedback, data, and innovation.",
  imageUrl = "https://lovable.dev/opengraph-image-p98pqg.png"
}: SEOProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={imageUrl} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageUrl} />
  </Helmet>
);

export default SEO;
