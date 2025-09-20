import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, author, ogImage, url }) => {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title ? `${title} | My React App` : "My React App"}</title>
      <meta name="description" content={description || "Default description of my React app"} />
      <meta name="keywords" content={keywords || "react, vite, web development"} />
      <meta name="author" content={author || "Your Name"} />

      {/* Open Graph for social sharing */}
      <meta property="og:title" content={title || "My React App"} />
      <meta property="og:description" content={description || "Default description of my React app"} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || "My React App"} />
      <meta name="twitter:description" content={description || "Default description of my React app"} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
};

export default SEO;
