import LegalPage from "@/components/legal/LegalPage";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        Botmaster is a proprietorship business established in 2018 and operated by Sharad Kale.
      </p>

      <h2>Information We Collect</h2>

      <ul>
        <li>Name</li>
        <li>Email Address</li>
        <li>Phone Number</li>
        <li>Resume and educational information</li>
        <li>Website analytics data</li>
      </ul>

      <h2>How We Use Information</h2>

      <ul>
        <li>Processing internship applications.</li>
        <li>Providing software and AI services.</li>
        <li>Communication and support.</li>
        <li>Improving our website.</li>
      </ul>

      <h2>Contact</h2>

      <p>
        Botmaster<br />
        Proprietorship Business (Established 2018)<br />
        Owner: Sharad Kale
      </p>
    </LegalPage>
  );
}