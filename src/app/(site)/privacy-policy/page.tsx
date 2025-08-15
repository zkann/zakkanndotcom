import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the Zak Kann Privacy Policy to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Schema markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Privacy Policy',
              description: 'Read the Zak Kann Privacy Policy to understand how we collect, use, and protect your personal information.',
              url: 'https://zakkann.com/privacy-policy',
            }),
          }}
        />
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-6">
            In this Privacy Policy (&quot;Policy&quot;), references to &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; means Zak Kann, whose business address is available upon request.
          </p>

          <p className="mb-6">
            This Privacy Policy shall govern Our use of any Personal Information collected by Us concerning your use of zakkann.com (&quot;Our Site&quot;). The use of information collected through Our Site shall be limited to the purposes under this Policy.
          </p>

          <p className="mb-6">
            Zak Kann understands that your privacy is important to you and that you care about how your personal and non-personal information is used and shared online. We respect and value the privacy of everyone who visits Our Site and will only collect and use information in ways that are useful to you and in a manner consistent with your rights and Our obligations under the law.
          </p>

          <p className="mb-6">
            Please read this Privacy Policy carefully and ensure that you understand it. If you have any questions regarding this Privacy Policy, the practices of this website or your dealings with this website, you may contact Us at zak@zakkann.com.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900">1. Introduction</h2>
          <p className="mb-6">
            This Policy applies to Our Processing of your Personal Information when you access and/or use Our Site. This Policy would apply to you as a visitor, end-user, representative, end-customer, as applicable.
          </p>
          <p className="mb-6">
            This Privacy Policy applies only to your use of Our Site and does not extend to any websites that are linked to from Our Site (whether We provide those links or whether they are shared by other users). We have no control over how your data is collected, stored or used by other websites and We advise you to check the privacy policies of any such websites before providing any information to them.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900">2. Definition and Interpretation</h2>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left border border-gray-300 font-medium text-gray-900">Term</th>
                  <th className="px-4 py-2 text-left border border-gray-300 font-medium text-gray-900">Definition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-gray-300 font-medium text-gray-900">Account</td>
                  <td className="px-4 py-2 border border-gray-300">means an account required to access and/or use certain areas and features of Our Site;</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300 font-medium text-gray-900">Cookie</td>
                  <td className="px-4 py-2 border border-gray-300">means a small text file placed on your computer or device by Our Site when you visit certain parts of Our Site and/or when you use certain features of Our Site;</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300 font-medium text-gray-900">Our Site</td>
                  <td className="px-4 py-2 border border-gray-300">means this website, zakkann.com</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300 font-medium text-gray-900">Personal Information</td>
                  <td className="px-4 py-2 border border-gray-300">means any information relating to an identified or identifiable natural person</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300 font-medium text-gray-900">Process</td>
                  <td className="px-4 py-2 border border-gray-300">means any operation or set of operations which is performed on Personal Information or sets of Personal Information, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300 font-medium text-gray-900">Services</td>
                  <td className="px-4 py-2 border border-gray-300">means the AI automation and internal tools consulting services provided by Zak Kann.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300 font-medium text-gray-900">We/Us/Our</td>
                  <td className="px-4 py-2 border border-gray-300">means Zak Kann, whose business address is available upon request.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900">3. Personal Identification Information We Collect</h2>
          <p className="mb-6">
            We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, subscribe to the newsletter, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number. Users may, however, visit our Site anonymously.
          </p>
          <p className="mb-6">
            We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personal identification information, except that it may prevent them from engaging in certain Site related activities.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900">4. Non-personal Identification Information We Collect</h2>
          <p className="mb-6">
            We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer, and technical information about Users&apos; means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900">5. How We May Use Collected Information</h2>
          <p className="mb-6">
            We will use your Personal Information only as described in this Privacy Policy and shall Process your Personal Information only if We have a legal basis to. We may use your Personal Information in the following ways:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>To respond to communications from you,</li>
            <li>To carry out market research,</li>
            <li>To analyze your use of Our site,</li>
            <li>To gather feedback to enable Us to continually improve Our site and your user experience,</li>
            <li>To adapt your preferences to your experience on Our site,</li>
            <li>To provide AI automation and internal tools consulting services,</li>
            <li>To send newsletters and educational content about AI automation,</li>
          </ul>

          <p className="mb-6">
            In addition to this, with your permission and/or where permitted by law, We may also use your Personal Information for marketing purposes which may include contacting you by email AND/OR telephone AND/OR text message AND/OR post AND/OR web push notifications with information, news and offers on Our Services.
          </p>

          <p className="mb-6">
            We will not, however, send you any spam and will take all reasonable steps to ensure that we comply with the applicable law in this regard. Zak Kann may also do lead generation activities by adding a call to action buttons/banner/popups for companies interested in AI automation services.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900">6. Data Retention Period</h2>
          <p className="mb-6">
            Zak Kann retains the Personal Information collected where an ongoing legitimate business requires retention of such Personal Information such as for litigation/defense purposes, as necessary to comply with our legal obligations, maintain accurate financial and other records, resolve disputes, and enforce our agreements.
          </p>
          <p className="mb-6">
            In the absence of a need to retain your Personal Information as specified herein, We will either delete or aggregate your Personal Information or, if this is not possible then We will securely store your Personal Information and isolate it from any further Processing until deletion is possible.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900">7. Data Security</h2>
          <ol className="list-decimal pl-6 mb-6 space-y-4">
            <li>
              Your Personal Information is extremely important to us. We use appropriate technical and organizational measures to protect the Personal Information that We collect and Process. The measures We use are designed to provide a level of security appropriate to the risk of Processing your Personal Information. If you have questions about the security of your Personal Information, please contact Us immediately as described in this Policy.
            </li>
            <li>
              Notwithstanding the security measures that We take, it is important to remember that the transmission of data via the internet may not be completely secure and that you are advised to take suitable precautions when transmitting to Us data via the internet.
            </li>
          </ol>

          <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900">8. Disclosure of Information to Third Parties/Partners</h2>
          <ol className="list-decimal pl-6 mb-6 space-y-4">
            <li>
              We may share your Personal Information with other companies in Our group. This includes Our subsidiaries AND/OR Our holding company and its subsidiaries.
            </li>
            <li>
              We may compile statistics about the use of Our Site including data on traffic, usage patterns, user numbers, sales, and other information. All such data will be anonymized and will not include any personally identifying information. We may from time to time share such data with third parties such as prospective investors, affiliates, partners, and advertisers.
            </li>
            <li>
              In certain circumstances, We may be legally required to share certain data held by Us, which may include your Personal Information, for example, where We are involved in legal proceedings or where We are complying with the requirements of legislation, a court order, or a governmental authority.
            </li>
          </ol>

          <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900">9. Your Rights</h2>
          <p className="mb-6">
            As a data subject, you have the following rights under the GDPR, which this Policy and Our use of personal data have been designed to uphold:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>The right to be informed about Our collection and use of personal data;</li>
            <li>The right of access to the personal data We hold about you;</li>
            <li>The right to rectification if any personal data We hold about you is inaccurate or incomplete;</li>
            <li>The right to be forgotten - i.e. the right to ask Us to delete any personal data We hold about you;</li>
            <li>The right to restrict (i.e. prevent) the processing of your personal data;</li>
            <li>The right to data portability (obtaining a copy of your personal data to re-use with another service or organization);</li>
            <li>The right to object to Us using your personal data for particular purposes; and</li>
            <li>Rights with respect to automated decision making and profiling.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900">10. Cookies and Tracking Technologies</h2>
          <p className="mb-6">
            Our Site uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences. Some cookies are essential for the site to function properly, while others help us improve our services and provide a better user experience.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900">11. Third-Party Services</h2>
          <p className="mb-6">
            We may use third-party services such as ConvertKit for email marketing, Google Analytics for website analytics, and other tools to improve our services. These services have their own privacy policies, and we encourage you to review them. We only share the minimum amount of data necessary for these services to function.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900">12. Contacting Us</h2>
          <p className="mb-6">
            If you have any questions about Our Site or this Privacy Policy, please contact Us by email at zak@zakkann.com. Please ensure that your query is clear, particularly if it is a request for information about the data we hold about you.
          </p>

          <p className="mt-12 text-sm text-gray-500">
            Policy Effective From: 2024/01/01
            <br />
            Policy Last Updated: 2024/12/19
          </p>
        </div>
      </div>
    </div>
  );
}

