const title =
  'Quick Feedback – The easiest way to add comments or reviews to your static site.';
const description = 'Quick Feedback is being built as part of byRookas startups series';

const SEO = {
  title,
  description,
  canonical: 'https://quickfeedback.digital',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://quickfeedback.digital',
    title,
    description,
    images: [
      {
        url: 'https://quickfeedback.digital/og.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;
