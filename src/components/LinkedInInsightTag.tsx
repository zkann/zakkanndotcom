/**
 * LinkedIn Insight Tag component
 * Tracks page views and conversions for LinkedIn advertising
 */

interface LinkedInInsightTagProps {
  partnerId: string;
}

export default function LinkedInInsightTag({ partnerId }: LinkedInInsightTagProps) {
  return (
    <>
      {/* LinkedIn Insight Tag base code */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            _linkedin_partner_id = "${partnerId}";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `,
        }}
      />
    </>
  );
}
